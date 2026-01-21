import { motion } from "framer-motion";
import { Award, Users, Clock, Heart } from "lucide-react";
import { restaurant } from "@/data/restaurant";
import aboutChefImage from "@/assets/about-chef.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery2 from "@/assets/gallery-2.jpg";

const stats = [
  { icon: Award, value: "15+", label: "Years of Excellence" },
  { icon: Users, value: "50K+", label: "Happy Guests" },
  { icon: Clock, value: "7", label: "Days a Week" },
  { icon: Heart, value: "100%", label: "Made with Love" },
];

const values = [
  {
    title: "Our Philosophy",
    description:
      "We believe that dining is an art form. Every dish tells a story, every ingredient has a purpose, and every guest deserves an extraordinary experience.",
  },
  {
    title: "Our Commitment",
    description:
      "From sourcing the finest ingredients to training our staff in the art of hospitality, we are committed to exceeding your expectations at every turn.",
  },
  {
    title: "Our Vision",
    description:
      "To be the destination where life's most precious moments are celebrated, where every visit becomes a cherished memory.",
  },
];

export default function About() {
  return (
    <main className="bg-background pt-24">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <p className="overline mb-6">Our Story</p>
            <h1 className="text-5xl md:text-7xl font-display font-medium text-foreground mb-6">
              A Legacy of <span className="text-gradient-gold">Excellence</span>
            </h1>
            <p className="text-elegant max-w-2xl mx-auto">
              {restaurant.description}
            </p>
            <div className="divider-gold mt-10" />
          </motion.div>
        </div>
      </section>

      {/* Image & Story Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={aboutChefImage}
                  alt="Our Executive Chef"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
              {/* Decorative Frame */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border border-primary/30 -z-10" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="overline mb-4">The Beginning</p>
              <h2 className="heading-section text-foreground mb-8">
                Where Passion Meets <span className="text-gradient-gold">Perfection</span>
              </h2>
              <div className="space-y-6 text-muted-foreground font-body leading-relaxed">
                <p>
                  Founded in 2009, {restaurant.name} began as a dream shared by
                  two culinary artists who believed that dining should be
                  transformative. What started as a small kitchen with just ten
                  tables has evolved into one of the city's most celebrated
                  dining destinations.
                </p>
                <p>
                  Our journey has been guided by an unwavering commitment to
                  excellence. We source our ingredients from local farms,
                  craft our menus with seasonal inspiration, and train our
                  team to deliver service that anticipates every need.
                </p>
                <p>
                  Today, we continue to push boundaries while honoring the
                  traditions that made us who we are. Every dish that leaves
                  our kitchen is a testament to our passion, and every guest
                  who walks through our doors becomes part of our story.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-border/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <p className="text-4xl md:text-5xl font-display font-medium text-gradient-gold mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground font-body text-sm">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="overline mb-4">What Drives Us</p>
            <h2 className="heading-section text-foreground">
              Our <span className="text-gradient-gold">Values</span>
            </h2>
            <div className="divider-gold mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="card-luxury p-8"
              >
                <h3 className="text-xl font-display font-medium text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="aspect-video overflow-hidden"
            >
              <img
                src={gallery4}
                alt="Private dining"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="aspect-video overflow-hidden"
            >
              <img
                src={gallery2}
                alt="Bar atmosphere"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
