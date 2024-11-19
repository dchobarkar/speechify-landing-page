const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg">
            <p className="italic">
              &quot;Speechify has changed the way I consume content. It&apos;s a
              game changer!&quot;
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
  );
};

export default Testimonials;
