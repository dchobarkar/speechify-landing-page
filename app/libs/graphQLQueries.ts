import { CountryDataType } from "./types";

const fetchCountryData = async (country_code: string) => {
  const query = `
    query GetCountryDetails($code: ID!) {
      country(code: $code) {
        name
        native
        capital
        emoji
        currency
        languages {
          code
          name
        }
      }
    }
  `;

  const response = await fetch("https://countries.trevorblades.com/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query,
      variables: { code: country_code.toUpperCase() },
    }),
  });
  const result = await response.json();
  if (result.errors) throw new Error("Failed to fetch data");
  const { data } = result;
  if (!data || !data.country) throw new Error("No country data to show");

  const countryData: CountryDataType = {
    name: data.country.name,
    native: data.country.native,
    capital: data.country.capital,
    emoji: data.country.emoji,
    currency: data.country.currency,
    languages: data.country.languages.map(
      (lang: { name: string }) => lang.name
    ),
  };
  return countryData;
};

export { fetchCountryData };
