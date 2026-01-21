import { motion } from "framer-motion";
import { Leaf, ChefHat, Wine, Sparkles } from "lucide-react";
import { restaurant } from "@/data/restaurant";

const features = [
  {
    icon: Leaf,
    title: "Farm to Table",
    description: "Fresh ingredients sourced daily from local organic farms",
  },
  {
    icon: ChefHat,
    title: "Master Chefs",
    description: "Award-winning culinary artists crafting each dish with passion",
  },
  {
    icon: Wine,
    title: "Private Dining",
    description: "Exclusive spaces designed for your most memorable occasions",
  },
  {
    icon: Sparkles,
    title: "Signature Recipes",
    description: "Unique creations found nowhere else in the world",
  },
];

export default function FeaturesSection() {
  return (
    <section className="section-padding bg-gradient-dark">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="overline mb-4">Why Choose Us</p>
          <h2 className="heading-section text-foreground mb-6">
            An Experience, Not Just <span className="text-gradient-gold">Food</span>
          </h2>
          <p className="text-elegant">
            {restaurant.description}
          </p>
          <div className="divider-gold mt-8" />
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="card-luxury p-8 text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-primary/30 group-hover:border-primary transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-medium text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
