import { Car, Users, Award, Clock } from "lucide-react";

const stats = [
  { icon: Car, value: "50+", label: "Cars" },
  { icon: Users, value: "1,000+", label: "Happy Customers" },
  { icon: Award, value: "5+", label: "Years Experience" },
  { icon: Clock, value: "24/7", label: "Support" },
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-gray-50/60 relative overflow-hidden scroll-mt-20">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-12 bg-accent/40" />
            <span className="text-sm font-medium text-accent uppercase tracking-widest">
              Company
            </span>
            <span className="h-px w-12 bg-accent/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            About DriveEase
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="section-accent-border space-y-4 text-gray-600 leading-relaxed">
              <p>
                DriveEase is a trusted car rental service dedicated to providing
                reliable, well-maintained vehicles at competitive prices. We
                make car rental simple, transparent, and hassle-free for every
                customer.
              </p>
              <p>
                Founded with a mission to redefine car rentals, we offer a
                diverse fleet ranging from economy sedans to spacious vans,
                ensuring you find the perfect vehicle for your needs. Our
                commitment to quality service and customer satisfaction sets us
                apart.
              </p>
              <p>
                Whether you're planning a weekend getaway, a business trip, or a
                family vacation, DriveEase has the ideal vehicle waiting for
                you.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800&q=80"
                alt="DriveEase car fleet"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-2 border-accent/30 rounded-full" />
            <div className="absolute -top-3 -left-3 w-4 h-4 border-2 border-accent/20 rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="glass-card rounded-xl p-6 text-center"
            >
              <stat.icon className="w-6 h-6 text-accent mx-auto mb-2" />
              <p className="text-2xl sm:text-3xl font-bold text-gray-900">
                {stat.value}
              </p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}