"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchema, FormInput } from "@/utils/schema-zod";
import { Button } from "./Button/Button";
import { ufCidadesList } from "@/utils/utils";

export function Form() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      cpf: "",
      status: "active",
      city: "",
      state: "",
      neighborhood: "",
      street: "",
      number: "",
      complement: "",
      cep: "",
      country: "Brasil",
    },
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = (data: FormInput) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-3">
      <div className="">
        <h1 className="text-xl font-bold bg-gray-300 p-1 text-center">
          Informações pessoais
        </h1>
        <div className="flex flex-col">
          <div className="flex flex-row justify-between items-center p-1">
            <label htmlFor="name">Nome completo</label>
            {errors.name && (
              <p className="text-red-500 text-xs">{errors.name.message}</p>
            )}
          </div>
          <input
            type="text"
            {...register("name")}
            className="border border-gray-300 rounded-md p-1"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row justify-between items-center p-1">
            <label htmlFor="email">Email</label>
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email.message}</p>
            )}
          </div>
          <input
            type="email"
            {...register("email")}
            className="border border-gray-300 rounded-md p-1"
          />
        </div>
        <div className="flex flex-row gap-2 ">
          <div className="flex flex-col w-4/6">
            <div className="flex flex-row justify-between items-center p-1">
              <label htmlFor="cpf">CPF</label>
              {errors.cpf && (
                <p className="text-red-500 text-xs">{errors.cpf.message}</p>
              )}
            </div>
            <input
              type="text"
              {...register("cpf")}
              className="border border-gray-300 rounded-md p-1"
              maxLength={11}
            />
          </div>
          <div className="flex flex-col w-2/6">
            <div className="flex flex-row justify-between items-center p-1">
              <label htmlFor="status">Status</label>
              {errors.status && (
                <p className="text-red-500 text-xs">{errors.status.message}</p>
              )}
            </div>
            <select
              {...register("status")}
              className="border border-gray-300 rounded-md p-1"
            >
              <option value="active">Ativo</option>
              <option value="inactive">Inativo</option>
            </select>
          </div>
        </div>
      </div>
      <div className="gap-2">
        <h1 className="text-xl font-bold bg-gray-300 p-1 text-center">
          Endereço
        </h1>
        <div className="flex flex-row gap-2">
          <div className="flex flex-col w-4/6 p-1">
            <label htmlFor="country">País</label>
            <select
              {...register("country")}
              className="border border-gray-300 rounded-md p-1"
            >
              <option value="Brasil">Brasil</option>
              <option value="EUA">EUA</option>
              <option value="Argentina">Argentina</option>
              <option value="Chile">Chile</option>
              <option value="Uruguai">Uruguai</option>
            </select>
            {errors.country && (
              <p className="text-red-500 text-xs">{errors.country.message}</p>
            )}
          </div>
          <div className="flex flex-col w-2/6">
            <div className="flex flex-row justify-between items-center ">
              <label htmlFor="cep">CEP</label>
              {errors.cep && (
                <p className="text-red-500 text-xs">{errors.cep.message}</p>
              )}
            </div>
            <input
              type="text"
              {...register("cep")}
              className="border border-gray-300 rounded-md p-1"
              maxLength={8}
            />
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <div className="flex flex-col w-4/6 p-1">
            <label htmlFor="city">Cidade</label>
            <input
              type="text"
              {...register("city")}
              className="border border-gray-300 rounded-md p-1"
            />
            {errors.city && (
              <p className="text-red-500 text-xs">{errors.city.message}</p>
            )}
          </div>
          <div className="flex flex-col w-2/6 p-1">
            <label htmlFor="state">UF</label>
            <select
              {...register("state")}
              className="border border-gray-300 rounded-md p-1"
            >
              {ufCidadesList}
            </select>
            {errors.state && (
              <p className="text-red-500 text-xs">{errors.state.message}</p>
            )}
          </div>
        </div>
        <div className="flex flex-col p-1">
          <label htmlFor="street">Rua</label>
          <input
            type="text"
            {...register("street")}
            className="border border-gray-300 rounded-md p-1"
          />
          {errors.street && (
            <p className="text-red-500 text-xs">{errors.street.message}</p>
          )}
        </div>
        <div className="flex flex-row gap-2">
          <div className="flex flex-col w-4/6 p-1">
            <div className="flex flex-row justify-between items-center ">
              <label htmlFor="neighborhood">Bairro</label>
              {errors.neighborhood && (
                <p className="text-red-500 text-xs">
                  {errors.neighborhood.message}
                </p>
              )}
            </div>
            <input
              type="text"
              {...register("neighborhood")}
              className="border border-gray-300 rounded-md p-1"
            />
          </div>
          <div className="flex flex-col w-2/6 p-1">
            <div className="flex flex-row justify-between items-center ">
              <label htmlFor="number">Number</label>
              {errors.number && (
                <p className="text-red-500 text-xs">{errors.number.message}</p>
              )}
            </div>
            <input
              type="text"
              {...register("number")}
              className="border border-gray-300 rounded-md p-1"
            />
          </div>
        </div>

        <div className="flex flex-col p-1">
          <label htmlFor="complement">Complemento</label>
          <input
            type="text"
            {...register("complement")}
            className="border border-gray-300 rounded-md p-1"
          />
          {errors.complement && (
            <p className="text-red-500 text-xs">{errors.complement.message}</p>
          )}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Button
          buttonType="submit"
          onClick={() => {
            console.log("Clicou");
          }}
          disabled={isSubmitting}
        >
          Cadastrar
        </Button>
      </div>
    </form>
  );
}
