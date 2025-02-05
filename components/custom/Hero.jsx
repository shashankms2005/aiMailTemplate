import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
const Hero = () => {
  return (
    <div className="grid place-content-center mt-4">
      <div className="relative z-10 flex flex-col items-center text-center gap-5 w-full max-w-2xl">
        <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl drop-shadow-lg">
          AI-Powered
          <span className="mx-1.5 font-extrabold bg-[linear-gradient(91.06deg,#FF1CF7_2.26%,#00F0FF_100%)] bg-clip-text text-transparent border-b-2 border-white">
            Email Template
          </span>
          Generator
        </h1>
        <p className="text-white text-lg md:text-xl opacity-80 max-w-lg">
          Create stunning, personalized email templates effortlessly with AI.
          Save time and boost engagement with just a few clicks.
        </p>
        <div className="flex gap-4 mt-5">
          <Button
            variant="outline"
            className="bg-[linear-gradient(180deg,#D1D3E2_0%,#75629D_100%)] font-semibold hover:bg-blue-600 hover:text-white text-black transition"
          >
            Try Demo
          </Button>
          <Button className="bg-[linear-gradient(180deg,#497CFF_0%,#001664_100%)] font-semibold hover:bg-white hover:text-black text-white transition p-2 rounded-lg">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
