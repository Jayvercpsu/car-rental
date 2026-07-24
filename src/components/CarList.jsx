import { Link } from "react-router-dom";
import cars from "../data/carsData";
import CarCard from "./CarCard";
import useScrollRevealSection from "../hooks/useScrollRevealSection";

export default function CarList({ onViewDetails, onBookNow }) {
  const sectionRef = useScrollRevealSection();

  const previewCars = cars.slice(0, 3);

  return (
    <section
      ref={sectionRef}
      id="cars"
      className="py-20 lg:py-28 section-diagonal relative"
    >
      <div className="section-line relative pt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-12 bg-accent/40" />
              <span className="text-sm font-medium text-accent uppercase tracking-widest">
                Our Fleet
              </span>
              <span className="h-px w-12 bg-accent/40" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Featured Vehicles
            </h2>
            <p className="mt-3 text-gray-600 max-w-xl mx-auto">
              Discover our most popular rental cars. View the complete fleet on
              our dedicated cars page.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {previewCars.map((car, i) => (
              <div
                key={car.id}
                className="reveal"
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <CarCard
                  car={car}
                  onViewDetails={onViewDetails}
                  onBookNow={onBookNow}
                />
              </div>
            ))}
          </div>

          <div className="reveal text-center mt-10" style={{ transitionDelay: "0.4s" }}>
            <Link
              to="/cars"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-accent border-2 border-accent rounded-lg hover:bg-accent hover:text-white transition-all duration-200 group"
            >
              View All Cars
              <svg
                className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}