import { notFound } from "next/navigation";

import { CountryDataType } from "./types";

const fetchCountryData = async (country_code: string) => {
  const query = `
    query GetCountryDetails($code: ID!) {
      country(code: $code) {
        name
        native
        capital
        currency
        population
        continent {
          name
        }
        languages {
          name
        }
      }
    }
  `;

  const response = await fetch("https://countries.trevorblades.com/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query,
      variables: { code: country_code.toUpperCase() },
    }),
  });

  const { data } = await response.json();
  if (!data || !data.country) return notFound();

  const countryData: CountryDataType = {
    name: data.country.name,
    native: data.country.native,
    capital: data.country.capital || "N/A",
    currency: data.country.currency || "N/A",
    population: data.country.population || 0,
    continent: data.country.continent.name,
    languages: data.country.languages.map(
      (lang: { name: string }) => lang.name
    ),
  };

  return countryData;
};

export { fetchCountryData };
