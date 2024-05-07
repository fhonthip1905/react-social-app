import Router from './routes/Router';
import PostContextProvider from './context/PostContext';
import AuthenContextProvider from './context/AuthenContext';
import ThemeContextProvider from './context/ThemeContext';
import { CssBaseline } from '@mui/material';

function App() {
 
  return (
    <ThemeContextProvider>
      <AuthenContextProvider>
        <PostContextProvider>
          <CssBaseline>
            <Router />
          </CssBaseline>
        </PostContextProvider>
      </AuthenContextProvider>
    </ThemeContextProvider>
  )
}

export default App;
