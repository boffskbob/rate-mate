import { NextResponse } from "next/server";
import { Pinecone } from "@pinecone-database/pinecone";
import { GoogleGenerativeAI } from "@google/generative-ai";

const systemPrompt = `You are an AI assistant designed to help students find the top 3 professors that best match their needs based on the information available on Rate My Professor. Your task is to understand the student's query, extract relevant information from the Rate My Professor database, and provide a concise and accurate list of the top 3 professors that meet their criteria.

If the student provides a university name, ensure that the professors you recommend are associated with that university. If no university is specified, find the best matches across all available universities. For each professor, include relevant details such as overall rating, teaching style, availability, and any specific attributes mentioned in the student's query.

Your response should be helpful, clear, and focused on the student's needs.`

export async function POST(req){
    const data = await req.json()
    const pc = new Pinecone({
        apiKey : process.env.PINECONE_API_KEY
    })
    const index = pc.index('rag').namespace('ns1')

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
    const model = genAI.getGenerativeModel({ model: "text-embedding-004"});


    const text = data[data.length - 1].content
    const result = await model.embedContent(text)
    const embedding = result.embedding
    
    const results = await index.query({
        topK : 3,
        includeMetadata : true,
        vector : embedding.values
    })
    

    let resultString = 'Returned results : '
    results.matches.forEach((match) => {
        resultString += `
        \n
        Professor: ${match.id}
        Review: ${match.metadata.review}
        University: ${match.metadata.university}
        Stars: ${match.metadata.stars}
        \n\n`
    })

    
    // text generation model
    const model2 = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const lastMessage = data[data.length - 1]
    const lastMessageContent = lastMessage.content + resultString
    const lastDataWithoutLastMessage = data.slice(0, data.length - 1)

    // error with formatting here
    const chat = await model2.startChat({
        history : [
            {
                role: "user",
                parts : [{text : "Hello"}]
            },
            {
                role : "model",
                parts : [{text : systemPrompt}]
            },
            ...lastDataWithoutLastMessage,
        ]
    })
    const completion = chat.sendMessageStream(lastMessageContent)
    
    const stream = new ReadableStream({
        async start(controller) { 
            const encoder = new TextEncoder()
            try {
                for await (const chunk of completion.stream){
                    const content = chunk.choices[0]?.delta?.content
                    if (content){
                        const text =encoder.encode(content)
                        controller.enqueue(text)
                    }
                }
            }
            catch (err){
                controller.error(err)
            }
            finally {
                controller.close()
            }
        }
    })

    return new NextResponse(stream)
}