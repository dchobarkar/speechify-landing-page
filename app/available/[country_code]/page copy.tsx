import { GetServerSideProps } from "next";
import Head from "next/head";

type CountryPageProps = {
  country: {
    name: string;
    native: string;
    capital: string;
    currency: string;
    population: number;
    continent: string;
    languages: string[];
  };
};

const CountryPage = ({ country }: CountryPageProps) => {
  return (
    <div>
      <Head>
        <title>Speechify in {country.name}</title>
        <meta
          name="description"
          content={`Discover Speechify services in ${country.name}.`}
        />
      </Head>

      <header className="bg-gray-800 text-white py-4">
        <h1 className="text-center text-2xl">
          Welcome to Speechify in {country.name}
        </h1>
      </header>

      <main className="container mx-auto px-6 py-8">
        <section>
          <h2 className="text-xl font-bold mb-4">Country Details</h2>
          <p>
            <strong>Native Name:</strong> {country.native}
          </p>
          <p>
            <strong>Capital:</strong> {country.capital}
          </p>
          <p>
            <strong>Population:</strong> {country.population.toLocaleString()}
          </p>
          <p>
            <strong>Currency:</strong> {country.currency}
          </p>
          <p>
            <strong>Continent:</strong> {country.continent}
          </p>
          <p>
            <strong>Languages:</strong> {country.languages.join(", ")}
          </p>
        </section>
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const country_code = context.params?.country_code as string;

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

  if (!data || !data.country) {
    return { notFound: true };
  }

  const country = {
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

  return { props: { country } };
};

export default CountryPage;
