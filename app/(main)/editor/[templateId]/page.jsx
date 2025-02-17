"use client";
import { useEmailTemplate, useUserDetails } from "@/app/provider";
import Canvas from "@/components/custom/Canvas";
import EditorHeador from "@/components/custom/EditorHeador";
import EditorSettings from "@/components/custom/EditorSettings";
import EditorSidebar from "@/components/custom/EditorSidebar";
import { api } from "@/convex/_generated/api";
import { useConvex } from "convex/react";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

function Editor() {
  const [viewHTMLCode, setViewHtmlCode] = useState();
  const { templateId } = useParams();
  const { userDetail, setUserDetail } = useUserDetails();
  const convex = useConvex();
  const [loading, setLoading] = useState(false);
  const { emailTemplate, setEmailTemplate } = useEmailTemplate();

  useEffect(() => {
    if (userDetail) {
      GetTemplateData();
    }
  }, [userDetail]);

  const GetTemplateData = async () => {
    setEmailTemplate(true);
    const result = await convex.query(api.emailTemplates.GetTemplateDesign, {
      tid: templateId,
      email: userDetail?.email,
    });

    console.log(result);
    setEmailTemplate(result?.design);
    setLoading(false);
  };

  return (
    <div>
      <ToastContainer />

      <EditorHeador viewHTMLCode={(v) => setViewHtmlCode(v)} />

      {!loading ? (
        <div className="grid grid-cols-5">
          <EditorSidebar />
          <div className=" rounded-md p-1 col-span-3 bg-white/50 backdrop-blur-sm border border-white/10">
            <Canvas
              viewHTMLCode={viewHTMLCode}
              closeDialog={() => setViewHtmlCode(false)}
            />
          </div>
          <EditorSettings />
        </div>
      ) : (
        <div className="grid place-content-center text-5xl text-white h-[100vh]">
          <h2>Loading...</h2>
        </div>
      )}
    </div>
  );
}

export default Editor;
