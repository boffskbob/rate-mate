'use client'
import Image from "next/image";
import { useState } from "react";
import ReactMarkdown from 'react-markdown'
import { Box, Button, Stack, TextField } from "@mui/material";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    {
      role : "model",
      parts: [{ text: "Hi! I'm RateMate, your professor review partner. How can I help you today?" }]
    }
  ])
  const [message, setMessage] = useState('')
  const sendMessage = async () => {
    setMessages((messages) => [
      ...messages,
      {role : "user", parts : [{text : message}]},
      {role : "model", parts : [{text : ''}]}
    ])
    setMessage('')
    
    const response = fetch('/api/chat', {
      method : "POST",
      headers : {
        'Content-Type' : 'application/json',
      },
      body : JSON.stringify([...messages, {role : 'user', parts : [{text : message}]}])
    }).then(async(res) => {
      const reader = res.body.getReader()
      const decoder = new TextDecoder()

      let result = ''
      return reader.read().then(function processText({done, value}) {
        if (done){
          return result
        }
        const text = decoder.decode(value || new Uint8Array(), {stream : true})
        setMessages((messages) => {
          let lastMessage = messages[messages.length - 1]
          let otherMessages = messages.slice(0, messages.length - 1)
          return [
            ...otherMessages,
            {...lastMessage, parts: [{ text: lastMessage.parts[0].text + text }]}
          ]
        })

        return reader.read().then(processText)
      })
      }
    )
  }
  return (
    <Stack direction="column" width="500px" height="650px" border="1px solid black" p={2} spacing={3}>
      {/* chatlog */}
      <Stack direction="column" spacing={2} flexGrow={1} overflow="auto" maxHeight="100%">
      {messages.map((message, index) => 
        (<Box key={index} display="flex" justifyContent={message.role === "model" ? "flex-start" : "flex-end"}>
          <Box bgcolor={message.role ==="model" ? "primary.main" : "secondary.main"} color="white" borderRadius={16} p={3}>
            <ReactMarkdown>{message.parts[0].text}</ReactMarkdown>
          </Box>
        </Box>)
      )}
      </Stack>
      {/* Textfield */}
      <Stack direction="row" spacing={2}>
        <TextField label="Message" fullWidth value={message} onChange={(e) => {setMessage(e.target.value)}} />
        <Button variant="contained" onClick={sendMessage}>Send</Button>
      </Stack>
    </Stack>
  );
}