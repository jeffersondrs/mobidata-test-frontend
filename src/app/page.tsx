"use client";
import { Modal, Form, Table, SelectFilter, Button } from "@/components/";
import { Plus } from "lucide-react";
import { useState } from "react";

type User = {
  name: string;
  city: string;
  active: boolean;
};

const usersData: User[] = [
  { name: "João", city: "São Paulo", active: true },
  { name: "Maria", city: "Rio de Janeiro", active: false },
  { name: "José", city: "Belo Horizonte", active: true },
];

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Form />
      </Modal>
      <Button buttonType="button" onClick={handleOpenModal}>
        <div className="flex flex-row items-center justify-center gap-2">
          <p>Adicionar usuário</p>
          <Plus size={14} />
        </div>
      </Button>
      <Table users={usersData} />
      <SelectFilter
        options={["São Paulo", "Rio de Janeiro", "Belo Horizonte"]}
        onChange={(value) => console.log(value)}
      />
    </main>
  );
}
