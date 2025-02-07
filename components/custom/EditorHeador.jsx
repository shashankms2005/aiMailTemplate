import { Button } from "@/components/ui/button";
import { Code, Link, Monitor, Smartphone } from "lucide-react";
import Image from "next/image";
import React from "react";

const EditorHeador = () => {
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
          <Button variant="ghost">
            <Monitor className="w-10 h-10 text-primary hover:text-black" />
          </Button>
          <Button variant="ghost">
            <Smartphone className="w-10 h-10 text-primary hover:text-black" />
          </Button>
        </div>
      </div>
      <div className="flex gap-3 items-center justify-between">
        <Button variant="ghost">
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
        >
          Save Template
        </Button>
      </div>
    </div>
  );
};

export default EditorHeador;
