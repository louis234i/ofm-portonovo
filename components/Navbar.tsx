"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-blue-950/95 shadow-xl backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <div>
          <h1 className="text-white text-2xl font-bold">
            Omega Fire Ministries
          </h1>
          <p className="text-yellow-400 text-sm">
            Porto-Novo RB
          </p>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-white font-medium">
          <li><a href="#home" className="hover:text-yellow-400 transition">Home</a></li>
          <li><a href="#about" className="hover:text-yellow-400 transition">About</a></li>
          <li><a href="#pastors" className="hover:text-yellow-400 transition">Pastors</a></li>
          <li><a href="#gallery" className="hover:text-yellow-400 transition">Gallery</a></li>
          <li><a href="#events" className="hover:text-yellow-400 transition">Events</a></li>
          <li><a href="#contact" className="hover:text-yellow-400 transition">Contact</a></li>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-blue-950/95 backdrop-blur-md text-white px-6 py-6">
          <div className="flex flex-col gap-5 text-lg">
            <a href="#home" onClick={() => setOpen(false)}>Home</a>
            <a href="#about" onClick={() => setOpen(false)}>About</a>
            <a href="#pastors" onClick={() => setOpen(false)}>Pastors</a>
            <a href="#gallery" onClick={() => setOpen(false)}>Gallery</a>
            <a href="#events" onClick={() => setOpen(false)}>Events</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}