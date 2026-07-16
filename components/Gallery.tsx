"use client";

import { useState } from "react";
import Image from "next/image";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Gallery() {
  const images = [
    "/gallery/gallery1.jpg",
    "/gallery/gallery2.jpg",
    "/gallery/gallery3.jpg",
    "/gallery/gallery4.jpg",
  ];

  const [index, setIndex] = useState(-1);

  return (
    <section
      id="gallery"
      data-aos="fade-up"
      className="py-24 bg-white px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="uppercase tracking-widest text-yellow-500 font-semibold">
            Gallery
          </p>

          <h2 className="text-5xl font-bold text-blue-950 mt-4">
            Experience God's Presence
          </h2>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
            Take a glimpse into our worship services, prayer meetings,
            special programs, and the wonderful fellowship we share as a church family.
          </p>
        </div>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
          {images.map((image, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className="cursor-pointer overflow-hidden rounded-3xl shadow-xl group"
            >
              <Image
                src={image}
                alt={`Gallery ${i + 1}`}
                width={500}
                height={500}
                className="w-full h-72 object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        <Lightbox
          open={index >= 0}
          close={() => setIndex(-1)}
          index={index}
          slides={images.map((src) => ({ src }))}
        />

      </div>
    </section>
  );
}