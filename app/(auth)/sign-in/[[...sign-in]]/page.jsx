import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
export default function Page() {
  return (
    <div className="bg-[#e201f265] relative flex justify-center items-center h-screen">
      <Image
        src="/login.png"
        alt="login"
        fill
        className="opacity-90 h-screen object-cover z-0"
        priority
      />
      <div className="z-1 relative w-full flex justify-center items-center">
        <SignIn />
      </div>
    </div>
  );
}
