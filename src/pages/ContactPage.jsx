import { useEffect, useState } from "react";
import { Phone, Mail, MapPin, Clock, Loader2, ArrowLeft, Send } from "lucide-react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
  { icon: Mail, label: "Email", value: "hello@driveease.com" },
  { icon: MapPin, label: "Location", value: "123 Main Street, City" },
  { icon: Clock, label: "Business Hours", value: "Mon - Sat: 8:00 AM - 8:00 PM" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20 lg:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-12 bg-accent/40" />
              <span className="text-sm font-medium text-accent uppercase tracking-widest">
                Connect
              </span>
              <span className="h-px w-12 bg-accent/40" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3">
              Get In Touch
            </h1>
            <p className="text-gray-600 max-w-xl mx-auto">
              Have questions about our cars or services? We'd love to hear from you. Send us a message and we'll respond promptly.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
            <div className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((info, i) => (
                  <div
                    key={info.label}
                    className="glass-card rounded-xl p-5 flex items-start gap-4"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-accent-light shrink-0">
                      <info.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">
                        {info.label}
                      </p>
                      <p className="text-sm font-semibold text-gray-900">
                        {info.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="text-base font-bold text-gray-900 mb-3">
                  Why Contact Us?
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                    Need help choosing the right vehicle for your trip?
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                    Questions about our rates, insurance, or rental policies?
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                    Want to modify or cancel an existing booking?
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                    Feedback or suggestions to help us serve you better?
                  </li>
                </ul>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-6 sm:p-8 space-y-5"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 hover:border-gray-300 text-sm transition-all duration-200 outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent bg-white/80"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 hover:border-gray-300 text-sm transition-all duration-200 outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent bg-white/80"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us how we can help..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 hover:border-gray-300 text-sm transition-all duration-200 outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent bg-white/80 resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 text-base font-semibold text-white bg-accent hover:bg-accent-dark rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}