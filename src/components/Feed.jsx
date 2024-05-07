import { Box, Button, Stack} from '@mui/material';
import PostItem from './PostItem';
import { useContext } from 'react';
import { PostContext } from '../context/PostContext';

function Feed() {
    const { posts } =  useContext(PostContext);
  return (
    <Box bgcolor='gray'>
        <Stack spacing={4} sx={{ alignItems: 'center'}} mt={4}>
          
          
            <Button 
            variant='outline' 
            color='primary'
            sx={{
                fontWeight: 600,
            }}
            >Create Post</Button>
            {posts.slice(0, 50).map((post) => (
                <PostItem  key={post.id} title={post.title} body={post.body}/>
            ))}
            
        </Stack>
    </Box>
  )
}

export default Feed;
