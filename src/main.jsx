import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./Root.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Header.jsx";
import AllArtAndCraft from "./Pages/AllArt&Craft/AllArt&Craft.jsx";
import AddCraftSection from "./Pages/AddCraftSection/AddCraftSection.jsx";
import MyArtAndCraftList from "./Pages/MyArtAndCraftList/MyArtAndCraftList.jsx";
import Signin from "./Pages/Signin/Signin.jsx";
import SignUp from "./Pages/SignUp/SignUp.jsx";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Header></Header>,
      },
      {
        path: "/artCraftSection",
        element: <AllArtAndCraft></AllArtAndCraft>,
      },
      {
        path: "/addCraft",
        element: <AddCraftSection></AddCraftSection>,
      },
      {
        path: "/myCraftAndArt",
        element: <MyArtAndCraftList></MyArtAndCraftList>,
      },
      {
        path: "/signin",
        element: <Signin></Signin>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </AuthProvider>
  </React.StrictMode>
);
