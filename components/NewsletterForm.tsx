"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // TODO: wire up real email provider
    setStatus("success");
    setEmail("");
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-[520px]">
      <div className="relative flex items-center border border-rule rounded-full overflow-hidden focus-within:border-ink transition-colors duration-200">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="flex-1 bg-transparent pl-6 pr-4 py-3.5 font-mono text-sm outline-none placeholder:text-muted"
        />
        <button
          type="submit"
          className="flex-shrink-0 m-1 h-10 rounded-full px-6 bg-ink text-paper font-mono text-sm font-medium hover:opacity-90 transition-opacity duration-200"
        >
          Subscribe
        </button>
      </div>
      {status === "success" && (
        <p className="mt-3 font-mono text-[11px] text-muted">
          You&apos;re in. Talk soon.
        </p>
      )}
    </form>
  );
}
