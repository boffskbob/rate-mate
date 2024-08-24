"use client"

import Image from "next/image";
import Navbar from '@/components/Navbar';
import SearchBar from "@/components/SearchBar";
import { Container, Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <Navbar />
      <Container
        maxWidth="100vw"
        sx={{
          bgcolor: "#5856D6",
          textAlign: 'center',
          height: 'calc(100vh - 81px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
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
    </>

  );
}