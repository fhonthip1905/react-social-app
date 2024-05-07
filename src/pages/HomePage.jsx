
import { Box,  Grid } from '@mui/material';
import AppBar from '../components/AppBar';
import SideBar from '../components/SideBar';
import Feed from '../components/Feed';
import RightBar from '../components/RightBar'

function HomePage() {

  return (
    <Box flexGrow={1}>
      <AppBar />

      <Grid container sx={{ textAlign: 'center', height: 'cal(100vh - 64px)' }}>
          <Grid item md={3} sx={{ bgcolor:'pink',display:{ xs: 'none', md: 'block'}}}>
            <SideBar />
          </Grid>
          <Grid item xs={12} md={6} >
            <Feed />
          </Grid>
          <Grid item md={3} sx={{textAlign:'center',bgcolor:'pink',display:{ xs: 'none', md: 'block'}}}>
            <RightBar />
          </Grid>
      </Grid>
    </Box>
  )
}

export default HomePage;
