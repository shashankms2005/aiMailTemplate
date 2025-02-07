"use client";

import { UserDetailContext } from "@/context/UserDetailsContext";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import React, { useContext, useEffect, useState } from "react";

const Provider = ({ children }) => {
  const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);
  const [userDetail, setUserDetail] = useState();

  useEffect(() => {
    if (typeof window !== undefined) {
      const storage = JSON.parse(localStorage.getItem("userDetails"));
      if (!storage?.email || !storage) {
        // Redirect to Home Screen
        console.log("Redirecting to Home Screen...");
      } else {
        setUserDetail(storage);
      }
    }
  }, []);

  return (
    <ConvexProvider client={convex}>
      <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_AUTH}>
        <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
          <div>{children}</div>
        </UserDetailContext.Provider>
      </GoogleOAuthProvider>
    </ConvexProvider>
  );
};

export default Provider;
export const useUserDetails = () => {
  return useContext(UserDetailContext);
};
