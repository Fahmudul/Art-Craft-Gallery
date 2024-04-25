import { Outlet } from "react-router-dom";
import "./Root.css";
import Navbar from "./Pages/SharedComponent/Navbar/Navbar";
const Root = () => {
  return (
    <div className="background">
      <Navbar></Navbar>

      <Outlet></Outlet>
    </div>
  );
};

export default Root;
