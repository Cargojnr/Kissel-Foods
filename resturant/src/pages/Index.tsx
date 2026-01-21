import Header from "@/components/hotel/Header";
import HeroSlideshow from "@/components/hotel/HeroSlideshow";
import RoomCards from "@/components/hotel/RoomCards";
import Experience from "@/components/hotel/Experience";
import GalleryCarousel from "@/components/hotel/GalleryCarousel";
import About from "@/components/hotel/About";
import CTA from "@/components/hotel/CTA";
import Footer from "@/components/hotel/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Header />
      <HeroSlideshow />
      <Experience />
      <RoomCards />
      <GalleryCarousel />
      <About />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
