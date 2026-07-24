import { MapPin, Star } from "lucide-react";
import useScrollRevealSection from "../hooks/useScrollRevealSection";

const destinations = [
  {
    name: "Manila",
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600&q=80",
    description: "Explore the vibrant capital city with its rich history and modern attractions.",
  },
  {
    name: "Tagaytay",
    image: "https://images.unsplash.com/photo-1578841459285-16c1c03b3473?w=600&q=80",
    description: "Enjoy the cool climate and stunning views of Taal Volcano from the ridges.",
  },
  {
    name: "Baguio",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80",
    description: "Escape to the Summer Capital of the Philippines with scenic mountain roads.",
  },
];

export default function PopularDestinations() {
  const sectionRef = useScrollRevealSection();

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-gray-50/60 section-diagonal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-accent" />
            <span className="text-sm font-medium text-accent uppercase tracking-widest">
              Destinations
            </span>
            <span className="h-px w-8 bg-accent" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Popular Destinations
          </h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            Discover amazing places with the freedom of your own rental car.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {destinations.map((d, i) => (
            <div
              key={d.name}
              className="reveal group relative rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={d.image}
                  alt={d.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs">
                <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                <span>4.8</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-2 text-white mb-1">
                  <MapPin className="w-4 h-4 text-accent" />
                  <h3 className="text-lg font-bold">{d.name}</h3>
                </div>
                <p className="text-sm text-white/80">{d.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}