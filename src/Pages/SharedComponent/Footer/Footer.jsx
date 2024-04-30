import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
const Footer = () => {
  return (
    <footer className="mt-6 md:mt-10 lg:mt-14 ">
      <div className="footer flex flex-col items-center justify-center ">
        <div className="row flex gap-10  justify-center">
          <a href="#">
            <FaFacebookF className="text-2xl" />
          </a>
          <a href="#">
            <FaInstagram className="text-2xl" />
          </a>
          <a href="#">
            <TfiYoutube className="text-2xl" />
          </a>
          <a href="#">
            <FaTwitter className="text-2xl" />
          </a>
        </div>
        <div className="row ">
          <ul>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Our Services</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms &amp; Conditions</a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
          </ul>
        </div>
        <div className="row  flex justify-center">
          PaletteParadise Copyright © 2021 Inferno - All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
