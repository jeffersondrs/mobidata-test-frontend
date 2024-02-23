import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchema } from "@/utils/schema-zod";

export const useSubmitForm = () => {
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

  const onSubmit = () => {
    console.log("Clicou");

    // Aqui você pode fazer a chamada para a API

    // Limpa os campos
  };

  return { register, handleSubmit, isSubmitting, errors, onSubmit };
};
