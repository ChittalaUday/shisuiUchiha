import React from "react";
import { motion } from "framer-motion";

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
    <div className="overflow-hidden py-4 bg-gray-100">
      <div className="client-logos-container container mx-auto px-4">
        {/* Infinite scroll wrapper */}
        <motion.div
          className="flex gap-8"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: "linear",
            repeatType: "loop", // Ensures it loops smoothly
          }}
          style={{
            willChange: "transform",
            display: "flex",
            flexWrap: "nowrap", // Ensure no wrapping happens
          }}
        >
          {/* Duplicate the logos to create a seamless loop */}
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex-shrink-0">
              <img
                src={logo}
                alt={`Client Logo ${index + 1}`}
                className="h-16 w-auto object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ClientLogoScroll;
