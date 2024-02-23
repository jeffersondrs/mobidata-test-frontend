"use client";

import React from "react";
import { useParams } from "next/navigation";

export default function Profile() {
  const { id } = useParams();
  return <div>Profile {id}</div>;
}