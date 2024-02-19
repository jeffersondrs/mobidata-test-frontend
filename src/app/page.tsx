"use client";
import { Button, Form, Input } from "@/components/";
import { Search } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Olá mundo!</h1>
      <span>{search}</span>
      <Form />{" "}
    </main>
  );
}
