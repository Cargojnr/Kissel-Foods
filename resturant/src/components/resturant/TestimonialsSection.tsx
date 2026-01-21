import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/restaurant";

export default function TestimonialsSection() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="overline mb-4">Testimonials</p>
          <h2 className="heading-section text-foreground mb-4">
            What Our <span className="text-gradient-gold">Guests</span> Say
          </h2>
          <div className="divider-gold mt-6" />
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="card-luxury p-8 relative"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary/20 mb-6" />

              {/* Quote Text */}
              <blockquote className="text-foreground font-elegant text-xl leading-relaxed mb-8 italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="border-t border-border/50 pt-6">
                <p className="font-display text-lg text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-muted-foreground text-sm font-body">
                  {testimonial.role}
                </p>
              </div>

              {/* Decorative Line */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
