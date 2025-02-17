"use client";
import React, { useState } from "react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import axios from "axios";
import Prompt from "@/Data/Prompt";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { v4 as uuidv4 } from "uuid";
import { useUserDetails } from "@/app/provider";
import { useRouter } from "next/navigation";

function AiInputBox() {
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const saveTemplate = useMutation(api.emailTemplates.SaveTemplate);
  const tid = uuidv4();
  const { userDetail, setUserDetail } = useUserDetails();
  const router = useRouter();

  const OnGenerate = async () => {
    const PROMPT = Prompt.EMAIL_PROMPT + "\n" + userInput;
    setLoading(true);
    try {
      const result = await axios.post("/api/ai-email-generate", {
        prompt: PROMPT,
      });
      const resp = await saveTemplate({
        tid: tid,
        design: result.data,
        description:userInput,
        email: userDetail?.email,
      });
      console.log(resp);
      router.push("/editor/" + tid);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  return (
    <div className="flex gap-2 justify-center flex-col">
      <label>Provide details about the email template you'd like</label>
      <Textarea
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Start writing here"
        rows="5"
      />
      <Button
        disabled={userInput?.length === 0 || loading}
        className="bg-[linear-gradient(91.06deg,#FF1CF7_2.26%,#00F0FF_100%)] border-2 border-primary text-white"
        variant="outline"
        onClick={OnGenerate}
      >
        {loading ? "Generating..." : "GENERATE"}
      </Button>
    </div>
  );
}

export default AiInputBox;
