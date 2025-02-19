import { NextResponse } from "next/server";
import { chatSession } from "@/configs/model";

export async function POST(req) {
  try {
    const { prompt } = await req.json();
    console.log(prompt);

    const result = await chatSession.sendMessage(prompt);
    console.log(result.response.text());

    return NextResponse.json({
      result: JSON.parse(result.response.text()),
    });
  } catch (e) {
    console.log("Error:", e);
    return NextResponse.json(
      { error: e.message || "An unknown error occurred" },
      { status: 500 }
    );
  }
}
