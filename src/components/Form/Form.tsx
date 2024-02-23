"use client";

import React from "react";
import { ufCidadesList } from "@/utils/utils";
import { Button } from "@/components/index";
import { useSubmitForm } from "@/hooks/useSubmitForm";

export function Form() {
  const { errors, handleSubmit, isSubmitting, onSubmit, register } = useSubmitForm();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 p-5 bg-gray-600"
    >
      <div>
        <h1 className="text-xs sm:text-sm font-bold bg-gray-800 p-1 text-center text-white">
          Informações pessoais
        </h1>
        <div className="flex flex-col">
          <div className="flex flex-row justify-between items-center p-1 text-white text-xs sm:text-sm">
            <label htmlFor="name" className="pxx-1">
              Nome completo
            </label>
            {errors.name && (
              <p className="text-orange-500 text-xs">{errors.name.message}</p>
            )}
          </div>
          <input
            type="text"
            {...register("name")}
            className="rounded-md
              ring-0 outline-none h-7
            px-2 bg-gray-800 text-white"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row justify-between items-center p-1 text-white text-xs sm:text-sm">
            <label htmlFor="email" className="px-1">
              Email
            </label>
            {errors.email && (
              <p className="text-orange-500 text-xs">{errors.email.message}</p>
            )}
          </div>
          <input
            type="email"
            {...register("email")}
            className="rounded-md
              ring-0 outline-none h-7
            px-2 bg-gray-800 text-white"
          />
        </div>
        <div className="flex flex-row justify-center items-center gap-2">
          <div className="flex flex-col w-4/6">
            <div className="flex flex-row justify-between items-center text-white text-xs sm:text-sm p-1">
              <label htmlFor="cpf" className="px-1">
                CPF
              </label>
              {errors.cpf && (
                <p className="text-orange-500 text-xs">{errors.cpf.message}</p>
              )}
            </div>
            <input
              type="text"
              {...register("cpf")}
              className="rounded-md
              ring-0 outline-none h-7 text-xs sm:text-sm
            px-2 bg-gray-800 text-white"
              maxLength={11}
            />
          </div>
          <div className="flex flex-col w-2/6">
            <div className="flex flex-row justify-between items-center text-white text-xs sm:text-sm p-1">
              <label htmlFor="status" className="px-1">
                Status
              </label>
              {errors.status && (
                <p className="text-orange-500 text-xs">
                  {errors.status.message}
                </p>
              )}
            </div>
            <select
              {...register("status")}
              className="rounded-md
              ring-0 outline-none h-7 text-xs sm:text-sm
            p-1 bg-gray-800 text-white"
            >
              <option value="active">Ativo</option>
              <option value="inactive">Inativo</option>
            </select>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-xs sm:text-sm font-bold bg-gray-800 text-white p-1 text-center">
          Endereço
        </h1>
        <div className="flex flex-row justify-center items-center">
          <div className="flex flex-col w-4/6 px-1 text-white text-xs sm:text-sm">
            <label htmlFor="country" className="px-1">
              País
            </label>
            <select
              {...register("country")}
              className="rounded-md
              ring-0 outline-none h-7
            p-1 bg-gray-800 text-white"
            >
              <option value="Brasil">Brasil</option>
              <option value="EUA">EUA</option>
              <option value="Argentina">Argentina</option>
              <option value="Chile">Chile</option>
              <option value="Uruguai">Uruguai</option>
            </select>
            {errors.country && (
              <p className="text-orange-500 text-xs">
                {errors.country.message}
              </p>
            )}
          </div>
          <div className="flex flex-col w-2/6 px-1">
            <div className="flex flex-row justify-between items-center text-white text-xs sm:text-sm p-1">
              <label htmlFor="cep">CEP</label>
              {errors.cep && (
                <p className="text-orange-500 text-xs">{errors.cep.message}</p>
              )}
            </div>
            <input
              type="text"
              {...register("cep")}
              className="rounded-md
              ring-0 outline-none h-7 text-xs sm:text-sm
            p-2 bg-gray-800 text-white"
              maxLength={8}
            />
          </div>
        </div>
        <div className="flex flex-row justify-center items-center">
          <div className="flex flex-col w-4/6 p-1 text-white text-xs sm:text-sm">
            <label htmlFor="city" className="px-1">
              Cidade
            </label>
            <input
              type="text"
              {...register("city")}
              className="rounded-md
              ring-0 outline-none h-7 text-xs sm:text-sm
            p-2 bg-gray-800 text-white"
            />
            {errors.city && (
              <p className="text-orange-500 text-xs">{errors.city.message}</p>
            )}
          </div>
          <div className="flex flex-col w-2/6 p-1 text-white text-xs sm:text-sm">
            <label htmlFor="state" className="px-1">
              UF
            </label>
            <select
              {...register("state")}
              className="rounded-md
              ring-0 outline-none h-7
            px-1 bg-gray-800 text-white"
            >
              {ufCidadesList}
            </select>
            {errors.state && (
              <p className="text-orange-500 text-xs">{errors.state.message}</p>
            )}
          </div>
        </div>
        <div className="flex flex-col p-1 text-white text-xs sm:text-sm">
          <label htmlFor="street" className="px-1">
            Rua
          </label>
          <input
            type="text"
            {...register("street")}
            className="rounded-md
              ring-0 outline-none h-7
            p-2 bg-gray-800 text-white"
          />
          {errors.street && (
            <p className="text-orange-500 text-xs">{errors.street.message}</p>
          )}
        </div>
        <div className="flex flex-row items-center justify-center">
          <div className="flex flex-col w-4/6 p-1">
            <div className="flex flex-row justify-between items-center text-white text-xs sm:text-sm p-1">
              <label htmlFor="neighborhood">Bairxro</label>
              {errors.neighborhood && (
                <p className="text-orange-500 text-xs">
                  {errors.neighborhood.message}
                </p>
              )}
            </div>
            <input
              type="text"
              {...register("neighborhood")}
              className="rounded-md
              ring-0 outline-none h-7 text-xs sm:text-sm
            p-2 bg-gray-800 text-white"
            />
          </div>
          <div className="flex flex-col w-2/6 px-1 text-white text-xs sm:text-sm">
            <div className="flex flex-row justify-between items-center p-1">
              <label htmlFor="number">Número</label>
              {errors.number && (
                <p className="text-orange-500 text-xs">
                  {errors.number.message}
                </p>
              )}
            </div>
            <input
              type="text"
              {...register("number")}
              className="rounded-md
              ring-0 outline-none h-7
            p-2 bg-gray-800 text-white"
            />
          </div>
        </div>
        <div className="flex flex-col p-1 text-white text-xs sm:text-sm">
          <label htmlFor="complement" className="px-1">
            Complemento
          </label>
          <input
            type="text"
            {...register("complement")}
            className="rounded-md
              ring-0 outline-none h-7
            p-2 bg-gray-800 text-white"
          />
          {errors.complement && (
            <p className="text-orange-500 text-xs">
              {errors.complement.message}
            </p>
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
