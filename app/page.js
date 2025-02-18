import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div>
      <h1>Video Synthesis V1</h1>
      <Button>Upload Video</Button>
      <UserButton />
      <ModeToggle />
    </div>
  );
}
