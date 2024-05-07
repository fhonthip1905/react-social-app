import { Box, Stack} from '@mui/material';
import PostItem from './PostItem';

function Feed() {
  return (
    <Box bgcolor='gray'>
        <Stack spacing={4} sx={{ alignItems: 'center'}} mt={4}>
            <PostItem />
            <PostItem />
            <PostItem />
        </Stack>
    </Box>
  )
}

export default Feed;
