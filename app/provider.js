"use client";
import React, { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { db } from "@/configs/db";
import { Users } from "@/configs/schema";
import { eq } from "drizzle-orm";
import { ThemeProvider } from "@/components/theme-provider";

function Provider({ children }) {
  const { user } = useUser();

  const isNewUser = async () => {
    try {
      const result = await db
        .select()
        .from(Users)
        .where(eq(Users.email, user?.primaryEmailAddress?.emailAddress));

      console.log(result);

      if (!result[0]) {
        await db.insert(Users).values({
          name: user?.fullName,
          email: user?.primaryEmailAddress?.emailAddress,
          imageUrl: user?.imageUrl,
        });
      }
    } catch (error) {
      console.error("Error checking or inserting user:", error);
    }
  };

  useEffect(() => {
    user && isNewUser();
  }, [user]);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}

export default Provider;
