import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-indigo-600 text-white">
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Speechify</h1>

        <p className="text-lg mb-8">
          Transforming the way you read and listen.
        </p>

        <Link
          href="/#testimonials"
          className="bg-white border-2 border-white text-indigo-600 font-semibold px-6 py-2 rounded"
        >
          Get Started
        </Link>

        <Link
          href="/#testimonials"
          className="bg-transparent border-2 border-white text-white-600 font-semibold px-6 py-2 rounded ml-4"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
};

export default Hero;
