import { GenerateEmailTemplateAiModel } from "@/Config/AiModel.jsx";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { prompt } = await req.json();

  try {
    const result = await GenerateEmailTemplateAiModel.sendMessage(prompt);
    const aiResp = result.response.text();
    console.log("api result ->>>",aiResp);

    // Save this to Database;

    return NextResponse.json( JSON.parse(aiResp) );
  } catch (e) {
    return NextResponse.json({ error: "error" });
  }
}
