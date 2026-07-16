import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import YouTubeLive from "@/components/YouTubeLive";
import FeaturedSermon from "@/components/FeaturedSermon";
import PrayerRequest from "@/components/PrayerRequest";
import About from "@/components/About";
import Welcome from "@/components/Welcome";
import Pastors from "@/components/Pastors";
import Gallery from "@/components/Gallery";
import Events from "@/components/Events";
import Services from "@/components/Services";
import LiveStream from "@/components/LiveStream";
import LatestSermons from "@/components/LatestSermons";
import Map from "@/components/Map";
import Contact from "@/components/Contact";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Countdown />
      <YouTubeLive />
      <FeaturedSermon />
      <PrayerRequest />
      <About />
      <Welcome />
      <Pastors />
      <Gallery />
      <Events />
      <Services />
      <LiveStream />
      <LatestSermons />
      <Map />
      <Contact />
      <WhatsAppButton />
      <Footer />
    </>
  );
}