import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import useScrollRevealSection from "../hooks/useScrollRevealSection";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
  { icon: Mail, label: "Email", value: "hello@driveease.com" },
  { icon: MapPin, label: "Location", value: "123 Main Street, City" },
  { icon: Clock, label: "Business Hours", value: "Mon - Sat: 8:00 AM - 8:00 PM" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const sectionRef = useScrollRevealSection();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setForm({ name: "", email: "", message: "" });
      toast.success("Message sent! We'll get back to you soon.");
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 section-dot-pattern relative">
      <div ref={sectionRef}>
        <div className="reveal text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-12 bg-accent/40" />
            <span className="text-sm font-medium text-accent uppercase tracking-widest">
              Connect
            </span>
            <span className="h-px w-12 bg-accent/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Get In Touch
          </h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            Have questions? We'd love to hear from you.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="reveal-left space-y-6">
              {contactInfo.map((info, i) => (
                <div
                  key={info.label}
                  className="glass-card rounded-xl p-4 flex items-start gap-4"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-accent-light shrink-0">
                    <info.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      {info.label}
                    </p>
                    <p className="text-base font-semibold text-gray-900">
                      {info.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <form
              onSubmit={handleSubmit}
              className="reveal-right glass rounded-2xl p-6 sm:p-8 space-y-4"
            >
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 hover:border-gray-300 text-sm transition-all duration-200 outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent bg-white/80"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 hover:border-gray-300 text-sm transition-all duration-200 outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent bg-white/80"
              />
              <textarea
                rows={4}
                placeholder="Your Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 hover:border-gray-300 text-sm transition-all duration-200 outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent bg-white/80 resize-none"
              />
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 text-base font-semibold text-white bg-accent hover:bg-accent-dark rounded-xl transition-all duration-200 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}