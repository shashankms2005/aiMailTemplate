import AiInputBox from "@/components/custom/AiInputBox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import React from "react";

const Create = () => {
  return (
    <div className="grid place-content-center px-10 text-white md:px-28 lg:px-44 xl:px-56 mt-20">
      <div>
        <h2 className="font-bold text-3xl">CREATE NEW EMAIL TEMPLATE</h2>
        <p className="text-lg text-gray-400">
          Effortlessly design AI-powered email templates with ease.
        </p>
        <Tabs defaultValue="AI" className="w-[500px] mt-8">
          <TabsList className="flex gap-5">
            <TabsTrigger
              className="bg-primary p-2 border-2 border-primary rounded-lg transition duration-300 hover:bg-transparent hover:text-primary"
              value="AI"
            >
              Create with AI ✨
            </TabsTrigger>

            <TabsTrigger
              className="bg-primary p-2 border-2 border-primary rounded-lg transition duration-300 hover:bg-transparent hover:text-primary"
              value="SCRATCH"
            >
              Start from Scratch
            </TabsTrigger>
          </TabsList>

          <TabsContent value="AI">
            <AiInputBox />
          </TabsContent>
          <TabsContent value="SCRATCH">Change your password here.</TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Create;
