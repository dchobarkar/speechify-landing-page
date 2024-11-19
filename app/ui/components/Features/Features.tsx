const Features = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Feature 1</h3>
            <p>Experience the power of text-to-speech conversion with ease.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Feature 2</h3>
            <p>Support for multiple languages and voices.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Feature 3</h3>
            <p>Seamless integration with your favorite platforms.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
