import { useEffect } from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20 lg:pt-24">
        <About />
        <WhyChooseUs />
        <Testimonials />
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
