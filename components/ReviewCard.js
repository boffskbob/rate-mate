import React from 'react';
import { Box, Typography, Card, CardContent, Grid, IconButton } from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

const ReviewCard = ({ name, subject, stars, review }) => {
  // rating determines background color
  const getBackgroundColor = (stars) => {
    switch (stars) {
      case 5:
        return '#4CAF50'; 
      case 4:
        return '#8BC34A'; 
      case 3:
        return '#FFC107';
      case 2:
        return '#FF9800';
      case 1:
        return '#F44336';
      case 0:
      default:
        return '#9E9E9E';
    }
  };

  return (
    <Card variant="outlined" sx={{ display: 'flex', padding: 2, margin: 3, alignItems: 'center' }}>
      <Grid container spacing={2}>
        {/* rating text and integer */}
        <Grid item>
          <Box
            sx={{
              width: 50,
              height: 50,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: getBackgroundColor(stars),
              borderRadius: '4px',
            }}
          >
            <Typography variant="caption" sx={{ color: 'white', fontWeight: 'bold' }}>
              RATING
            </Typography>
            <Typography variant="h5" sx={{ color: 'white', fontWeight: 'bold' }}>
              {stars}
            </Typography>
          </Box>
        </Grid>
        {/* adjacent grid with professor name, subject, and review */}
        <Grid item xs>
          <CardContent sx={{ padding: 0 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {subject}
            </Typography>
            <Typography variant="body1" sx={{ marginTop: 1 }}>
              {`"${review}"`}
            </Typography>
          </CardContent>
        </Grid>
        <Grid item>
          <IconButton>
            <BookmarkBorderIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ReviewCard;
