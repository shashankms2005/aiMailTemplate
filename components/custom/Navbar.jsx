import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <div className="mt-2 flex items-center justify-between mx-4">
      <Image
        src={"/logo.jpg"}
        width={120}
        height={10}
        alt="logo"
        className="rounded-2xl"
      />
      <Button>Get started</Button>
    </div>
  );
};

export default Navbar;
