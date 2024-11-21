import { fetchCountryData } from "@/app/libs/graphQLQueries";
import { CountryDataType } from "@/app/libs/types";

const CountryPage = async ({
  params,
}: {
  params: Promise<{ country_code: string }>;
}) => {
  const country_code = (await params).country_code;

  const country: CountryDataType = await fetchCountryData(country_code);
  console.log(country);
  return (
    <section>
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-8">
          Welcome to Speechify in
          {country.name}
        </h2>

        <div className="flex justify-center items-center">
          <div className="min-w-60 w-1/3 bg-gray-100 p-6 m-2 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Country Details</h3>

            <p>
              <strong>Native Name:</strong>
              {country.native}
            </p>
            <p>
              <strong>Capital:</strong>
              {country.capital}
            </p>
            <p>
              <strong>Population:</strong>
              {country.population.toLocaleString()}
            </p>
            <p>
              <strong>Currency:</strong> {country.currency}
            </p>
            <p>
              <strong>Continent:</strong>
              {country.continent}
            </p>
            <p>
              <strong>Languages:</strong>
              {country.languages.join(", ")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryPage;
