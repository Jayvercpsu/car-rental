import { useState } from "react";
import { ChevronDown } from "lucide-react";
import useScrollRevealSection from "../hooks/useScrollRevealSection";

const faqs = [
  {
    q: "What documents do I need to rent a car?",
    a: "You need a valid driver's license, a valid government-issued ID, and a security deposit. Minimum age requirement varies by vehicle type (21-23 years old).",
  },
  {
    q: "Can I cancel or modify my booking?",
    a: "Yes, you can cancel or modify your booking up to 24 hours before the scheduled pick-up time without any penalty. Late cancellations may incur a small fee.",
  },
  {
    q: "Is insurance included in the rental price?",
    a: "Basic insurance coverage is included in all our rental packages. We also offer comprehensive insurance add-ons for additional peace of mind.",
  },
  {
    q: "What happens if I return the car late?",
    a: "A late return fee equivalent to one hour's rental will be charged for every hour past the scheduled return time. Please notify us in advance if you need an extension.",
  },
  {
    q: "Can I pick up the car at a different location?",
    a: "Yes, we offer one-way rentals. Additional fees may apply depending on the pick-up and drop-off locations. Contact our team for details.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const sectionRef = useScrollRevealSection();

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-gray-50/60 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-accent" />
            <span className="text-sm font-medium text-accent uppercase tracking-widest">
              FAQ
            </span>
            <span className="h-px w-8 bg-accent" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            Got questions? We've got answers. Here's what our customers commonly ask.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="reveal glass-card rounded-xl overflow-hidden"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left transition-colors hover:bg-white/50"
              >
                <span className="text-sm font-semibold text-gray-900 pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-accent shrink-0 transition-all duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div className={`faq-answer ${openIndex === i ? "open" : ""}`}>
                <div>
                  <p className="px-6 pb-4 text-sm text-gray-600 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}