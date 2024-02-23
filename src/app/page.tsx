"use client";
import {
  Modal,
  Form,
  Table,
  Button,
  SearchForm,
} from "@/components/";
import { Plus } from "lucide-react";
import { useState } from "react";
import { FilterUser } from "@/hooks/useFilterUsers";
import { cities } from "@/utils/utils";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const { filteredData } = FilterUser();

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-10 gap-5 bg-gray-300">
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Form />
      </Modal>
      <Button buttonType="button" onClick={handleOpenModal}>
        <div className="flex flex-row items-center justify-center gap-2">
          <p>Adicionar usuário</p>
          <Plus size={14} />
        </div>
      </Button>
      <SearchForm onSubmit={(value) => console.log(value)} />
      <Table users={filteredData} />
    </main>
  );
}
