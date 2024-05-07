import { createBrowserRouter , RouterProvider} from "react-router-dom"

//createBrowserRouter : FN (Array < RouterObject>)
//RouterProvider : Component
const router = createBrowserRouter([
    {path: "/", element: <h1>🌻 HOME </h1>},
    {path: "/login", element: <h1>🌻 Login</h1>},
    {path: "/profile", element: <h1>🌻 Proflie </h1>},
    {path: "/*", element: <h1>🌻 404 Not Found 🌻 </h1>}
]); 
function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
