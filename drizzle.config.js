import * as dotenv from "dotenv-flow";
dotenv.config();

import { defineConfig } from "drizzle-kit";
console.log(process.env.NEXT_PUBLIC_DRIZZLE_DATABASE_URL);
export default defineConfig({
  out: "./drizzle",
  schema: "./configs/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_DRIZZLE_DATABASE_URL,
  },
});
