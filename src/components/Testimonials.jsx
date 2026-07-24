import { Star } from "lucide-react";
import useScrollRevealSection from "../hooks/useScrollRevealSection";

const testimonials = [
  {
    name: "Maria Santos",
    role: "Business Traveler",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    rating: 5,
    text: "DriveEase made my business trip seamless. The car was clean, the booking was easy, and the staff was incredibly helpful. Highly recommended!",
  },
  {
    name: "John Reyes",
    role: "Family Vacation",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    rating: 5,
    text: "We rented a Hyundai Staria for our family vacation and it was perfect. Spacious, comfortable, and the whole process was hassle-free. Will definitely rent again.",
  },
  {
    name: "Ana Cruz",
    role: "Frequent Renter",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    rating: 4,
    text: "I've been renting from DriveEase for over a year now. Their cars are always well-maintained and their rates are the most competitive in the city.",
  },
];

export default function Testimonials() {
  const sectionRef = useScrollRevealSection();

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-12 bg-accent/40" />
            <span className="text-sm font-medium text-accent uppercase tracking-widest">
              Testimonials
            </span>
            <span className="h-px w-12 bg-accent/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            What Our Customers Say
          </h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            Real feedback from real customers who trust DriveEase.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="reveal glass-card rounded-xl p-6"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    className={`w-4 h-4 ${idx < t.rating ? "text-amber-400 fill-current" : "text-gray-200"}`}
                  />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-accent/10"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}