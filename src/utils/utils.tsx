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