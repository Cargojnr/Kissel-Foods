import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from "lucide-react";
import { restaurant } from "@/data/restaurant";

const socialLinks = [
  { icon: Instagram, href: restaurant.social.instagram, label: "Instagram" },
  { icon: Facebook, href: restaurant.social.facebook, label: "Facebook" },
  { icon: Twitter, href: restaurant.social.twitter, label: "Twitter" },
];

const footerLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Gallery", path: "/gallery" },
  { name: "Book Online", path: "/reservation" },
];

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border/50">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <div className="flex flex-col">
                <span className="text-3xl font-display font-semibold text-foreground">
                  {restaurant.name.split(" ")[0]}
                </span>
                <span className="text-xs tracking-[0.4em] uppercase text-primary font-body">
                  {restaurant.name.split(" ")[1]}
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
              {restaurant.tagline}. Where culinary artistry meets timeless elegance.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 flex items-center justify-center border border-border/50 text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-body font-medium tracking-widest uppercase text-foreground mb-6">
              Navigation
            </h4>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 font-body text-sm link-underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-body font-medium tracking-widest uppercase text-foreground mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground font-body text-sm">
                  {restaurant.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href={`tel:${restaurant.phone}`}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 font-body text-sm"
                >
                  {restaurant.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href={`mailto:${restaurant.email}`}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 font-body text-sm"
                >
                  {restaurant.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-sm font-body font-medium tracking-widest uppercase text-foreground mb-6">
              Hours
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-foreground font-body text-sm font-medium">
                    Mon - Fri
                  </p>
                  <p className="text-muted-foreground font-body text-sm">
                    {restaurant.hours.weekdays}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-foreground font-body text-sm font-medium">
                    Sat - Sun
                  </p>
                  <p className="text-muted-foreground font-body text-sm">
                    {restaurant.hours.weekends}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground font-body text-xs">
              © {new Date().getFullYear()} {restaurant.name}. All rights reserved.
            </p>
            <p className="text-muted-foreground font-body text-xs">
              Crafted with excellence
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
