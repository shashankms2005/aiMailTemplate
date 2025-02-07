"use client";
import React from "react";
import Image from "next/image";
import SignInButton from "./SignInButton";
import { useUserDetails } from "@/app/provider";
import { Button } from "../ui/button";
import Link from "next/link";

const Navbar = () => {
  const { userDetail, setUserDetail } = useUserDetails();
  console.log("here->", userDetail);

  return (
    <div className="mt-2 z-50 flex items-center justify-between mx-4">
      <Link href={"/"}>
        <Image
          src={"/logo.jpg"}
          width={120}
          height={10}
          alt="Company Logo"
          className="rounded-2xl"
          priority
        />
      </Link>
      <div className="flex items-center space-x-3">
        {userDetail?.email ? (
          <div className="flex items-center space-x-3">
            <Link href={"/dashboard"}>
              <Button>Dashboard</Button>
            </Link>
            <Image
              src={userDetail?.picture}
              alt="User profile picture"
              height={50}
              width={50}
              className="rounded-full"
            />
          </div>
        ) : (
          <SignInButton />
        )}
      </div>
    </div>
  );
};

export default Navbar;
