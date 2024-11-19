const Navbar = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Speechify</div>
        <nav className="space-x-4">
          <a href="#" className="hover:text-gray-300">
            Home
          </a>
          <a href="#" className="hover:text-gray-300">
            Features
          </a>
          <a href="#" className="hover:text-gray-300">
            Countries
          </a>
          <a href="#" className="hover:text-gray-300">
            Testimonials
          </a>
          <a href="#" className="hover:text-gray-300">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
