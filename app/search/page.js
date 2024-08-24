"use client"

import React, { useState, useMemo } from 'react';
import { Box, Typography, Select, MenuItem, Button } from '@mui/material';
import SearchNavbar from "@/components/SearchNavbar";
import mockData from '@/reviews.json';
import ReviewCard from '@/components/ReviewCard';
import { useSearchParams } from 'next/navigation';

const SearchPage = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  
  const [subject, setSubject] = useState('');

  // filter reviews based on query AND subject
  // useMemo saves time by only rerendering the list when its dependencies change
  const filteredReviews = useMemo(() => {
    return mockData.reviews
      .filter(review => 
        review.name.toLowerCase().includes(query?.toLowerCase() || "")
      )
      .filter(review => 
        !subject || review.subject === subject
      );
  }, [query, subject]);

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  return (
    <>
      <SearchNavbar />
      <Box
        sx={{
          display: 'flex',
          justifyContent: "center",
          minHeight: '100vh',
          padding: 2,
        }}
      >
        <Box
          sx={{
            width: '85%',
            paddingTop: 15,
          }}
        >
          <Box sx={{ ml: 3 }}>
            <Typography variant="h5">
              {filteredReviews.length} Ratings with "<strong>{query}</strong>" in their name and teaching "<strong>{subject}</strong>"
            </Typography>
            <Box display="flex" alignItems="center" gap={2} mt={2}>
              <Typography variant='h5'>
                <strong>Subject</strong>
              </Typography>
              <Select
                value={subject}
                onChange={handleSubjectChange}
                displayEmpty
                sx={{ width: 300, marginTop: 2, marginBottom: 3 }}
              >
                <MenuItem value="">
                  <em>Select...</em>
                </MenuItem>
                <MenuItem value="Accounting">Accounting</MenuItem>
                <MenuItem value="Anthropology">Anthropology</MenuItem>
                <MenuItem value="Architecture">Architecture</MenuItem>
                <MenuItem value="Art">Art</MenuItem>
                <MenuItem value="Biology">Biology</MenuItem>
                <MenuItem value="Business Administration">Business Administration</MenuItem>
                <MenuItem value="Chemistry">Chemistry</MenuItem>
                <MenuItem value="Communications">Communications</MenuItem>
                <MenuItem value="Computer Science">Computer Science</MenuItem>
                <MenuItem value="Education">Education</MenuItem>
                <MenuItem value="Engineering">Engineering</MenuItem>
                <MenuItem value="English">English</MenuItem>
                <MenuItem value="Environmental Science">Environmental Science</MenuItem>
                <MenuItem value="Foreign Languages">Foreign Languages</MenuItem>
                <MenuItem value="Graphic Design">Graphic Design</MenuItem>
                <MenuItem value="History">History</MenuItem>
                <MenuItem value="Journalism">Journalism</MenuItem>
                <MenuItem value="Law">Law</MenuItem>
                <MenuItem value="Marketing">Marketing</MenuItem>
                <MenuItem value="Mathematics">Mathematics</MenuItem>
                <MenuItem value="Medicine">Medicine</MenuItem>
                <MenuItem value="Music">Music</MenuItem>
                <MenuItem value="Nursing">Nursing</MenuItem>
                <MenuItem value="Philosophy">Philosophy</MenuItem>
                <MenuItem value="Physics">Physics</MenuItem>
                <MenuItem value="Political Science">Political Science</MenuItem>
                <MenuItem value="Psychology">Psychology</MenuItem>
                <MenuItem value="Sociology">Sociology</MenuItem>
                <MenuItem value="Theater">Theater</MenuItem>

              </Select>
            </Box>
          </Box>

          <Box maxWidth="70vw">
            {filteredReviews.map((review, index) => (
              <ReviewCard
                key={index}
                name={review.name}
                subject={review.subject}
                stars={review.stars}
                review={review.review}
              />
            ))}
          </Box>
        </Box>
      </Box>
      <Button
        variant='contained'
        sx={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          zIndex: 1000,
          borderRadius: 10,
          backgroundColor: '#5856D6'
        }}
      >
        Questions? Ask RateMate!
      </Button>
    </>
  );
};

export default SearchPage;
