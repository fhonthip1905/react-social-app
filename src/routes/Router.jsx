import { createBrowserRouter , RouterProvider, Outlet} from "react-router-dom"

import HomePage from '../pages/HomePage.jsx';
import LoginPage from '../pages/LoginPage.jsx';
import ProfilePage from '../pages/ProfilePage.jsx';
import NotFoundPage from '../pages/NotFoundPage.jsx';
import AppLayout from "../layout/AppLayout.jsx";
//createBrowserRouter : FN (Array < RouterObject>)
//RouterProvider : Component
// NestedRoute : Children Menu
const router = createBrowserRouter([
    {path: "/", element: (
       <AppLayout />
      ), children: [
        {path: "", element:<HomePage/>} ,
        {path: "profile", element: <ProfilePage/>} 
      ],
    },
    {path: "/login", element: <LoginPage/>},
    // {path: "/profile", element: <ProfilePage/>},

    {path: "/*", element: <NotFoundPage/>},


  //   {path: "/nested", element: (<div>
  //     <h1>Layout</h1>
  //     <Outlet />
  //   </div>), 
  //   children: [
  //     {path: "", element: <h1>children</h1>} ,
  //     {path: "sub-2", element: <h1>child2</h1>} ,
  //     {path: "sub-3", element: <h1>child3</h1>} ,
  //     {path: "sub-4", element: <h1>child4</h1>} ,
  //   ],
  // }
]); 
function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
