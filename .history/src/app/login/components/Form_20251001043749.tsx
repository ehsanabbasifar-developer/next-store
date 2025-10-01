"use client";

import { FormEvent, useState } from "react";
import { useLogin } from "../hooks/useLogin";

export default function Form() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { mutateLogin, error, isPending } = useLogin();
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    mutateLogin({ email, password });
  }
  return (
    <form
      className="mt-8 space-y-6"
      action="#"
      method="POST"
      onSubmit={(e) => handleSubmit}
    >
      <div className="rounded-md shadow-sm -space-y-px">
        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            id="email-address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="Email address"
            className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors"
          />
        </div>

        {/* Password Field */}
        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            placeholder="Password"
            className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors"
          />
        </div>
      </div>

      {/* Submit Button */}
      <div>
        <button
        disabled = {isPending}
          type="submit"
          className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-lg transition-colors"
        >
          Log In
        </button>
      </div>
    </form>
  );
}
