import { AppBar } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material';

function AppLayout() {
  return (
    <Box>
      <AppBar />
      <Outlet />
    </Box>
  )
}

export default AppLayout;
