import { useState } from "react";
import { Loader2 } from "lucide-react";
import cars from "../data/carsData";
import BookingSuccess from "./BookingSuccess";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  car: "",
  pickup: "",
  dropoff: "",
  pickupDate: "",
  returnDate: "",
  pickupTime: "",
  notes: "",
};

export default function BookingForm({ preselectedCar, onSuccess }) {
  const [form, setForm] = useState({ ...initialForm, car: preselectedCar || "" });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Required";
    if (!form.email.trim()) errs.email = "Required";
    if (!form.phone.trim()) errs.phone = "Required";
    if (!form.car) errs.car = "Required";
    if (!form.pickup.trim()) errs.pickup = "Required";
    if (!form.dropoff.trim()) errs.dropoff = "Required";
    if (!form.pickupDate) errs.pickupDate = "Required";
    if (!form.returnDate) errs.returnDate = "Required";
    if (!form.pickupTime) errs.pickupTime = "Required";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      if (onSuccess) onSuccess();
    }, 2000);
  };

  const handleReset = () => {
    setForm(initialForm);
    setErrors({});
    setSuccess(false);
  };

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[field];
        return copy;
      });
    }
  };

  if (success) {
    return (
      <BookingSuccess
        booking={{
          name: form.name,
          car: form.car,
          pickupDate: form.pickupDate,
          returnDate: form.returnDate,
          location: form.pickup,
        }}
        onReset={handleReset}
      />
    );
  }

  const fields = [
    { label: "Full Name", name: "name", type: "text" },
    { label: "Email Address", name: "email", type: "email" },
    { label: "Phone Number", name: "phone", type: "tel" },
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="h-px w-8 bg-accent" />
          <span className="text-sm font-medium text-accent uppercase tracking-widest">
            Reservation
          </span>
          <span className="h-px w-8 bg-accent" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Book Your Car
        </h2>
        <p className="text-gray-600 max-w-lg mx-auto">
          Fill out the form below and we'll confirm your booking shortly.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="glass rounded-2xl p-6 sm:p-8 space-y-6"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {fields.map((f) => (
            <div key={f.name}>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                {f.label}
              </label>
              <input
                type={f.type}
                value={form[f.name]}
                onChange={(e) => handleChange(f.name, e.target.value)}
                className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-all duration-200 outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent bg-white/80 ${
                  errors[f.name]
                    ? "border-red-300"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              />
              {errors[f.name] && (
                <p className="mt-1 text-xs text-red-500">{errors[f.name]}</p>
              )}
            </div>
          ))}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Select Car
            </label>
            <select
              value={form.car}
              onChange={(e) => handleChange("car", e.target.value)}
              className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-all duration-200 outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent bg-white/80 ${
                errors.car
                  ? "border-red-300"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <option value="">Select a car</option>
              {cars.map((c) => (
                <option key={c.id} value={c.name}>
                  {c.name} - ₱{c.price.toLocaleString()}/day
                </option>
              ))}
            </select>
            {errors.car && (
              <p className="mt-1 text-xs text-red-500">{errors.car}</p>
            )}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Pick-up Location
            </label>
            <input
              type="text"
              value={form.pickup}
              onChange={(e) => handleChange("pickup", e.target.value)}
              className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-all duration-200 outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent bg-white/80 ${
                errors.pickup
                  ? "border-red-300"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            />
            {errors.pickup && (
              <p className="mt-1 text-xs text-red-500">{errors.pickup}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Drop-off Location
            </label>
            <input
              type="text"
              value={form.dropoff}
              onChange={(e) => handleChange("dropoff", e.target.value)}
              className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-all duration-200 outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent bg-white/80 ${
                errors.dropoff
                  ? "border-red-300"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            />
            {errors.dropoff && (
              <p className="mt-1 text-xs text-red-500">{errors.dropoff}</p>
            )}
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Pick-up Date
            </label>
            <input
              type="date"
              value={form.pickupDate}
              onChange={(e) => handleChange("pickupDate", e.target.value)}
              className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-all duration-200 outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent bg-white/80 ${
                errors.pickupDate
                  ? "border-red-300"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            />
            {errors.pickupDate && (
              <p className="mt-1 text-xs text-red-500">{errors.pickupDate}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Return Date
            </label>
            <input
              type="date"
              value={form.returnDate}
              onChange={(e) => handleChange("returnDate", e.target.value)}
              className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-all duration-200 outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent bg-white/80 ${
                errors.returnDate
                  ? "border-red-300"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            />
            {errors.returnDate && (
              <p className="mt-1 text-xs text-red-500">{errors.returnDate}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Pick-up Time
            </label>
            <input
              type="time"
              value={form.pickupTime}
              onChange={(e) => handleChange("pickupTime", e.target.value)}
              className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-all duration-200 outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent bg-white/80 ${
                errors.pickupTime
                  ? "border-red-300"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            />
            {errors.pickupTime && (
              <p className="mt-1 text-xs text-red-500">{errors.pickupTime}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Additional Notes
          </label>
          <textarea
            rows={3}
            value={form.notes}
            onChange={(e) => handleChange("notes", e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 hover:border-gray-300 text-sm transition-all duration-200 outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent bg-white/80 resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full py-3.5 text-base font-semibold text-white bg-accent hover:bg-accent-dark rounded-xl transition-all duration-200 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {submitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Processing...
            </>
          ) : (
            "Submit Booking"
          )}
        </button>
      </form>
    </div>
  );
}