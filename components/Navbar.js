import { AppBar, Toolbar, Typography, Box, Link, Button } from '@mui/material';

export default function Navbar() {
  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ height: 90, display: "flex", justifyContent: "center", }}>
        <Toolbar sx={{ display: "flex", justifyContent: 'space-between', alignItems: "center", justifyContent: "center" }}>
          <Box sx={{ height: "80px", display: "flex", flexDirection: "row", alignItems: "center", flexGrow: 1, gap: 5 }}>
            {/* icon image */}
            <Link href="/" underline="none" color="textPrimary">
              <Typography variant="h6" color="inherit" noWrap fontSize={30}>
                🍎
              </Typography>
            </Link>

            {/* helper pages */}
            <Box sx={{ display: 'flex', flexDirection: "row", gap: 5, fontSize: 20}}>
              <Link href="/about" underline="none" color="textPrimary">
                About
              </Link>
              <Link href="/resources" underline="none" color="textPrimary">
                Resources
              </Link>
              <Link href="/contact" underline="none" color="textPrimary">
                Contact
              </Link>
            </Box>
          </Box>

          {/* account buttons */}
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