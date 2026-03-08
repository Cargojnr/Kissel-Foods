import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Phone } from "lucide-react";
import { restaurant } from "@/data/restaurant";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import heroImage1 from "@/assets/hero-1.jpg";
import heroImage2 from "@/assets/hero-2.jpg";
import heroImage3 from "@/assets/hero-3.jpg";

const slides = [
  {
    image: heroImage1,
    title: "Fine Dining",
    subtitle: "Experience",
    description: "Where every meal becomes a cherished memory",
  },
  {
    image: heroImage2,
    title: "Culinary",
    subtitle: "Artistry",
    description: "Crafted with passion, served with elegance",
  },
  {
    image: heroImage3,
    title: "Moments",
    subtitle: "Worth Savoring",
    description: "Create unforgettable memories with every bite",
  },
];

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        loop
        speed={1500}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms] ease-out"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  transform: activeIndex === index ? "scale(1.1)" : "scale(1)",
                }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-hero" />

              {/* Content */}
              <div className="relative h-full flex items-center justify-center px-6">
                <AnimatePresence mode="wait">
                  {activeIndex === index && (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6 }}
                      className="text-center max-w-4xl"
                    >
                      {/* Overline */}
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="overline mb-6"
                      >
                        {restaurant.name}
                      </motion.p>

                      {/* Title */}
                      <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="heading-display text-foreground mb-2"
                      >
                        {slide.title}
                      </motion.h1>
                      <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="heading-display text-gradient-gold mb-8"
                      >
                        {slide.subtitle}
                      </motion.h1>

                      {/* Description */}
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="text-elegant max-w-xl mx-auto mb-12"
                      >
                        {slide.description}
                      </motion.p>

                      {/* CTA Buttons */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                      >
                        <motion.a
                          href={`tel:${restaurant.phone}`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="btn-gold inline-flex items-center justify-center gap-2"
                        >
                          <Phone className="w-4 h-4" />
                          <span>Reserve a Table</span>
                        </motion.a>
                        <motion.a
                        href='gallery'
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="btn-outline-gold"
                        >
                          Explore Menu
                        </motion.a>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination */}
      <div className="custom-pagination absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10" />

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToContent}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.5 },
          y: { duration: 2, repeat: Infinity },
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-foreground/60 hover:text-primary transition-colors duration-300"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.button>

      {/* Side Text */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <p
          className="text-xs tracking-[0.3em] text-foreground/40 font-body"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          SCROLL TO EXPLORE
        </p>
      </div>
    </section>
  );
}
