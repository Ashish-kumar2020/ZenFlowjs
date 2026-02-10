import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Signup from "./components/Signup";

import MainLayout from "./components/MainLayout";
import HomePage from "./components/HomePage";
import Signin from "./components/Singin";
import Tasks from "./components/Tasks";
import Notes from "./components/Notes";
import Flow from "./components/Flow";
import Profile from "./components/Profile";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainLayout />,
//     children: [
//       { index: true, element: <Signup /> },
//       {
//         path: "/home",
//         element: <HomePage />,
//       },
//       {
//         path: "/tasks",
//         element: <Tasks />,
//       },
//       {
//         path: "/login",
//         element: <Signin />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter([
  { 
    path: "/", 
    element: <Signup /> 
  },
  {
    path: "/login",
    element: <Signin/>
  },
  {
    path: "/home",
    element: <MainLayout/>,
    children :[
      {
        index: true,
        element: <Tasks/>
      },
      {
        path: "notes",
        element: <Notes/>
      },
      {
        path: "flow",
        element: <Flow/>
      },
      {
        path: "profile",
        element: <Profile/>
      }
    ]
  }


]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
