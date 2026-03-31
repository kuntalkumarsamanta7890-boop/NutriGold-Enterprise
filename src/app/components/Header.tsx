import { Link, useLocation } from "react-router";
import { Menu, X, Phone } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/process", label: "Our Process" },
    { path: "/products", label: "Products" },
    { path: "/why-choose-us", label: "Why Choose Us" },
    { path: "/gallery", label: "Gallery" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  useEffect(() => {
    const currentRef = menuRef.current;
    const handleClickOutside = (event: MouseEvent) => {
      if (currentRef && !currentRef.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-700 to-amber-900 rounded-full flex items-center justify-center">
              <span className="text-white text-xl font-bold">NG</span>
            </div>
            <div>
              <h1 className="font-bold text-xl text-amber-900">NutriGold Enterprise</h1>
              <p className="text-xs text-amber-700">Quality You Can Trust</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? "text-amber-900 border-b-2 border-amber-900"
                    : "text-gray-700 hover:text-amber-900"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Contact Button - Desktop */}
          <a
            href="tel:+917908439041"
            className="hidden lg:flex items-center gap-2 bg-amber-900 text-white px-6 py-3 rounded-lg hover:bg-amber-800 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="font-medium">+91 7908439041</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-amber-900"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t" ref={menuRef}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-3 px-4 text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? "text-amber-900 bg-amber-50"
                    : "text-gray-700 hover:bg-amber-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+917908439041"
              className="flex items-center gap-2 bg-amber-900 text-white px-4 py-3 mt-4 rounded-lg"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">+91 79084 39041</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
