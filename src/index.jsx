import React from 'react';
import ReactDOM from 'react-dom/client';
import About from './Components/About';
import AppLayout from './App';
import Error from './Components/Error';
import Body from './Components/Body'
import Contact from './Contact';
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import RestaurantMenu from './Components/RestaurantMenu';



const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
      {
       path:"/",
       element:<Body/>,
      },
      {
        path:"/About",
        element:<About/>
      },
      {
        path:"/Contact",
        element:<Contact/>
      },
      {
        path:"/restaurant/:id",
        element:<RestaurantMenu/>
      }
    ]
  },
 
])
        
        

 

ReactDOM.createRoot(document.getElementById('root')).render(
 
  <RouterProvider router={appRouter}/>
  
)

