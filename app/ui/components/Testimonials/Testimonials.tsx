import { testimonials } from "@/app/libs/constants";

const Testimonials = () => {
  return (
    <section id="#testimonails">
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.user} className="bg-gray-100 p-6 rounded-lg">
              <p className="italic">{testimonial.text}</p>
              <p className="mt-4 font-semibold">- {testimonial.user}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
