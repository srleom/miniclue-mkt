"use client";

import { useState } from "react";
import { joinWaitlist } from "@/app/actions/waitlist";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const result = await joinWaitlist(email);

    if (result.success) {
      setStatus("success");
      setMessage("You're on the list! We'll be in touch soon.");
      setEmail("");
    } else {
      setStatus("error");
      setMessage(result.error);
    }
  }

  return (
    <div className="mx-auto w-full max-w-sm">
      {status === "success" ? (
        <p className="text-center text-sm font-medium text-green-600 dark:text-green-400">
          {message}
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 sm:flex-row"
        >
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={status === "loading"}
            className="h-10 flex-1"
          />
          <Button type="submit" size="default" disabled={status === "loading"}>
            {status === "loading" ? "Joining…" : "Join waitlist"}
          </Button>
        </form>
      )}
      {status === "error" && (
        <p className="mt-2 text-center text-sm text-destructive">{message}</p>
      )}
    </div>
  );
}
