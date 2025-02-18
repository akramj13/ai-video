import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function EmptyState() {
  return (
    <div className="p-5 py-24 flex flex-col gap-5 items-center mt-10 border-[3px] border-dashed border-gray-300 rounded-lg">
      <h2 className="text-2xl font-bold">You haven't made any videos!</h2>
      <Link href="/dashboard/create-new">
        <Button>Start Synthesizing</Button>
      </Link>
      <p className="text-gray-500">
        Start creating videos by clicking the button above.
      </p>
    </div>
  );
}

export default EmptyState;
