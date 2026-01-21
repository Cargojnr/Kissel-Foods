import { motion } from "framer-motion";
import { Phone, Calendar } from "lucide-react";
import { restaurant } from "@/data/restaurant";

export default function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      <div className="relative max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="overline mb-6">Make a Reservation</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium text-foreground mb-6">
            Ready for an
            <br />
            <span className="text-gradient-gold">Unforgettable</span> Evening?
          </h2>
          <p className="text-elegant max-w-xl mx-auto mb-12">
            Reserve your table today and let us create a dining experience
            that will linger in your memory forever.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href={`tel:${restaurant.phone}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-gold inline-flex items-center justify-center gap-3"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-luxury group"
            >
              <span className="inline-flex items-center gap-3">
                <Calendar className="w-5 h-5" />
                Book Online
              </span>
            </motion.button>
          </div>

          <p className="text-muted-foreground text-sm font-body mt-8">
            Or email us at{" "}
            <a
              href={`mailto:${restaurant.email}`}
              className="text-primary hover:underline"
            >
              {restaurant.email}
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
