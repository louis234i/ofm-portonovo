import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import Pastors from "@/components/Pastors";
import Services from "@/components/Services";
import LiveStream from "@/components/LiveStream";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Welcome />
      <Pastors />
      <Services />
      <LiveStream />
    </>
  );
}