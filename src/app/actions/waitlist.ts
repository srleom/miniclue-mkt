"use server";

import { supabase } from "@/lib/supabase";

type WaitlistResult = { success: true } | { success: false; error: string };

export async function joinWaitlist(email: string): Promise<WaitlistResult> {
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  const { error } = await supabase.from("waitlist").insert({ email });

  if (error) {
    if (error.code === "23505") {
      return { success: false, error: "You're already on the waitlist!" };
    }
    return { success: false, error: "Something went wrong. Please try again." };
  }

  return { success: true };
}
