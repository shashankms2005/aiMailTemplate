"use client";

import { DragDropLayoutElement } from "@/context/DragDropLayoutElement ";
import { EmailTemplateContext } from "@/context/EmailTemplateContext";
import { ScreenSizeContext } from "@/context/ScreenSizeContext";
import { UserDetailContext } from "@/context/UserDetailsContext";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import React, { useContext, useEffect, useState } from "react";

const Provider = ({ children }) => {
  const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);
  const [userDetail, setUserDetail] = useState();
  const [screenSize, setScreenSize] = useState("desktop");
  const [dragElementLayout, setDragElementLayout] = useState();
  const [emailTemplate, setEmailTemplate] = useState([]);

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
          <ScreenSizeContext.Provider value={{ screenSize, setScreenSize }}>
            <DragDropLayoutElement.Provider
              value={{ dragElementLayout, setDragElementLayout }}
            >
              <EmailTemplateContext.Provider
                value={{ emailTemplate, setEmailTemplate }}
              >
                <div>{children}</div>
              </EmailTemplateContext.Provider>
            </DragDropLayoutElement.Provider>
          </ScreenSizeContext.Provider>
        </UserDetailContext.Provider>
      </GoogleOAuthProvider>
    </ConvexProvider>
  );
};

export default Provider;
export const useUserDetails = () => {
  return useContext(UserDetailContext);
};

export const useScreenSize = () => {
  return useContext(ScreenSizeContext);
};

export const useDragElementLayout = () => {
  return useContext(DragDropLayoutElement);
};

export const useEmailTemplate = () => {
  return useContext(EmailTemplateContext);
};
