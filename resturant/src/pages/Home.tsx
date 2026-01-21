import HeroSlider from "@/components/resturant/HeroSlider";
import FeaturesSection from "@/components/resturant/FeaturesSection";
import GalleryCarousel from "@/components/resturant/GalleryCarousel";
import TestimonialsSection from "@/components/resturant/TestimonialsSection";
import CTASection from "@/components/resturant/CTASection";

export default function Home() {
  return (
    <main className="bg-background">
      <HeroSlider />
      <FeaturesSection />
      <GalleryCarousel />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
