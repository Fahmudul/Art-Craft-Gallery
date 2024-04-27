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
import PrivateRoute from "./PrivateRoute/PrivateRoute.jsx";
import ErrorElements from "./Pages/ErrorElement/ErrorElement.jsx";
import ViewDetails from "./Pages/ViewDetails/ViewDetails.jsx";
import UpdateArtCraftDetails from "./Pages/UpdateArtCraftDetails/UpdateArtCraftDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorElements></ErrorElements>,
    children: [
      {
        path: "/",
        element: <Header></Header>,
      },
      {
        path: "/artCraftSection",
        element: <AllArtAndCraft></AllArtAndCraft>,
        loader: () =>
          fetch("https://art-craft-store-server-lac.vercel.app/artsandcrafts"),
      },
      {
        path: "/artCraftSection/:id",
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://art-craft-store-server-lac.vercel.app/artsandcrafts/${params.id}`
          ),
      },
      {
        path: "/addCraft",
        element: (
          <PrivateRoute>
            <AddCraftSection></AddCraftSection>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateArtCraft/:id",
        element: (
          <PrivateRoute>
            <UpdateArtCraftDetails></UpdateArtCraftDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/artsandcrafts/${params.id}`),
      },
      {
        path: "/myCraftAndArt",
        element: (
          <PrivateRoute>
            <MyArtAndCraftList></MyArtAndCraftList>
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://art-craft-store-server-lac.vercel.app/artsandcrafts"),
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
