"use client";

import { useState } from "react";

export function EmailSignup() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission logic here
    console.log("Email submitted:", email);
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto"
    >
      <label className="sr-only" htmlFor="email-address">
        Email address
      </label>
      <input
        type="email"
        id="email-address"
        name="email"
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        className="flex-auto w-full min-w-0 rounded-md border-0 bg-white/5 px-3.5 py-3 text-slate-900 dark:text-white shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 placeholder:text-slate-400"
      />
      <button
        type="submit"
        className="w-full sm:w-auto flex-none rounded-md bg-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 transition-colors"
      >
        Stay Updated
      </button>
    </form>
  );
}
