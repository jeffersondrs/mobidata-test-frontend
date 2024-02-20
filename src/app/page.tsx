"use client";
import { Modal, Form, Table } from "@/components/";

type User = {
  name: string;
  city: string;
  active: boolean;
};

const usersData: User[] = [
  { name: 'João', city: 'São Paulo', active: true },
  { name: 'Maria', city: 'Rio de Janeiro', active: false },
  { name: 'José', city: 'Belo Horizonte', active: true },
];

export default function Home() {
  const isModalOpen = true;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      {/* <Modal
        isOpen={isModalOpen}
        onClose={() => {
          console.log("Modal closed");
        }}
      >
        <Form />
      </Modal> */}
      <Table users={usersData} />
    </main>
  );
}
