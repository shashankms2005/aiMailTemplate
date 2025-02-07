import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <Image 
      src="/Looper BG.png" 
      layout="fill" 
      objectFit="cover" 
      className="absolute -z-10 bottom-0"
      alt="footer"
    />

  
  );
};

export default Footer;
