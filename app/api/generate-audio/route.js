import { NextResponse } from "next/server";
import { ElevenLabsClient } from "elevenlabs";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const client = new ElevenLabsClient({
  apiKey: process.env.NEXT_PUBLIC_ELEVEN_LABS_API_KEY,
});

// Configure AWS S3
const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

// Helper function to convert stream to buffer
async function streamToBuffer(stream) {
  const chunks = [];
  for await (const chunk of stream) {
    chunks.push(Buffer.from(chunk));
  }
  return Buffer.concat(chunks);
}

export async function POST(req) {
  try {
    const { text, id } = await req.json();
    console.log("Processing text:", text);

    const fileName = `${id}.mp3`;

    // Generate audio
    const audioStream = await client.textToSpeech.convert(
      process.env.NEXT_PUBLIC_ELEVEN_LABS_VOICE_ID,
      {
        output_format: "mp3_44100_128",
        text: text,
        model_id: "eleven_multilingual_v2",
      }
    );

    // Convert stream to buffer
    const audioBuffer = await streamToBuffer(audioStream);

    // Upload to S3 with explicit ContentLength
    const uploadParams = {
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      Key: `uploads/${fileName}`,
      Body: audioBuffer,
      ContentType: "audio/mpeg",
      ContentLength: audioBuffer.length,
    };

    await s3.send(new PutObjectCommand(uploadParams));

    // Construct S3 URL
    const s3Url = `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/uploads/${fileName}`;
    console.log("Upload successful:", s3Url);

    return NextResponse.json({ audioUrl: s3Url });
  } catch (error) {
    console.error("Error details:", error);
    return NextResponse.json(
      { error: "Error uploading audio", details: error.message },
      { status: 500 }
    );
  }
}
// import { NextResponse } from "next/server";
// import { ElevenLabsClient } from "elevenlabs";
// import { createWriteStream } from "fs";
// import path from "path";

// const client = new ElevenLabsClient({
//   apiKey: process.env.NEXT_PUBLIC_ELEVEN_LABS_API_KEY,
// });

// export async function POST(req) {
//   const { text, id } = await req.json();
//   console.log(text);
//   const fileName = `${id}.mp3`;
//   const fileStream = createWriteStream(
//     path.join(process.cwd(), "public", "uploads", fileName)
//   );

//   try {
//     const audio = await client.textToSpeech.convert(
//       process.env.NEXT_PUBLIC_ELEVEN_LABS_VOICE_ID,
//       {
//         output_format: "mp3_44100_128",
//         text: text,
//         model_id: "eleven_multilingual_v2",
//       }
//     );

//     audio.pipe(fileStream);

//     return new Promise((resolve, reject) => {
//       fileStream.on("finish", () => {
//         console.log("Audio saved:", fileName);
//         resolve(
//           NextResponse.json({
//             audioUrl: `/uploads/${fileName}`,
//           })
//         );
//       });

//       fileStream.on("error", (err) => {
//         console.error("Error saving audio:", err);
//         reject(
//           NextResponse.json({ error: "Error saving audio" }, { status: 500 })
//         );
//       });
//     });
//   } catch (error) {
//     console.error("Error generating audio:", error);
//     return NextResponse.json(
//       { error: "Error generating audio" },
//       { status: 500 }
//     );
//   }
// }
