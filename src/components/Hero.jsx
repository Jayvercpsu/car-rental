import { useState, useEffect, useCallback, useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import useScrollReveal from "../hooks/useScrollReveal";

const cars = [
  {
    name: "Toyota Fortuner",
    category: "SUV",
    transmission: "Automatic",
    seats: 7,
    price: 3500,
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80",
  },
  {
    name: "Honda Civic",
    category: "Sedan",
    transmission: "Automatic",
    seats: 5,
    price: 2500,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
  },
  {
    name: "Toyota Vios",
    category: "Sedan",
    transmission: "Manual",
    seats: 5,
    price: 1800,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
  },
  {
    name: "Mitsubishi Montero",
    category: "SUV",
    transmission: "Automatic",
    seats: 7,
    price: 4000,
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
  },
  {
    name: "Toyota HiAce",
    category: "Van",
    transmission: "Automatic",
    seats: 10,
    price: 4500,
    image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800&q=80",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const titleRef = useScrollReveal();
  const descRef = useScrollReveal();
  const ctaRef = useScrollReveal();
  const trustRef = useScrollReveal();
  const imageRef = useScrollReveal();
  const infoRef = useScrollReveal();

  const goTo = useCallback((i) => {
    setDirection(i > current ? 1 : -1);
    setCurrent(i);
    resetTimer();
  }, [current]);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % cars.length);
    resetTimer();
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + cars.length) % cars.length);
    resetTimer();
  }, []);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % cars.length);
    }, 5000);
    return () => clearInterval(timerRef.current);
  }, [paused]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const car = cars[current];

  return (
    <section
      id="home"
      className="relative min-h-screen pt-16 lg:pt-20 overflow-hidden bg-gradient-to-b from-gray-50/80 via-white to-white scroll-mt-20"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 lg:pt-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* ─── LEFT: Content ─── */}
          <div className="space-y-6 lg:space-y-8">
            <div ref={titleRef} className="reveal space-y-4">
              <div className="flex items-center gap-3">
                <span className="h-px w-6 bg-accent" />
                <span className="text-xs font-semibold text-accent uppercase tracking-[0.2em]">
                  Premium Car Rental
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-gray-900">
                Your Journey Starts{" "}
                <span className="text-accent">With the Right Car.</span>
              </h1>
            </div>

            <p ref={descRef} className="reveal reveal-delay-1 text-base sm:text-lg text-gray-500 max-w-lg leading-relaxed">
              Choose from our premium collection of reliable, comfortable, and
              stylish vehicles for every journey.
            </p>

            <div ref={ctaRef} className="reveal reveal-delay-2 flex flex-wrap gap-3">
              <button
                onClick={() => scrollTo("cars")}
                className="group px-6 py-3 bg-accent text-white font-semibold rounded-xl hover:bg-accent-dark transition-all duration-200 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5 flex items-center gap-2 text-sm"
              >
                Browse Cars
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={() => scrollTo("booking")}
                className="px-6 py-3 bg-white text-gray-700 font-semibold rounded-xl border border-gray-200 hover:border-accent hover:text-accent transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md text-sm"
              >
                Book Now
              </button>
            </div>

            <div ref={trustRef} className="reveal reveal-delay-3 flex items-center gap-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-gray-500">
                <span className="font-semibold text-gray-900">4.9/5</span> — Trusted by 1,000+ Customers
              </span>
            </div>
          </div>

          {/* ─── RIGHT: Car Showcase ─── */}
          <div
            ref={imageRef}
            className="reveal-right relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="relative aspect-[4/3] lg:aspect-[5/4] flex items-center justify-center">
              {/* Decorative shapes */}
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-accent/[0.04] rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-56 h-56 bg-accent/[0.03] rounded-full blur-3xl pointer-events-none" />
              <div className="absolute top-1/2 right-0 w-32 h-32 border border-accent/10 rounded-full pointer-events-none" />
              <div className="absolute bottom-4 left-4 w-16 h-16 border border-accent/10 rounded-full pointer-events-none" />

              {/* Car image with transitions */}
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="relative w-[90%] max-w-lg">
                  {cars.map((c, i) => {
                    const isActive = i === current;
                    const offset = direction >= 0 ? 40 : -40;
                    return (
                      <img
                        key={c.name}
                        src={c.image}
                        alt={c.name}
                        loading={i === 0 ? "eager" : "lazy"}
                        className={`w-full h-auto object-contain transition-all duration-700 ${
                          isActive
                            ? "opacity-100 scale-100 translate-x-0"
                            : "opacity-0 scale-95 pointer-events-none absolute inset-0"
                        }`}
                        style={{
                          transform: isActive
                            ? "translateX(0) scale(1)"
                            : `translateX(${offset}px) scale(0.95)`,
                          transition: "opacity 0.7s ease, transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Floating info card */}
            <div
              className="reveal-left absolute -bottom-2 left-0 lg:-left-4 z-10"
              style={{ transitionDelay: "0.3s" }}
            >
              <div className="bg-white rounded-xl shadow-lg shadow-gray-200/60 border border-gray-100 p-4 min-w-[200px] backdrop-blur-sm animate-float">
                <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">
                  {car.category}
                </p>
                <h3 className="text-base font-bold text-gray-900 mb-1">
                  {car.name}
                </h3>
                <p className="text-xs text-gray-500 mb-2">
                  {car.transmission} · {car.seats} Seats
                </p>
                <div className="flex items-end gap-1 mb-2">
                  <span className="text-lg font-bold text-gray-900">
                    ₱{car.price.toLocaleString()}
                  </span>
                  <span className="text-xs text-gray-400 mb-0.5">/ day</span>
                </div>
                <button
                  onClick={() => scrollTo("booking")}
                  className="text-xs font-semibold text-accent hover:text-accent-dark transition-colors flex items-center gap-1 group"
                >
                  View Details
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Carousel controls */}
            <div className="absolute -bottom-1 right-0 lg:right-2 flex items-center gap-3 z-10">
              <button
                onClick={prev}
                className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:border-accent hover:text-accent transition-all duration-200 shadow-sm text-gray-600"
                aria-label="Previous car"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-1.5">
                {cars.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`transition-all duration-300 ${
                      i === current
                        ? "w-5 h-2 bg-accent rounded-full"
                        : "w-2 h-2 bg-gray-300 hover:bg-gray-400 rounded-full"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:border-accent hover:text-accent transition-all duration-200 shadow-sm text-gray-600"
                aria-label="Next car"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <span className="text-xs font-medium text-gray-400 tabular-nums min-w-[3rem] text-right">
                {String(current + 1).padStart(2, "0")} / {String(cars.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </div>

      </section>
  );
}