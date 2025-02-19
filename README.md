# Voice Synthesis AI

A modern web application that leverages AI to generate high-quality voice-overs for short-form videos. Create engaging content with customizable voices, topics, and styles.

## Features

- 🎯 **Custom Topic Generation**: Choose from curated themes or input your own custom prompts
- 🎨 **Multiple Styles**: Generate content in various styles including Realistic, Cartoon, Watercolor, and Anime
- 🔊 **High-Quality Voice Synthesis**: Powered by ElevenLabs for natural-sounding voice generation
- 📝 **Auto-Captioning**: Automatic caption generation using AssemblyAI
- 🎬 **Quick Generation**: Fast processing for short-form video content
- 🌓 **Dark/Light Mode**: Sleek interface with theme customization
- 🔐 **Secure Authentication**: User authentication powered by Clerk

## Tech Stack

### Frontend

- Next.js 14 (App Router)
- React 19
- Tailwind CSS
- shadcn/ui Components
- Lucide Icons

### Backend & APIs

- Google Gemini AI - Content generation
- ElevenLabs - Voice synthesis
- AssemblyAI - Caption generation
- AWS S3 - File storage
- Neon Database - PostgreSQL database
- Drizzle ORM - Database operations

### Authentication & Deployment

- Clerk - Authentication and user management
- Vercel - Hosting and deployment

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn
- AWS Account
- ElevenLabs API Key
- AssemblyAI API Key
- Google Gemini API Key
- Clerk Account
- Neon Database Account

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_GEMINI_API_KEY=

NEXT_PUBLIC_ELEVEN_LABS_API_KEY=
NEXT_PUBLIC_ELEVEN_LABS_VOICE_ID=

AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_REGION=
AWS_S3_BUCKET_NAME=

ASSEMBLYAI_API_KEY=

NEXT_PUBLIC_DRIZZLE_DATABASE_URL=
```

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/ai-video.git
cd ai-video
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Database Setup

Initialize your database schema:

```bash
npm run db:push
```

## Usage

1. Sign up or log in to your account
2. Navigate to the dashboard
3. Click "Create New" to start a new project
4. Select your desired topic and style
5. Wait for the AI to generate your content
6. Download or share your generated video

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Next.js](https://nextjs.org)
- [ElevenLabs](https://elevenlabs.io)
- [AssemblyAI](https://assemblyai.com)
- [Google Gemini](https://deepmind.google/technologies/gemini/)
- [Clerk](https://clerk.com)
- [Vercel](https://vercel.com)
