import { Star, Users, Settings, Fuel } from "lucide-react";

export default function CarCard({ car, onViewDetails, onBookNow }) {
  return (
    <div className="group glass-card rounded-xl overflow-hidden">
      <div className="aspect-[16/10] overflow-hidden bg-gray-100 relative">
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
            {Math.round((1 - car.price / car.originalPrice) * 100)}% OFF
          </span>
        )}
      </div>

      <div className="p-5 space-y-4">
        <div>
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-lg font-bold text-gray-900">{car.name}</h3>
            <span className="text-xs font-medium text-accent bg-accent-light px-2.5 py-1 rounded-full">
              {car.category}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-amber-500">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span className="font-medium text-gray-900">{car.rating}</span>
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
            <span className="text-sm text-gray-500 mb-0.5">/day</span>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => onViewDetails(car)}
              className="flex-1 px-4 py-2.5 text-sm font-medium text-gray-700 border border-gray-200 rounded-lg hover:border-accent hover:text-accent transition-all duration-200"
            >
              View Details
            </button>
            <button
              onClick={() => onBookNow(car)}
              className="flex-1 px-4 py-2.5 text-sm font-semibold text-white bg-accent rounded-lg hover:bg-accent-dark transition-all duration-200"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}