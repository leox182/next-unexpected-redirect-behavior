"use server";
import { redirect } from "next/navigation";

export const helloAction = async () => {
  try {
    console.log("Saying hello from the server!");
  } catch (error) {
    throw new Error("Failed to say hello from the server!");
  }

  redirect("/hello");
};
