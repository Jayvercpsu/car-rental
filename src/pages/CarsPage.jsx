import { useState, useCallback, useEffect } from "react";
import { Car, ArrowLeft, Star, Users, Settings, Fuel } from "lucide-react";
import { Link } from "react-router-dom";
import cars from "../data/carsData";
import CarDetailsModal from "../components/CarDetailsModal";
import BookingForm from "../components/BookingForm";
import Navbar from "../components/Navbar";

const categories = ["All", "Sedan", "SUV", "Van", "Pickup", "MPV"];

export default function CarsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [modalCar, setModalCar] = useState(null);
  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filtered =
    activeCategory === "All"
      ? cars
      : cars.filter((c) => c.category === activeCategory);

  const handleViewDetails = useCallback((car) => {
    setModalCar(car);
  }, []);

  const handleBookNow = useCallback((car) => {
    setSelectedCar(car);
    setTimeout(() => {
      document.getElementById("booking-form")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20 lg:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-12 bg-accent/40" />
              <span className="text-sm font-medium text-accent uppercase tracking-widest">
                Our Fleet
              </span>
              <span className="h-px w-12 bg-accent/40" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3">
              Browse All Cars
            </h1>
            <p className="text-gray-600 max-w-xl mx-auto">
              Explore our complete fleet of well-maintained vehicles for every
              occasion.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-accent text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filtered.map((car, i) => (
              <div
                key={car.id}
                className={`group bg-white rounded-xl border overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                  selectedCar?.id === car.id
                    ? "border-accent ring-2 ring-accent/20"
                    : "border-gray-100"
                }`}
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className="aspect-[16/10] overflow-hidden bg-gray-50 relative">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {car.popular && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 bg-accent text-white text-xs font-semibold rounded-md shadow-sm">
                      Popular
                    </span>
                  )}
                  {car.originalPrice && (
                    <span className="absolute top-3 right-3 px-2.5 py-1 bg-green-500 text-white text-xs font-semibold rounded-md shadow-sm">
                      {Math.round((1 - car.price / car.originalPrice) * 100)}%
                      OFF
                    </span>
                  )}
                </div>

                <div className="p-5 space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-lg font-bold text-gray-900">
                        {car.name}
                      </h3>
                      <span className="text-xs font-medium text-accent bg-accent-light px-2.5 py-1 rounded-full">
                        {car.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-amber-500">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span className="font-medium text-gray-900">
                        {car.rating}
                      </span>
                      <span className="text-gray-400">({car.reviews})</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <Settings className="w-4 h-4" />
                      {car.transmission}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Fuel className="w-4 h-4" />
                      {car.fuel}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users className="w-4 h-4" />
                      {car.seats} seats
                    </span>
                  </div>

                  <div className="pt-3 border-t border-gray-100">
                    <div className="flex items-end gap-1 mb-4">
                      {car.originalPrice && (
                        <span className="text-sm text-gray-400 line-through mb-0.5 mr-1">
                          ₱{car.originalPrice.toLocaleString()}
                        </span>
                      )}
                      <span className="text-2xl font-bold text-gray-900">
                        ₱{car.price.toLocaleString()}
                      </span>
                      <span className="text-sm text-gray-500 mb-0.5">
                        /day
                      </span>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => handleViewDetails(car)}
                        className="flex-1 px-4 py-2.5 text-sm font-medium text-gray-700 border border-gray-200 rounded-lg hover:border-accent hover:text-accent transition-all duration-200"
                      >
                        View Details
                      </button>
                      <button
                        onClick={() => handleBookNow(car)}
                        className={`flex-1 px-4 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 ${
                          selectedCar?.id === car.id
                            ? "bg-accent text-white shadow-md"
                            : "bg-accent text-white hover:bg-accent-dark hover:shadow-md"
                        }`}
                      >
                        {selectedCar?.id === car.id
                          ? "Selected"
                          : "Select & Book"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-gray-400">
              <Car className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg font-medium text-gray-500">
                No cars found in this category
              </p>
            </div>
          )}

          {selectedCar && (
            <div id="booking-form" className="scroll-mt-24 mb-12">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-accent/5 rounded-full mb-4">
                  <Car className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-accent">
                    Booking: {selectedCar.name}
                  </span>
                </div>
              </div>
              <BookingForm key={selectedCar.id} preselectedCar={selectedCar.name} />
            </div>
          )}

          {!selectedCar && filtered.length > 0 && (
            <div className="text-center py-12 text-gray-400">
              <Car className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p className="text-sm">Select a car above to start booking</p>
            </div>
          )}
        </div>

        <CarDetailsModal
          car={modalCar}
          onClose={() => setModalCar(null)}
          onBookNow={(car) => handleBookNow(car)}
        />
      </div>
    </div>
  );
}
