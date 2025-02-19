import { NextResponse } from "next/server";
import { ElevenLabsClient } from "elevenlabs";

const client = new ElevenLabsClient({
  apiKey: process.env.NEXT_PUBLIC_ELEVEN_LABS_API_KEY,
});

export async function POST(req) {
  const { text, id } = await req.json();
  console.log(text);
  const response = await client.textToSpeech.convert(
    process.env.NEXT_PUBLIC_ELEVEN_LABS_VOICE_ID,
    {
      output_format: "mp3_44100_128",
      text: text,
      model_id: "eleven_multilingual_v2",
    }
  );
  return NextResponse.json({ audioUrl: response.audio_url });
}
