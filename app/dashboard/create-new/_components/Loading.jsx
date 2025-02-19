import React from "react";
import Image from "next/image";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

function Loading({ loading }) {
  return (
    <AlertDialog open={loading}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/loading.gif"
              alt="logo"
              width={70}
              height={70}
              className="rounded-full mb-4"
            />
            <AlertDialogTitle>Your video is being created!</AlertDialogTitle>
            <AlertDialogDescription>
              Don't refresh the page. This may take a minute.
            </AlertDialogDescription>
          </div>
        </AlertDialogHeader>
        {/* <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
        </AlertDialogFooter> */}
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default Loading;
