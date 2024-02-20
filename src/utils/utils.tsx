import { FormInput } from "../utils/schema-zod";

const ufCidades = [
  "RJ",
  "SP",
  "MG",
  "PR",
  "SC",
  "RS",
  "ES",
  "BA",
  "GO",
  "MT",
  "MS",
  "PA",
  "AM",
  "RO",
  "AC",
  "RR",
  "AP",
  "TO",
  "MA",
  "PI",
  "CE",
  "RN",
  "PB",
  "PE",
  "AL",
  "SE",
  "DF",
];

export const ufCidadesList = ufCidades.map((uf) => (
  <option key={uf} value={uf}>
    {uf}
  </option>
));

export const usersData: FormInput[] = [
  {
    name: "João",
    city: "São Paulo",
    status: "Ativo",
    email: "jefferson@gmail.com",
    cpf: "12345678901",
    state: "SP",
    neighborhood: "Vila Mariana",
    street: "Rua Domingos de Morais",
    number: "123",
    complement: "Apto 123",
    cep: "12345678",
    country: "Brasil",
  },
  {
    name: "Maria",
    city: "Rio de Janeiro",
    status: "Ativo",
    email: "maria@gmail.com",
    cpf: "12345678901",
    state: "RJ",
    neighborhood: "Copacabana",
    street: "Rua Domingos de Morais",
    number: "123",
    complement: "Apto 123",
    cep: "12345678",
    country: "Brasil",
  },
  {
    name: "José",
    city: "Belo Horizonte",
    status: "Inativo",
    email: "jose@gmail.com",
    cpf: "12345678901",
    state: "MG",
    neighborhood: "Savassi",
    street: "Rua Doming",
    number: "123",
    complement: "Apto 123",
    cep: "12345678",
    country: "Brasil",
  },
  {
    name: "Ana",
    city: "San Diego",
    status: "Ativo",
    email: "ana@gmail.com",
    cpf: "12345678901",
    state: "CA",
    neighborhood: "Downtown",
    street: "5th Avenue",
    number: "123",
    complement: "Apto 123",
    cep: "12345678",
    country: "EUA",
  },
  {
    name: "Pedro",
    city: "Buenos Aires",
    status: "Inativo",
    email: "pedro@gmail.com",
    cpf: "12345678901",
    state: "BA",
    neighborhood: "Palermo",
    street: "Avenida Santa Fé",
    number: "123",
    complement: "Apto 123",
    cep: "12345678",
    country: "Argentina",
  },
];

const getCities = (data: FormInput[]) => {
  const citiesSet = new Set();
  data.forEach((user: FormInput) => {
    citiesSet.add(user.city);
  });
  return Array.from(citiesSet) as string[];
};

export const cities = getCities(usersData);
