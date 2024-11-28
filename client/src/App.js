import React from "react";
import "./App.css";
import WishList from "./pages/wishList/WishList";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/wishlist", element: <WishList /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
