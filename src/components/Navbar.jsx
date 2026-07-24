import { useState, useEffect } from "react";
import { Menu, X, Car } from "lucide-react";
import { useLocation, Link, useNavigate } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/", isRoute: true },
  { label: "Cars", href: "/cars", isRoute: true },
  { label: "How It Works", href: "/how-it-works", isRoute: true },
  { label: "About Us", href: "/about", isRoute: true },
  { label: "Contact", href: "/contact", isRoute: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleRouteClick = (href) => {
    setMobileOpen(false);
    if (href === "/") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isActive = (link) => location.pathname === link.href;

  const handleBookNow = () => {
    if (isHome) {
      document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/booking");
    }
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-xl font-bold tracking-tight"
          >
            <Car className="w-6 h-6 text-accent" />
            <span>DriveEase</span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = isActive(link);
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => handleRouteClick(link.href)}
                  className="relative px-4 py-2 text-sm font-medium transition-colors duration-200 group"
                >
                  <span className={`transition-colors duration-200 ${
                    active ? "text-accent font-semibold" : "text-gray-700 hover:text-gray-900"
                  }`}>
                    {link.label}
                  </span>
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-accent transition-all duration-300 ${
                    active ? "w-4/5" : "w-0 group-hover:w-4/5"
                  }`} />
                </Link>
              );
            })}
            <button
              onClick={handleBookNow}
              className="ml-4 px-5 py-2.5 text-sm font-semibold text-white bg-accent hover:bg-accent-dark rounded-lg transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
            >
              Book Now
            </button>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden border-t border-gray-100 bg-white overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 space-y-2">
          {navLinks.map((link) => {
            const active = isActive(link);
            return (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => handleRouteClick(link.href)}
                className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  active ? "bg-accent/10 text-accent font-semibold" : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <button
            onClick={handleBookNow}
            className="w-full px-4 py-2.5 text-sm font-semibold text-white bg-accent hover:bg-accent-dark rounded-lg text-center transition-colors cursor-pointer"
          >
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
}