"use client";

import { useForm } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";

interface InputsTypes {
  name: string;
  email: string;
  message: string;
}

export default function Form() {
  const { register, handleSubmit, formState } = useForm<InputsTypes>();
  function submitForm({ name, email, message }: InputsTypes): void {
    console.log();
  }
  return (
    <div className="bg-white shadow-xl rounded-2xl p-8 sm:p-12">
      <form
        onSubmit={handleSubmit(submitForm)}
        id="contact-form"
        method="POST"
        className="grid grid-cols-1 gap-y-6"
      >
        {/* Name field */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Full name
          </label>
          <div className="mt-1">
            <input
              {...register("name", { required: "please write your name" })}
              type="text"
              name="name"
              id="name"
              autoComplete="name"
              className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-lg bg-gray-50"
            />
              {formState.errors.name && <ErrorMessage message={formState.errors.}/> }
          </div>
        </div>

        {/* Email field */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email address
          </label>
          <div className="mt-1">
            <input
              {...register("email", {
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "please write right format",
                },
                required: "please write your email",
              })}
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-lg bg-gray-50"
            />
          </div>
        </div>

        {/* Message field */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <div className="mt-1">
            <textarea
              {...register("message", { required: "please add your message" })}
              id="message"
              name="message"
              rows={4}
              className="py-3 text-gray-700 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-lg bg-gray-50"
            ></textarea>
          </div>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-blue-600 border border-transparent rounded-lg py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors shadow-lg"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
