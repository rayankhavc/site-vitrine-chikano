import Header from "@/components/Header";
import Marquee from "@/components/Marquee";
import Hero from "@/components/sections/Hero";
import Menu from "@/components/sections/Menu";
import Maison from "@/components/sections/Maison";
import Reviews from "@/components/sections/Reviews";
import Hours from "@/components/sections/Hours";
import Location from "@/components/sections/Location";
import Faq from "@/components/sections/Faq";
import Footer from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Menu />
        <Maison />
        <Reviews />
        <Hours />
        <Location />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
