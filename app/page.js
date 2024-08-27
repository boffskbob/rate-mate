"use client"

import Navbar from '@/components/Navbar';
import SearchBar from "@/components/SearchBar";
import AboutSection from "@/components/AboutSection";
import ContactSection from '@/components/ContactSection';
import { Box, Container, Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <Navbar />
      <Container
        maxWidth="100vw"
        sx={{
          bgcolor: "#5856D6",
          textAlign: 'center',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 3,
        }}
      >
        <Typography variant="h1" component="h1" sx={{ fontWeight: 'bold', mb: 2, color: "#FFF" }}>
          RateMate
        </Typography>
        <Typography variant="h5" component="h2" sx={{ color: '#E5E5E7', mb: 4 }}>
          Your AI professor review partner.
        </Typography>
        <SearchBar/>
      </Container>
      <AboutSection />
      <ContactSection />
    </>

  );
}