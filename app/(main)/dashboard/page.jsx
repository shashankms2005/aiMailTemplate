"use client";
import { useUserDetails } from "@/app/provider";
import EmailTemplateList from "@/components/custom/EmailTemplateList";
import Navbar from "@/components/custom/Navbar";
import { Button } from "@/components/ui/button";
import React from "react";

const dashboard = () => {
  const { userDetail, setUserDetail } = useUserDetails();
  return (
    <div>
      <Navbar />
      <div className="grid place-content-center">
        <div className="h-[80vh] w-[60vw] rounded-lg p-5 mt-2 bg-gradient-to-b from-[#170B2E]/60 to-[#111111]/60 backdrop-blur-lg border border-white/10 shadow-lg">
          <div className="flex items-center justify-between">
            <h1 className="text-white text-[32px] font-semibold">
              Hello,
              <span className="font-extrabold bg-[linear-gradient(91.06deg,#FF1CF7_2.26%,#00F0FF_100%)] bg-clip-text text-transparent">
                {userDetail?.name}
              </span>
            </h1>
            <Button className="bg-white/20 backdrop-blur-sm border border-white/10 hover:bg-white/30 text-white">
              + Create New Email Template
            </Button>
          </div>
          <EmailTemplateList />
        </div>
      </div>
    </div>
  );
};

export default dashboard;
