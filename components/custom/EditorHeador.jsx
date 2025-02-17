"use client";
import { useEmailTemplate, useScreenSize } from "@/app/provider";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import { Code, Monitor, Smartphone } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditorHeador = ({ viewHTMLCode }) => {
  const { screenSize, setScreenSize } = useScreenSize();
  const updateEmailTemplate = useMutation(api.emailTemplates.UpdateTemplateDesign);
  const { templateId } = useParams();
  const { emailTemplate } = useEmailTemplate();

  const onSaveTemplate = async () => {
    try {
      await updateEmailTemplate({
        tid: templateId,
        design: emailTemplate,
      });
      toast.success("Successfully saved!");
    } catch (error) {
      toast.error("Failed to save template!");
      console.error("Save template error:", error);
    }
  };

  return (
    <div className="mx-2 flex items-center justify-between">
      <Image
        src={"/logo.jpg"}
        width={100}
        height={10}
        alt="Company Logo"
        priority
      />
      <div className="flex gap-3 items-center justify-between">
        <div className="flex space-x-2">
          <Button
            onClick={() => setScreenSize("desktop")}
            className={screenSize === "desktop" ? "bg-purple-900" : ""}
            variant="ghost"
          >
            <Monitor className="w-10 h-10 text-primary" />
          </Button>
          <Button
            onClick={() => setScreenSize("mobile")}
            className={screenSize === "mobile" ? "bg-purple-900" : ""}
            variant="ghost"
          >
            <Smartphone className="w-10 h-10 text-primary" />
          </Button>
        </div>
      </div>
      <div className="flex gap-3 items-center justify-between">
        <Button variant="ghost" onClick={() => viewHTMLCode(true)}>
          <Code className="text-primary" />
        </Button>
        <Button
          className="border-2 border-primary bg-transparent text-white"
          variant="outline"
        >
          Send Test Email
        </Button>
        <Button
          className="border-2 border-primary bg-transparent text-white"
          variant="outline"
          onClick={onSaveTemplate}
        >
          Save Template
        </Button>
      </div>
    </div>
  );
};

export default EditorHeador;
