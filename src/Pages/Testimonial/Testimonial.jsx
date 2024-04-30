import React, { useEffect } from "react";
import "./Testimonial.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonial = () => {
  useEffect(() => {
    AOS.init({ duration: 400 });
  }, []);
  return (
    <div className="flex  justify-center lg:flex-row md:flex-row flex-wrap ">
      <figure
        className="snip1390"
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="40"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample3.jpg"
          alt="profile-sample3"
          className="profile"
        />
        <figcaption>
          <h2>Eleanor Crisp</h2>
          <h4>UX Design</h4>
          <blockquote>
            Absolutely thrilled with the landscape paintings I purchased! The
            attention to detail and vibrant colors truly brought nature to life
            in my living room
          </blockquote>
        </figcaption>
      </figure>
      <figure
        className="snip1390 hover"
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="40"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg"
          alt="profile-sample5"
          className="profile"
        />
        <figcaption>
          <h2>Gordon Norman</h2>
          <h4>Accountant</h4>
          <blockquote>
            The portrait drawing I commissioned exceeded all my expectations!
            The artist captured the essence of my loved one with remarkable
            accuracy and emotion.{" "}
          </blockquote>
        </figcaption>
      </figure>
      <figure
        className="snip1390"
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-delay="40"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample6.jpg"
          alt="profile-sample6"
          className="profile"
        />
        <figcaption>
          <h2>Sue Shei</h2>
          <h4>Public Relations</h4>
          <blockquote>
            "I'm amazed by the watercolor painting I received. The delicate
            brushwork and subtle blending of hues created a mesmerizing piece
            that adds a touch of elegance to my home.
          </blockquote>
        </figcaption>
      </figure>
      <figure
        className="snip1390"
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-delay="40"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample6.jpg"
          alt="profile-sample6"
          className="profile"
        />
        <figcaption>
          <h2>Sue Shei</h2>
          <h4>Public Relations</h4>
          <blockquote>
            The oil painting I bought is simply breathtaking. The depth and
            richness of colors are even more impressive in person. It's
            definitely the focal point of my art collection!
          </blockquote>
        </figcaption>
      </figure>
    </div>
  );
};

export default Testimonial;
