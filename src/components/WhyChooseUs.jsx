import {
  Wrench,
  DollarSign,
  CalendarCheck,
  HeadphonesIcon,
} from "lucide-react";
import useScrollRevealSection from "../hooks/useScrollRevealSection";

const features = [
  {
    icon: Wrench,
    title: "Well-Maintained Vehicles",
    description:
      "Every car in our fleet undergoes regular maintenance and thorough inspections to ensure safety and reliability.",
  },
  {
    icon: DollarSign,
    title: "Affordable Rates",
    description:
      "We offer competitive pricing with no hidden fees. Quality car rental at prices that fit your budget.",
  },
  {
    icon: CalendarCheck,
    title: "Easy Booking",
    description:
      "Our streamlined booking process lets you reserve a car in minutes. Simple, fast, and convenient.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description:
      "Our dedicated support team is available 24/7 to assist you with any questions or concerns.",
  },
];

export default function WhyChooseUs() {
  const sectionRef = useScrollRevealSection();

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-accent" />
            <span className="text-sm font-medium text-accent uppercase tracking-widest">
              Why Us
            </span>
            <span className="h-px w-8 bg-accent" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Why Choose Us
          </h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            We are committed to providing the best car rental experience for every customer.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* LEFT: Person Image */}
          <div className="lg:col-span-2 reveal-left relative">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-accent/[0.04] rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-4 -right-4 w-36 h-36 bg-accent/[0.03] rounded-full blur-2xl pointer-events-none" />
              <div className="absolute top-1/4 -right-2 w-6 h-6 border-2 border-accent/15 rounded-full pointer-events-none" />
              <div className="absolute bottom-8 left-0 w-4 h-4 border-2 border-accent/10 rounded-full pointer-events-none" />

              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg shadow-gray-200/50">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=700&q=80"
                  alt="Happy customer"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="absolute -bottom-3 -right-3 bg-white rounded-xl shadow-lg shadow-gray-200/50 border border-gray-100 px-4 py-3 flex items-center gap-3">
                <div className="flex -space-x-1.5">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-7 h-7 rounded-full border-2 border-white bg-gray-200"
                      style={{
                        backgroundImage: `url(https://images.unsplash.com/photo-${["1494790108377-be9c29b29330", "1507003211169-0a1dd7228f2d", "1438761681033-6461ffad8d80", "1472099645785-5658abf4ff4e"][i]}?w=30&q=30)`,
                        backgroundSize: "cover",
                      }}
                    />
                  ))}
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900">10,000+</p>
                  <p className="text-[10px] text-gray-500">Happy Clients</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Feature Cards */}
          <div className="lg:col-span-3">
            <div className="grid sm:grid-cols-2 gap-4 lg:gap-5">
              {features.map((feat, i) => (
                <div
                  key={feat.title}
                  className="reveal glass-card rounded-xl p-5 lg:p-6 group"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent-light mb-3 group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300">
                    <feat.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-1.5">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}