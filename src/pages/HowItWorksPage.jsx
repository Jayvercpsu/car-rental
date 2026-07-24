import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import HowItWorks from "../components/HowItWorks";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export default function HowItWorksPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20 lg:pt-24">
        <HowItWorks />
        <FAQ />

        <section className="py-20 lg:py-28 bg-gradient-to-br from-accent/5 to-accent/10 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-600 max-w-lg mx-auto mb-8">
              Browse our complete fleet and book your perfect car in just a few clicks.
            </p>
            <Link
              to="/cars"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-accent hover:bg-accent-dark rounded-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              Browse Our Fleet
            </Link>
          </div>
        </section>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
