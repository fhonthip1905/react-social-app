
import { Box, Stack, Grid } from '@mui/material';
import AppBar from '../components/AppBar';

function HomePage() {

  return (
    <Box flexGrow={1}>
      <AppBar />

      <Grid container sx={{ textAlign: 'center', height: 'cal(100vh - 64px)' }}>
          <Grid item md={3} sx={{ bgcolor:'pink',display:{ xs: 'none', md: 'block'}}}>L</Grid>
          <Grid item xs={12} md={6} >M</Grid>
          <Grid item md={3} sx={{textAlign:'center',bgcolor:'pink',display:{ xs: 'none', md: 'block'}}}>R</Grid>
      </Grid>
    </Box>
  )
}

export default HomePage;
