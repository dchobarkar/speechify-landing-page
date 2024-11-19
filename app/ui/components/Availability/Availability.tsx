const Availability = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8" data-testid="countries-heading">
          Available in These Countries
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">🇺🇸 USA</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">🇮🇳 India</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">🇨🇦 Canada</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">🇬🇧 UK</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Availability;
