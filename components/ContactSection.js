import React from 'react';
import { Box, Typography, Paper, TextField, Button, Grid, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function ContactSection() {
  return (
    <Paper 
      elevation={5} 
      sx={{ 
        p: 6, 
        backgroundColor: '#5856D6',
        color: '#fff',
        mt: 3,
        borderRadius: 3,
        borderRadius: 3,
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Box sx={{ position: 'absolute', top: '-50px', left: '-50px', opacity: 0.3 }}>
        <SendIcon sx={{ fontSize: 200 }} />
      </Box>
      <Typography variant="h3" align="center" sx={{ fontWeight: 'bold', mb: 4 }}>
        Contact Us
      </Typography>
      <Grid container spacing={4} sx={{ display: "flex", alignItems: "flex-start"}}>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, ml: 20 }}>
            <IconButton sx={{ color: '#fff', mr: 2 }}>
              <PhoneIcon />
            </IconButton>
            <Typography fontSize={20} variant="body1">
              +1 234 567 890
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, ml: 20 }}>
            <IconButton sx={{ color: '#fff', mr: 2 }}>
              <EmailIcon />
            </IconButton>
            <Typography fontSize={20} variant="body1">
              contact@ratemate.com
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', ml: 20 }}>
            <IconButton sx={{ color: '#fff', mr: 2 }}>
              <LocationOnIcon />
            </IconButton>
            <Typography fontSize={20} variant="body1">
              123 RateMate Lane, Capital City, USA
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              maxWidth: 400,
              mx: 'auto',
            }}
          >
            <TextField 
              label="Name" 
              variant="outlined" 
              fullWidth 
              InputLabelProps={{
                style: { color: '#fff' },
              }} 
              InputProps={{
                style: { color: '#fff', borderColor: '#fff' },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#fff',
                  },
                  '&:hover fieldset': {
                    borderColor: '#fff',
                  },
                },
              }}
            />
            <TextField 
              label="Email" 
              variant="outlined" 
              fullWidth 
              InputLabelProps={{
                style: { color: '#fff' },
              }} 
              InputProps={{
                style: { color: '#fff', borderColor: '#fff' },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#fff',
                  },
                  '&:hover fieldset': {
                    borderColor: '#fff',
                  },
                },
              }}
            />
            <TextField 
              label="Message" 
              variant="outlined" 
              multiline 
              rows={4} 
              fullWidth 
              InputLabelProps={{
                style: { color: '#fff' },
              }} 
              InputProps={{
                style: { color: '#fff', borderColor: '#fff' },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#fff',
                  },
                  '&:hover fieldset': {
                    borderColor: '#fff',
                  },
                },
              }}
            />
            <Button 
              variant="contained" 
              color="primary" 
              fullWidth 
              endIcon={<SendIcon />}
              sx={{
                backgroundColor: '#fff',
                color: '#6c63ff',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: '#f0f0f0',
                },
              }}
            >
              Send Message
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
