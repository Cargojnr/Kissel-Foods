import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const categories = ["All", "Cuisine", "Ambiance", "Experience"];

const galleryImages = [
  { src: gallery1, alt: "Exquisite seafood presentation", category: "Cuisine" },
  { src: gallery2, alt: "Elegant bar atmosphere", category: "Ambiance" },
  { src: gallery3, alt: "Artisan dessert creation", category: "Cuisine" },
  { src: gallery4, alt: "Private dining experience", category: "Experience" },
  { src: gallery5, alt: "Culinary artistry in motion", category: "Experience" },
  { src: gallery6, alt: "Premium wine collection", category: "Ambiance" },
  { src: hero1, alt: "Grand dining room", category: "Ambiance" },
  { src: hero2, alt: "Signature dish", category: "Cuisine" },
  { src: hero3, alt: "Romantic celebration", category: "Experience" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <main className="bg-background pt-24">
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <p className="overline mb-6">Visual Journey</p>
            <h1 className="text-5xl md:text-7xl font-display font-medium text-foreground mb-6">
              Our <span className="text-gradient-gold">Gallery</span>
            </h1>
            <p className="text-elegant max-w-2xl mx-auto">
              A visual celebration of culinary artistry, elegant spaces, and
              unforgettable moments shared at our tables.
            </p>
            <div className="divider-gold mt-10" />
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
             <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 text-sm font-body font-medium tracking-widest uppercase transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-20 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="relative group cursor-pointer aspect-square overflow-hidden"
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-primary text-xs font-body font-medium tracking-widest uppercase mb-2">
                      
                    </p>
                    <p className="text-foreground font-elegant text-lg">
                      
                    </p>
                  </div>
                   {/* Overlay Content */}
                  <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-primary text-xs font-semibold uppercase tracking-wider">
                      {image.category}
                    </span>
                    <h3 className="text-xl font-bold text-foreground mt-1">
                      {image.alt}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm p-6"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute top-6 right-6 p-2 w-12 h-12 rounded-ful flex items-center justify-center  text-foreground/60 hover:text-foreground transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </motion.button>
             <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl w-full"
            >
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              src={selectedImage.src}
              alt="Gallery image"
              className="w-full h-auto max-w-full max-h-[85vh] object-contain rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            />
             <div className="text-center mt-6">
               <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                  {selectedImage.category}
                </span>
                <h3 className="text-2xl font-bold text-foreground mt-2">
                  {selectedImage.alt}
                </h3>
              </div>
          </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
