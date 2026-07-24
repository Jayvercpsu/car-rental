import { Percent, Calendar, Shield } from "lucide-react";
import useScrollRevealSection from "../hooks/useScrollRevealSection";

const offers = [
  {
    icon: Percent,
    title: "Weekly Discount",
    description: "Save 15% when you rent for 7 days or more. Perfect for extended trips.",
    color: "from-blue-500/10 to-blue-500/5",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: Calendar,
    title: "Monthly Special",
    description: "Get 25% off on monthly rentals. Ideal for long-term travelers.",
    color: "from-green-500/10 to-green-500/5",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    icon: Shield,
    title: "Insurance Package",
    description: "Add comprehensive insurance for only ₱300/day. Drive with peace of mind.",
    color: "from-purple-500/10 to-purple-500/5",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
];

export default function SpecialOffers() {
  const sectionRef = useScrollRevealSection();

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-accent" />
            <span className="text-sm font-medium text-accent uppercase tracking-widest">
              Promos
            </span>
            <span className="h-px w-8 bg-accent" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Special Offers
          </h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            Take advantage of our exclusive deals and save on your next rental.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {offers.map((offer, i) => (
            <div
              key={offer.title}
              className="reveal glass-card rounded-xl p-6 group"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div
                className={`flex items-center justify-center w-14 h-14 rounded-2xl ${offer.iconBg} mb-5 group-hover:scale-110 transition-transform duration-300 ${offer.iconColor}`}
              >
                <offer.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {offer.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {offer.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}