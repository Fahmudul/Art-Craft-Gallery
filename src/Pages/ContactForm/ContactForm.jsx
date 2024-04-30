import React, { useEffect } from "react";
import "./ContactForm.css";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactForm = () => {
  useEffect(() => {
    AOS.init({ duration: 400 });
  }, []);
  return (
    <div
      className="cardd mx-auto w-[95%] lg:w-[85%]"
      data-aos="zoom-out"
      data-aos-offset="200"
      data-aos-delay="40"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <h2>Contact Us</h2>
      <div className="roww">
        <div className="col">
          <div className="form-group">
            <label>First Name</label>
            <input type="text" />
          </div>
        </div>
        <div className="col">
          <div className="form-group">
            <label>Surname</label>
            <input type="text" />
          </div>
        </div>
        <div className="col">
          <div className="form-group">
            <label>Email</label>
            <input type="text" />
          </div>
        </div>
        <div className="col">
          <div className="form-group">
            <label>Phone</label>
            <input type="text" />
          </div>
        </div>
        <div className="col">
          <div className="form-group">
            <label>Message</label>
            <textarea
              defaultValue={""}
              className="overflow-hidden "
              style={{ padding: "40px" }}
            />
          </div>
        </div>
        <div className="col">
          <input type="submit" defaultValue="Submit" />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
