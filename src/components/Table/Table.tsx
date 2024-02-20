import React, { useState } from "react";
import { Button } from "../Form/Button/Button";
import { UserListProps } from "@/types/globalt-types";
import { FormInput } from "@/utils/schema-zod";
import { MoveDown } from "lucide-react";

const Table = ({ users }: UserListProps) => {
  const [sortedUsers, setSortedUsers] = useState(users);
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const handleSort = (sortField: string) => {
    let newSortOrder = "asc";
    if (sortField === sortBy) {
      newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    }
    setSortBy(sortField);
    setSortOrder(newSortOrder);

    const sortedData: FormInput[] = [...users].sort(
      (a: FormInput, b: FormInput) => {
        if (a[sortField as keyof FormInput] < b[sortField as keyof FormInput]) {
          return sortOrder === "asc" ? -1 : 1;
        }
        if (a[sortField as keyof FormInput] > b[sortField as keyof FormInput]) {
          return sortOrder === "asc" ? 1 : -1;
        }
        return 0;
      }
    );

    setSortedUsers(sortedData);
  };

  return (
    <table>
      <thead>
        <tr className="p-2 w-full bg-gray-200">
          <th
            className="w-40 text-start border-gray-300 border p-1 text-sm cursor-pointer"
            onClick={() => handleSort("name")}
          >
            <div className="flex flex-row justify-between items-center">
              Nome
              {sortBy === "name" && sortOrder === "asc" ? (
                <MoveDown size={9} className="transform rotate-180" />
              ) : (
                <MoveDown size={9} />
              )}
            </div>
          </th>
          <th
            className="w-40 text-start border-gray-300 border p-1 text-sm cursor-pointer "
            onClick={() => handleSort("city")}
          >
            <div className="flex flex-row justify-between items-center">
              Cidade
              {sortBy === "city" && sortOrder === "asc" ? (
                <MoveDown size={9} className="transform rotate-180" />
              ) : (
                <MoveDown size={9} />
              )}
            </div>
          </th>
          <th
            className="w-40 text-start border-gray-300 border p-1 text-sm cursor-pointer "
            onClick={() => handleSort("status")}
          >
            <div className="flex flex-row justify-between items-center">
              Status
              {sortBy === "status" && sortOrder === "asc" ? (
                <MoveDown size={9} className="transform rotate-180" />
              ) : (
                <MoveDown size={9} />
              )}
            </div>
          </th>
          <th className="w-28 text-center border-gray-300 border p-1 text-sm">
            Ação
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers.map((user, index) => (
          <tr
            key={index}
            className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}
          >
            <td className="w-40 text-start border p-1 text-xs">{user.name}</td>
            <td className="w-40 text-start border p-1 text-xs">{user.city}</td>
            <td className="w-40 text-start border p-1 text-xs">
              {user.status === "ativo" ? (
                <span className="text-green-600">{user.status}</span>
              ) : (
                <span className="text-red-600">{user.status}</span>
              )}
            </td>
            <td className="w-32 text-center border p-1 flex flex-row justify-center items-center h-full">
              <div className="flex lex-row gap-2">
                <Button
                  buttonType="button"
                  styles="text-blue-600 text-xs rounded-sm hover:text-blue-600 border px-2 bg-blue-100 hover:bg-blue-300"
                  onClick={() => console.log("Editando")}
                >
                  Editar
                </Button>
                <Button
                  buttonType="button"
                  styles="text-red-600 text-xs rounded-sm hover:text-red-600 border px-2 bg-red-100 hover:bg-red-300"
                  onClick={() => console.log("Deletando")}
                >
                  Deletar
                </Button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { Table };
