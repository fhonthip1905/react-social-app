import Router from './routes/Router';
import PostContextProvider from './context/PostContext';
import AuthenContextProvider from './context/AuthenContext';
import ThemeContextProvider from './context/ThemeContext';

function App() {
 
  return (
    <ThemeContextProvider>
      <AuthenContextProvider>
        <PostContextProvider>
          <Router />
        </PostContextProvider>
      </AuthenContextProvider>
    </ThemeContextProvider>
  )
}

export default App;
