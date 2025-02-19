import { AssemblyAI } from "assemblyai";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { audioUrlFile } = await req.json();
    const client = new AssemblyAI({
      apiKey: process.env.ASSEMBLYAI_API_KEY,
    });

    const config = {
      audio_url: audioUrlFile,
    };

    const transcript = await client.transcripts.transcribe(config);
    console.log(transcript.words);
    return NextResponse.json({ transcript: transcript.words }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to generate caption" },
      { status: 500 }
    );
  }
}
