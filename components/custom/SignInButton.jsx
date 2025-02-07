"use client";
import React from "react";
import { Button } from "../ui/button";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

const SignInButton = () => {
  const CreateUser = useMutation(api.users.CreateUser);
  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log(tokenResponse);
      const userInfo = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        { headers: { Authorization: "Bearer" + tokenResponse?.access_token } }
      );

      console.log(userInfo.data);
      const user = userInfo.data;
  
      const result = await CreateUser({
        name: user?.name,
        email: user?.email,
        picture: user?.picture,
      });

      const userDetail = {
        ...user,
        _id: result?.id ?? result
      };      
      
      if (typeof Window !== undefined) {
        localStorage.setItem("userDetails",JSON.stringify(userDetail));
      }      

    },
    onError: (errorResponse) => console.log(errorResponse),
  });
  return (
    <div>
      <Button
        onClick={googleLogin}
        className="cursor-pointer bg-[linear-gradient(180deg,#497CFF_0%,#001664_100%)] font-semibold hover:bg-white hover:text-black text-white transition p-2 rounded-lg"
      >
        Get Started
      </Button>
    </div>
  );
};

export default SignInButton;
