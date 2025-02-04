import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
const Hero = () => {
  return (
    <div className="flex items-center justify-center m-2">
      <div
        className="relative w-[80%] min-h-screen bg-cover bg-center rounded-3xl flex items-center justify-center p-10"
        style={{ backgroundImage: "url('/heroBg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50 rounded-3xl"></div>
        <div className="relative z-10 flex flex-col items-center text-center gap-5 w-full max-w-2xl">
          <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl drop-shadow-lg">
            AI-Powered
            <span className="font-extrabold text-blue-300 border-b-2 border-white">
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
              className="hover:bg-blue-600 hover:text-white  transition"
            >
              Try Demo
            </Button>
            <Button className="bg-blue-600 hover:bg-white hover:text-black text-white transition">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
