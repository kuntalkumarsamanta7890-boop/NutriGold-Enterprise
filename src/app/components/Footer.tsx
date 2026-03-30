import { Link } from "react-router";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-amber-900 to-amber-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-amber-900 font-bold">PN</span>
              </div>
              <h3 className="font-bold text-lg">NutriGold Enterprise</h3>
            </div>
            <p className="text-amber-100 text-sm mb-4">
              Leading peanut processing unit in West Bengal, delivering premium quality
              sorted and graded peanuts with advanced technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-amber-100 hover:text-white text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-amber-100 hover:text-white text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-amber-100 hover:text-white text-sm transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-amber-100 hover:text-white text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold mb-4">Our Products</h4>
            <ul className="space-y-2 text-amber-100 text-sm">
              <li>Raw Peanuts</li>
              <li>Sorted Peanuts</li>
              <li>Graded Peanuts (Bold)</li>
              <li>Graded Peanuts (Java)</li>
              <li>Custom Bulk Orders</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-amber-100 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>West Bengal, India</span>
              </li>
              <li className="flex items-center gap-2 text-amber-100 text-sm">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+918250080395" className="hover:text-white transition-colors">+91 8250080395</a>
              </li>
              <li className="flex items-center gap-2 text-amber-100 text-sm">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:klkrsa1@gmail.com" className="hover:text-white transition-colors">klkrsa1@gmail.com</a>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" className="w-8 h-8 bg-amber-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-amber-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-amber-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-8 pt-8 text-center text-amber-100 text-sm">
          <p>&copy; 2026 NutriGold Enterprise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
