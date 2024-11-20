import { features } from "@/app/libs/constants";

const Features = () => {
  return (
    <section id="#features">
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-8">Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.heading} className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{feature.heading}</h3>
              <p>{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
