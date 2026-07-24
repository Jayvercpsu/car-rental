import { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CarList from "./components/CarList";
import CarDetailsModal from "./components/CarDetailsModal";
import BookingForm from "./components/BookingForm";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import SpecialOffers from "./components/SpecialOffers";
import PopularDestinations from "./components/PopularDestinations";
import FAQ from "./components/FAQ";
import WaveDivider from "./components/WaveDivider";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import useScrollRevealSection from "./hooks/useScrollRevealSection";

export default function App() {
  const [selectedCar, setSelectedCar] = useState(null);
  const [preselectedCar, setPreselectedCar] = useState("");
  const bookingSectionRef = useScrollRevealSection();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  }, []);

  const handleViewDetails = useCallback((car) => {
    setSelectedCar(car);
  }, []);

  const handleBookNow = useCallback((car) => {
    setPreselectedCar(car.name);
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-right" toastOptions={{ duration: 4000 }} />
      <Navbar />
      <Hero />
      <CarList onViewDetails={handleViewDetails} onBookNow={handleBookNow} />
      <CarDetailsModal
        car={selectedCar}
        onClose={() => setSelectedCar(null)}
        onBookNow={handleBookNow}
      />
      <SpecialOffers />
      <section ref={bookingSectionRef} id="booking" className="py-20 lg:py-28 bg-gray-50/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BookingForm preselectedCar={preselectedCar} />
        </div>
      </section>
      <Testimonials />
      <HowItWorks />
      <PopularDestinations />
      <WhyChooseUs />
      <About />
      <FAQ />
      <section className="py-16 lg:py-20 bg-gradient-to-br from-accent/5 to-accent/10 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-gray-600 max-w-lg mx-auto mb-8">
            Our team is ready to help you find the perfect car for your needs. Reach out anytime.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-accent hover:bg-accent-dark rounded-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
          >
            Contact Us
          </Link>
        </div>
      </section>
      <WaveDivider />
      <Footer />
      <ScrollToTop />
    </div>
  );
}