import React, { useState } from "react";
import { UserListProps } from "@/types/globalt-types";
import { FormInput } from "@/utils/schema-zod";
import Link from "next/link";
import { Search } from "lucide-react";

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
    <>
      <div className="w-full flex flex-col justify-center items-center">
        <table className="w-full table-auto max-w-[50rem]">
          <thead>
            <tr className="text-sm sm:text-base">
              <th
                className="text-left cursor-pointer p-1 bg-gray-600 text-white border-r"
                onClick={() => handleSort("name")}
              >
                Nome
              </th>
              <th
                className="text-left cursor-pointer p-1 bg-gray-600 text-white border-r "
                onClick={() => handleSort("email")}
              >
                Email
              </th>
              <th
                className="text-left cursor-pointer p-1 bg-gray-600 text-white border-r "
                onClick={() => handleSort("status")}
              >
                Status
              </th>
              <th
                className="text-left cursor-pointer p-1 bg-gray-600 text-white border-r "
                onClick={() => handleSort("city")}
              >
                Cidade
              </th>
              <th
                className="text-left cursor-pointer p-1 bg-gray-600 text-white border-r "
                onClick={() => handleSort("state")}
              >
                Estado
              </th>
              <th
                className="text-left cursor-pointer p-1 bg-gray-600 text-white "
                onClick={() => handleSort("country")}
              >
                País
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedUsers.map((user, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"
                } text-left sm:text-sm text-xs `}
              >
                <td className="p-1 border flex flex-row justify-between items-center">
                  {user.name}
                  <Link href={`/profile/${user.name}`} key={index}>
                    <Search size={14} className="ml-2" />
                  </Link>
                </td>
                <td className="p-1 border">{user.email}</td>
                <td
                  className={
                    user.status === "Ativo"
                      ? "p-1 border text-green-500"
                      : "p-1 border text-red-500"
                  }
                >
                  {user.status}
                </td>
                <td className="p-1 border">{user.city}</td>
                <td className="p-1 border">{user.state}</td>
                <td className="p-1 border">{user.country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export { Table };
