import { Search, Calendar, ClipboardCheck, Smile } from "lucide-react";
import useScrollRevealSection from "../hooks/useScrollRevealSection";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Choose Your Car",
    description: "Browse our wide selection of well-maintained vehicles and pick the one that suits your needs.",
  },
  {
    number: "02",
    icon: Calendar,
    title: "Select Your Schedule",
    description: "Choose your pick-up and return dates. We offer flexible rental periods for your convenience.",
  },
  {
    number: "03",
    icon: ClipboardCheck,
    title: "Submit Your Booking",
    description: "Fill out the booking form and submit your request. Our team will confirm it promptly.",
  },
  {
    number: "04",
    icon: Smile,
    title: "Enjoy Your Ride",
    description: "Pick up your car and enjoy a smooth, comfortable drive. We're here if you need anything.",
  },
];

export default function HowItWorks() {
  const sectionRef = useScrollRevealSection();

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="py-20 lg:py-28 bg-gray-50/60 relative overflow-hidden scroll-mt-20"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="reveal text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-accent" />
            <span className="text-sm font-medium text-accent uppercase tracking-widest">
              Process
            </span>
            <span className="h-px w-8 bg-accent" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            How It Works
          </h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            Renting a car with us is simple and hassle-free. Just follow these steps.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={step.number} className="step-connector group relative">
              <div
                className="reveal glass-card rounded-xl p-6 text-center relative"
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-5 rounded-2xl bg-accent-light group-hover:bg-accent transition-all duration-300 relative z-10">
                  <step.icon className="w-7 h-7 text-accent group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-6xl font-black text-accent/10 group-hover:text-accent/20 transition-colors duration-300 absolute -top-1 right-4 select-none pointer-events-none">
                  {step.number}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-2 relative">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}