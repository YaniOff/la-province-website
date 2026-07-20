import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { SignatureExperience } from "@/components/sections/signature-experience";
import { FeaturedDishes } from "@/components/sections/featured-dishes";
import { MenuSection } from "@/components/sections/menu";
import { Gallery } from "@/components/sections/gallery";
import { Testimonials } from "@/components/sections/testimonials";
import { ReservationCta } from "@/components/sections/reservation-cta";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <SignatureExperience />
        <FeaturedDishes />
        <MenuSection />
        <Gallery />
        <Testimonials />
        <ReservationCta />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
