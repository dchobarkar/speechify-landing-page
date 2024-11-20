import { countries } from "@/app/libs/constants";

const Availability = () => {
  return (
    <section id="#countries" className="bg-gray-50">
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-8" data-testid="countries-heading">
          Available in These Countries
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {countries.map((country) => (
            <div key={country} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{country}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Availability;
