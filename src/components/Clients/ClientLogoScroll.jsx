import React from "react";
import Slider from "react-infinite-logo-slider";
import "./ClientLogoScroll.css";

import img1 from "../../assets/clients/logo1jpg.jpg";
import img2 from "../../assets/clients/logo2.png";
import img3 from "../../assets/clients/logo3.png";
import img4 from "../../assets/clients/logo4.png";
import img5 from "../../assets/clients/logo5.png";
import img6 from "../../assets/clients/logo6.png";
import img7 from "../../assets/clients/logo7.jpg";

const ClientLogoScroll = () => {
  const logos = [img1, img2, img3, img4, img5, img6, img7];

  return (
    <div className="slider py-4 bg-gray-100">
      <div className="slider-container mx-auto px-4">
        <Slider
          speed={10000} // Adjust the speed as needed
          pauseOnHover={true}
          blurBorders={true}
        >
          {logos.map((logo, index) => (
            <Slider.Slide key={index}>
              <img
                src={logo}
                alt={`Client Logo ${index + 1}`}
                className="h-16 w-auto object-contain"
              />
            </Slider.Slide>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ClientLogoScroll;
