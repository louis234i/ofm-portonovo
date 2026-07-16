"use client";

import { useEffect, useState } from "react";

type VideoData = {
  live: boolean;
  videoId: string;
  title: string;
};

export default function YouTubeLive() {
  const [video, setVideo] = useState<VideoData | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadVideo() {
      try {
        const res = await fetch("/api/youtube");
        const data = await res.json();

        if (!res.ok || data.error) {
          setError(data.error || "Unable to load YouTube.");
          return;
        }

        setVideo(data);
      } catch {
        setError("Unable to connect to YouTube.");
      }
    }

    loadVideo();
  }, []);

  if (error) {
    return (
      <section className="py-24 bg-slate-100 text-center">
        <h2 className="text-3xl font-bold text-blue-950">
          YouTube
        </h2>

        <p className="mt-4 text-red-600">{error}</p>
      </section>
    );
  }

  if (!video) {
    return (
      <section className="py-24 bg-slate-100 text-center">
        <p className="text-lg text-gray-600">
          Loading latest broadcast...
        </p>
      </section>
    );
  }

  return (
    <section
      id="live"
      data-aos="fade-up"
      className="py-24 bg-slate-100 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="uppercase tracking-[6px] text-yellow-500 font-bold">
            Watch Online
          </p>

          <h2 className="text-5xl font-bold text-blue-950 mt-4">
            {video.live ? "🔴 We're Live Now" : "Latest Message"}
          </h2>

          <p className="mt-6 text-gray-600">{video.title}</p>
        </div>

        <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${video.videoId}`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}