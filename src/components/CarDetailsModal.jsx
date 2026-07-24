import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

export default function CarDetailsModal({ car, onClose, onBookNow }) {
  return (
    <>
      {car && (
        <>
          <div
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl pointer-events-auto"
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 hover:bg-white shadow-sm transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-[16/9] bg-gray-50">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 sm:p-8 space-y-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                      {car.name}
                    </h2>
                    <span className="inline-block mt-1 text-sm font-medium text-accent bg-accent-light px-3 py-1 rounded-full">
                      {car.category}
                    </span>
                  </div>
                  <div className="text-right">
                    {car.originalPrice && (
                      <span className="text-lg text-gray-400 line-through block">
                        ₱{car.originalPrice.toLocaleString()}
                      </span>
                    )}
                    <span className="text-3xl font-bold text-gray-900">
                      ₱{car.price.toLocaleString()}
                    </span>
                    <span className="text-sm text-gray-500"> /day</span>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  {car.description}
                </p>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Specifications
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {Object.entries(car.specs).map(([key, value]) => (
                      <div
                        key={key}
                        className="bg-gray-50 rounded-xl p-4 text-center"
                      >
                        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                          {key}
                        </p>
                        <p className="mt-1 text-sm font-semibold text-gray-900 capitalize">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Features
                    </h3>
                    <ul className="space-y-3">
                      {car.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm text-gray-600"
                        >
                          <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Requirements
                    </h3>
                    <ul className="space-y-3">
                      {car.requirements.map((req) => (
                        <li
                          key={req}
                          className="flex items-start gap-3 text-sm text-gray-600"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  onClick={() => {
                    onClose();
                    onBookNow(car);
                  }}
                  className="w-full py-3.5 text-base font-semibold text-white bg-accent hover:bg-accent-dark rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                >
                  Book This Car
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </>
  );
}