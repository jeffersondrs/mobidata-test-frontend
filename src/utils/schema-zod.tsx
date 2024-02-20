import { z } from "zod";

export const FormSchema = z.object({
  name: z.string().min(3, { message: "Nome é obrigatório" }),
  email: z
    .string()
    .email({ message: "E-mail é obrigatório" })
    .regex(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/, {
      message: "Preencha o email corretamente",
    }),
  cpf: z
    .string()
    .length(11, {
      message: "CPF deve conter 11 dígitos sem o traço",
    })
    .regex(/^[0-9]*$/, {
      message: "CPF deve conter apenas números",
    }),
  city: z.string(),
  state: z.string(),
  neighborhood: z.string(),
  street: z.string(),
  number: z.string(),
  complement: z.string(),
  cep: z
    .string()
    .length(8, { message: "Deve conter 8 dígitos" })
    .regex(/^[0-9]*$/, { message: "Apenas números" }),
  country: z.string(),
  status: z.string(),
});

export type FormInput = z.infer<typeof FormSchema>;
