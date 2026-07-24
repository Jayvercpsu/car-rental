export default function BookingSuccess({ booking, onReset }) {
  return (
    <div className="max-w-lg mx-auto text-center success-card">
      <div className="relative inline-flex mb-6">
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
          <circle
            cx="36"
            cy="36"
            r="32"
            stroke="#16a34a"
            strokeWidth="3"
            fill="none"
            className="success-checkmark-circle"
            strokeLinecap="round"
          />
          <path
            d="M24 36l8 8 16-16"
            stroke="#16a34a"
            strokeWidth="3"
            fill="none"
            className="success-checkmark-check"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span
          className="success-confetti"
          style={{ "--tx": "-24px", "--ty": "-20px" }}
        />
        <span
          className="success-confetti"
          style={{ "--tx": "24px", "--ty": "-16px", background: "#2563eb", left: "100%", top: "20%" }}
        />
        <span
          className="success-confetti"
          style={{ "--tx": "-18px", "--ty": "18px", background: "#f59e0b", left: "20%", top: "100%" }}
        />
        <span
          className="success-confetti"
          style={{ "--tx": "20px", "--ty": "20px", background: "#ec4899", left: "80%", top: "100%" }}
        />
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 success-text">
        Booking Request Submitted Successfully!
      </h2>
      <p className="text-gray-600 mb-8 success-text">
        We'll review your booking and get back to you within 24 hours.
      </p>

      <div className="bg-gray-50 rounded-xl p-6 text-left space-y-3 mb-8 success-summary">
        <h3 className="font-semibold text-gray-900 mb-3">Booking Summary</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-500">Customer</span>
            <span className="font-medium text-gray-900">{booking.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Car</span>
            <span className="font-medium text-gray-900">{booking.car}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Pick-up Date</span>
            <span className="font-medium text-gray-900">{booking.pickupDate}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Return Date</span>
            <span className="font-medium text-gray-900">{booking.returnDate}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Location</span>
            <span className="font-medium text-gray-900">{booking.location}</span>
          </div>
        </div>
      </div>

      <button
        onClick={onReset}
        className="px-6 py-3 text-base font-semibold text-white bg-accent hover:bg-accent-dark rounded-xl transition-all duration-200 hover:shadow-lg success-button"
      >
        Book Another Car
      </button>
    </div>
  );
}