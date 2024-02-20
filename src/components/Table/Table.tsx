import React from "react";
import { Button } from "../Form/Button/Button";
import { CheckCircle, CheckSquare, Edit, Trash } from "lucide-react";

type User = {
  name: string;
  city: string;
  active: boolean;
};

type UserListProps = {
  users: User[];
};

const Table = ({ users }: UserListProps) => {
  return (
    <table>
      <thead>
        <tr className="p-2 w-full bg-gray-200">
          <th className="w-40 text-start border-gray-300 border p-1 text-sm">
            Nome
          </th>
          <th className="w-40 text-start border-gray-300 border p-1 text-sm">
            Cidade
          </th>
          <th className="w-40 text-start border-gray-300 border p-1 text-sm">
            Status
          </th>
          <th className="w-28 text-center border-gray-300 border p-1 text-sm">
            Ação
          </th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr
            key={index}
            className={`
          ${index % 2 === 0 ? "bg-gray-100" : "bg-white"}

          `}
          >
            <td className="w-40 text-start border p-1 text-xs">{user.name}</td>
            <td className="w-40 text-start border p-1 text-xs">{user.city}</td>
            <td className="w-40 text-start border p-1 text-xs">
              {user.active ? "Ativo" : "Inativo"}
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
