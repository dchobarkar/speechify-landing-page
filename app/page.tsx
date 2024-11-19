// eslint-disable-next-line @typescript-eslint/no-unused-vars
const GQL_URL = `https://countries.trevorblades.com/graphql`;
export const fetchCountries = async () => {};

export default async function Home() {
  return (
    <div className="min-h-screen flex flex-col" data-testid="home-page">
      {/* Hero Section */}
      <section className="bg-indigo-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Speechify</h1>
          <p className="text-lg mb-8">
            Transforming the way you read and listen.
          </p>
          <button className="bg-white border-2 border-white text-indigo-600 font-semibold px-6 py-2 rounded">
            Get Started
          </button>
          <button className="bg-transparent border-2 border-white text-white-600 font-semibold px-6 py-2 rounded ml-4">
            Learn More
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Feature 1</h3>
              <p>
                Experience the power of text-to-speech conversion with ease.
              </p>
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

      {/* Countries Available In Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto text-center">
          <h2
            className="text-3xl font-bold mb-8"
            data-testid="countries-heading"
          >
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

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg">
              <p className="italic">
                &quot;Speechify has changed the way I consume content. It&apos;s
                a game changer!&quot;
              </p>
              <p className="mt-4 font-semibold">- User A</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <p className="italic">
                &quot;The best text-to-speech app I&apos;ve ever used. Highly
                recommend!&quot;
              </p>
              <p className="mt-4 font-semibold">- User B</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-indigo-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <form className="max-w-lg mx-auto">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded text-gray-800"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded text-gray-800"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Your Message"
                className="w-full px-4 py-2 rounded text-gray-800"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-white text-indigo-600 font-semibold px-6 py-2 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
