"use client";

import { CheckCircle, Mail, SendHorizonal } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{
    text: string;
    type: "error" | "success";
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage({ text: "Please enter your email address", type: "error" });
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage({ text: "Please enter a valid email address", type: "error" });
      return;
    }

    setIsLoading(true);
    setMessage(null);

    try {
      const { error: supabaseError } = await supabase.from("waitlist").insert([
        {
          email: email.trim(),
        },
      ]);

      if (supabaseError) {
        // Check if it's a duplicate email error
        if (supabaseError.code === "23505") {
          setMessage({
            text: "You're already on the waitlist! 🎉 We'll send your access link as soon as we can.",
            type: "error",
          });
        } else {
          console.error("Supabase error:", supabaseError);
          setMessage({
            text: "Something went wrong. Please try again.",
            type: "error",
          });
        }
      } else {
        setMessage({
          text: "You're in! 🎉 We'll send your access link as soon as we can.",
          type: "success",
        });
        setEmail("");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setMessage({
        text: "Something went wrong. Please try again.",
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    // Clear message when user starts typing
    if (message) setMessage(null);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-10 flex max-w-sm flex-col items-center lg:mt-12"
    >
      <div className="bg-background has-[input:focus]:ring-muted relative grid w-full grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.75rem)] border pr-3 shadow shadow-zinc-950/5 has-[input:focus]:ring-2">
        <Mail className="text-caption pointer-events-none absolute inset-y-0 left-5 my-auto size-5" />

        <input
          placeholder="Your email address"
          className="h-14 w-full bg-transparent pl-12 focus:outline-none"
          type="email"
          value={email}
          onChange={handleEmailChange}
          disabled={isLoading}
          autoComplete="email"
          name="email"
          style={{
            WebkitBoxShadow: "0 0 0 1000px transparent inset !important",
            WebkitTextFillColor: "inherit !important",
            transition: "background-color 5000s ease-in-out 0s",
          }}
        />

        <div className="md:pr-1.5 lg:pr-0">
          <Button
            type="submit"
            aria-label="submit"
            className="rounded-(--radius)"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="size-5 animate-spin rounded-full border-2 border-current border-t-transparent" />
            ) : message?.type === "success" ? (
              <CheckCircle className="size-5" />
            ) : (
              <>
                <span className="hidden md:block">Sign up</span>
                <SendHorizonal
                  className="relative mx-auto size-5 md:hidden"
                  strokeWidth={2}
                />
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Error Message */}
      {message?.type === "error" && (
        <div className="mt-3 flex items-center gap-2 text-sm text-red-600">
          <span>{message.text}</span>
        </div>
      )}

      {/* Success Message */}
      {message?.type === "success" && (
        <div className="mt-3 flex items-center gap-2 text-sm text-green-600">
          <span>{message.text}</span>
        </div>
      )}
    </form>
  );
}
