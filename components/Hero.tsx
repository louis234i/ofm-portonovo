"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Play, MapPin, ChevronDown } from "lucide-react";

export default function Hero() {
const backgrounds = [
  "/backgrounds/hero1.jpg",
  "/backgrounds/hero2.jpg",
  "/backgrounds/hero3.jpg",
  "/backgrounds/hero4.jpg",
];

const [currentImage, setCurrentImage] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImage((prev) => (prev + 1) % backgrounds.length);
  }, 6000);

  return () => clearInterval(interval);
}, []);
  return (
    <section
      id="home"
      data-aos="zoom-in"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
  {backgrounds.map((bg, index) => (
    <div
      key={bg}
      className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
        index === currentImage ? "opacity-100" : "opacity-0"
      }`}
      style={{
        backgroundImage: `url(${bg})`,
      }}
    />
  ))}
</div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-950/70" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6">
        <div className="inline-flex items-center gap-2 bg-red-600 px-4 py-2 rounded-full text-white text-sm font-bold mb-6 shadow-lg">
          <span className="animate-pulse">🔴</span>
          Worship With Us Live Every Week
        </div>

        <div className="flex justify-center mb-10 pt-6">
          <Image
            src="/images/logo.png"
            alt="Omega Fire Ministries Logo"
            width={200}
            height={200}
            className="object-contain"
            priority
          />
        </div>

        <p className="uppercase tracking-[6px] text-yellow-400 font-semibold">
          Welcome To
        </p>

        <h1 className="mt-4 text-5xl md:text-7xl font-extrabold text-white">
          Omega Fire Ministries
        </h1>

        <h2 className="mt-3 text-3xl md:text-4xl text-yellow-400">
          Porto-Novo RB
        </h2>

        <p className="mt-8 text-lg md:text-xl text-gray-200 leading-8">
          Raising men and women of fire through the Word of God, prayer,
          worship, and the demonstration of God's power.
        </p>

        <blockquote className="mt-8 italic text-yellow-300">
          "Where the Spirit of the Lord is, there is liberty." – 2 Corinthians
          3:17
        </blockquote>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">
          <a
            href="https://www.youtube.com/@esangbedoelliot7449"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-8 py-4 font-bold text-white hover:bg-red-700 transition duration-300 shadow-lg hover:scale-105"
          >
            <Play size={20} />
            Watch Live
          </a>

          <a
            href="#events"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white px-8 py-4 font-bold text-white hover:bg-white hover:text-blue-950 transition duration-300"
          >
            <MapPin size={20} />
            Plan Your Visit
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white">
        <ChevronDown size={40} />
      </div>
    </section>
  );
}