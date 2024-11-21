const Contact = () => {
  return (
    <section id="#contact" className="bg-indigo-600 text-white">
      <div className="container mx-auto px-6 py-20 text-center">
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
            />
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
  );
};

export default Contact;
