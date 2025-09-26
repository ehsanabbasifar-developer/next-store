"use client";

import { useForm } from "react-hook-form";

interface InputsTypes {
  name: string;
  email: string;
  message: string;
}

export default function Form() {
  const { register, handleSubmit } = useForm<InputsTypes>(); // اینجا نوع `InputsTypes` را به `useForm` اضافه کردیم.

  function submitForm(data: InputsTypes): void {
    console.log(data);
  }

  return (
    <div className="bg-white shadow-xl rounded-2xl p-8 sm:p-12">
      <form
        onSubmit={handleSubmit(submitForm)}
        id="contact-form"
        method="POST"
        className="grid grid-cols-1 gap-y-6"
      >
        {/* بقیه کد فرم در اینجا قرار می‌گیرد */}
      </form>
    </div>
  );
}