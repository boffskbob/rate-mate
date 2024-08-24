"use client"

import React, { useState } from 'react';
import { Box, Container, TextField, InputAdornment, IconButton, Typography, Select, MenuItem, Card, CardContent, Grid, Button } from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import SearchNavbar from "@/components/SearchNavbar";
import mockData from '@/reviews.json';
import ReviewCard from '@/components/ReviewCard';
import { useSearchParams } from 'next/navigation';

const SearchPage = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  const filteredReviews = mockData.reviews.filter((review) =>
    review.name.toLowerCase().includes(query?.toLowerCase() || "")
  );

  const [subject, setSubject] = useState('');

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
        <SearchNavbar />
        <Box sx={{ paddingTop: '80px' }}>
            <Container maxWidth="lg">
                
                <Select
                    value={subject}
                    onChange={handleSubjectChange}
                    displayEmpty
                    fullWidth
                    sx={{ marginTop: 2, marginBottom: 3 }}
                >
                    <MenuItem value="">
                        <em>Select...</em>
                    </MenuItem>
                    <MenuItem value="Chemistry">Chemistry</MenuItem>
                    <MenuItem value="Mathematics">Mathematics</MenuItem>
                    <MenuItem value="Computer Science">Computer Science</MenuItem>
                    <MenuItem value="Biology">Biology</MenuItem>
                    <MenuItem value="Physics">Physics</MenuItem>
                    <MenuItem value="Economics">Economics</MenuItem>
                    <MenuItem value="Psychology">Psychology</MenuItem>
                    <MenuItem value="English">English</MenuItem>
                    <MenuItem value="History">History</MenuItem>
                    <MenuItem value="Political Science">Political Science</MenuItem>
                    <MenuItem value="Sociology">Sociology</MenuItem>
                    <MenuItem value="Engineering">Engineering</MenuItem>
                    <MenuItem value="Business Administration">Business Administration</MenuItem>
                    <MenuItem value="Art">Art</MenuItem>
                    <MenuItem value="Philosophy">Philosophy</MenuItem>
                    <MenuItem value="Education">Education</MenuItem>
                    <MenuItem value="Nursing">Nursing</MenuItem>
                    <MenuItem value="Environmental Science">Environmental Science</MenuItem>
                    <MenuItem value="Anthropology">Anthropology</MenuItem>
                    <MenuItem value="Communications">Communications</MenuItem>
                    <MenuItem value="Music">Music</MenuItem>
                    <MenuItem value="Foreign Languages">Foreign Languages</MenuItem>
                    <MenuItem value="Marketing">Marketing</MenuItem>
                    <MenuItem value="Journalism">Journalism</MenuItem>
                    <MenuItem value="Graphic Design">Graphic Design</MenuItem>
                    <MenuItem value="Architecture">Architecture</MenuItem>
                    <MenuItem value="Law">Law</MenuItem>
                    <MenuItem value="Medicine">Medicine</MenuItem>
                    <MenuItem value="Theater">Theater</MenuItem>
                    <MenuItem value="Accounting">Accounting</MenuItem>
                </Select>

                <Typography variant="h5" gutterBottom>
                    {filteredReviews.length} Ratings with "<strong>{query}</strong>" in their name
                </Typography>

                {filteredReviews.map((review, index) => (
                    <ReviewCard
                    key={index}
                    name={review.name}
                    subject={review.subject}
                    stars={review.stars}
                    review={review.review}
                    />
                ))}
            </Container>
        </Box>
    </>
  );
};

export default SearchPage;
