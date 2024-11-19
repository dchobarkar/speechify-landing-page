const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Information */}
        <div>
          <h3 className="font-bold text-xl mb-4">About Speechify</h3>
          <p>
            Speechify is a leading text-to-speech application designed to
            transform the way you read and listen to content.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-xl mb-4">Quick Links</h3>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Countries
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="font-bold text-xl mb-4">Follow Us</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="font-bold text-xl mb-4">Contact Us</h3>
          <p>Email: support@speechify.com</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Address: 123 Speechify Lane, Suite 456, New York, NY, USA</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-8">
        <p>&copy; 2024 Speechify. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
