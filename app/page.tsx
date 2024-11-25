import Availability from "./ui/components/Availability/Availability";
import Contact from "./ui/components/Contact/Contact";
import Features from "./ui/components/Features/Features";
import Hero from "./ui/components/Hero/Hero";
import Testimonials from "./ui/components/Testimonials/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col" data-testid="home-page">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* Countries Available In Section */}
      <Availability />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Form */}
      <Contact />
    </div>
  );
}
