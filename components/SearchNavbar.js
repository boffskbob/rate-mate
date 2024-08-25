import { AppBar, Toolbar, Typography, Box, Link, Button } from '@mui/material';
import SearchBar from './SearchBar';

export default function SearchNavbar() {
  return (
    // identical to other Navbar component, except about, contact, and other links are replaced with search bar component
    <AppBar position="fixed" elevation={0} sx={{ borderBottom: 1, borderColor: '#000', backgroundColor: '#fff' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ height: "80px", display: "flex", flexDirection: "row", alignItems: "center", flexGrow: 1, gap: 14 }}>
            <Typography variant="h6" color="inherit" noWrap>
              <Box component="span" sx={{ display: 'flex', alignItems: 'center' }}>
                <Link href="/" underline="none" color="textPrimary">
                  <Box component="span" sx={{ fontSize: '30px', fontWeight: 'bold', color: '#000' }}>
                    🍎
                  </Box>
                </Link>
              </Box>
            </Typography>
            <SearchBar />            
          </Box>
  
          <Box display="flex" gap={2}>
            <Button variant="outlined" sx={{ borderRadius: '10px' }}>
              Sign In
            </Button>
            <Button variant="contained" sx={{ borderRadius: '10px' }}>
              Register
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
  );
}
