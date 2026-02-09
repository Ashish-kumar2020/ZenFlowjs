import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Signup from "./components/Signup";

import MainLayout from "./components/MainLayout";
import HomePage from "./components/HomePage";
import Signin from "./components/Singin";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Signup /> },
        {
          path: "/home",
          element: <HomePage />,
        },
        {
          path: "/login",
          element: <Signin/>
        }
      ],
    },
  ]);

function App() {
  
  return <RouterProvider router={router} />;
}

export default App;
