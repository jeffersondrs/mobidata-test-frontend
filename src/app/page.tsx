"use client";
import { Modal, Form } from "@/components/";

export default function Home() {
  const isModalOpen = true;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          console.log("Modal closed");
        }}
      >
        <Form />
      </Modal>
    </main>
  );
}
