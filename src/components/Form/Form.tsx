"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const FormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
});

type FormInput = z.infer<typeof FormSchema>;

export function Form() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    defaultValues: { name: "", email: "" },
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = (data: FormInput) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          {...register("name")}
          className="border border-gray-300 rounded-md p-2"
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          {...register("email")}
          className="border border-gray-300 rounded-md p-2"
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transform transition duration-200 ease-in-out"
      >
        Submit
      </button>
    </form>
  );
};
