import { Outlet } from "react-router-dom";
import "./Root.css";
import Navbar from "./Pages/SharedComponent/Navbar/Navbar";
import Footer from "./Pages/SharedComponent/Footer/Footer";
const Root = () => {
  return (
    <div className="background min-h-screen relative border">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
