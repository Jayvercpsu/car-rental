import { Car, Globe, MessageCircle, Camera, Play } from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Cars", href: "/#cars" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "About Us", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

const services = [
  "Daily Rentals",
  "Weekly Rentals",
  "Monthly Rentals",
  "Airport Transfers",
  "Corporate Rentals",
];

const socialLinks = [
  { icon: Globe, href: "#" },
  { icon: MessageCircle, href: "#" },
  { icon: Camera, href: "#" },
  { icon: Play, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-accent/60 blur-sm" />
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/20 to-transparent blur-sm" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xl font-bold text-white">
              <Car className="w-6 h-6 text-accent" />
              <span>DriveEase</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Your trusted partner for reliable and affordable car rentals. We
              make every journey smooth and memorable.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.icon}
                  href={social.href}
                  className="flex items-center justify-center w-9 h-9 rounded-lg bg-gray-800 hover:bg-accent transition-all duration-200 hover:-translate-y-0.5"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-0.5 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-gray-400">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact Info
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="hover:text-white transition-colors">+1 (555) 123-4567</li>
              <li className="hover:text-white transition-colors">hello@driveease.com</li>
              <li className="hover:text-white transition-colors">123 Main Street, City</li>
              <li className="hover:text-white transition-colors">Mon - Sat: 8 AM - 8 PM</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-sm text-gray-500 text-center">
            &copy; {new Date().getFullYear()} DriveEase. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}