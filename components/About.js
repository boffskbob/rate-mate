import React from 'react';
import { Box, Typography, Paper, Grid, Avatar } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

export default function AboutSection() {
  return (
    <Paper 
      elevation={5} 
      sx={{ 
        p: 6, 
        backgroundColor: '#5856D6', // same purple theme
        color: '#fff', // white text color
        mt: 3,
        borderRadius: 3,
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Box sx={{ position: 'absolute', top: '-50px', right: '-50px', opacity: 0.3 }}>
        <StarIcon sx={{ fontSize: 200 }} />
      </Box>
      <Typography variant="h3" align="center" sx={{ fontWeight: 'bold', mb: 4 }}>
        About RateMate
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography fontSize={90}>🤖</Typography>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
            What We Do
          </Typography>
          <Typography variant="body1" sx={{ mt: 2, fontSize: 20 }}>
            Placeholder.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography fontSize={90}>🧑‍🏫</Typography>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
            Our Mission
          </Typography>
          <Typography variant="body1" sx={{ mt: 2, fontSize: 20 }}>
            Placeholder
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}
