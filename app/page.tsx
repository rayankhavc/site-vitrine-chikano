import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import Menu from "@/components/sections/Menu";
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
        <Menu />
        <Reviews />
        <Hours />
        <Location />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
