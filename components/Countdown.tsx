"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const targetDate = new Date("2026-07-19T08:00:00");

  const calculateTimeLeft = () => {
    const difference = targetDate.getTime() - new Date().getTime();

    if (difference <= 0) {
      return null;
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };
const [mounted, setMounted] = useState(false);
const [timeLeft, setTimeLeft] = useState<ReturnType<typeof calculateTimeLeft>>(null);

  useEffect(() => {
  setMounted(true);

  setTimeLeft(calculateTimeLeft());

  const timer = setInterval(() => {
    setTimeLeft(calculateTimeLeft());
  }, 1000);

  return () => clearInterval(timer);
}, []);
if (!mounted) {
  return (
    <section className="bg-blue-950 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="uppercase tracking-[6px] text-yellow-400 font-bold">
          Next Service
        </p>

        <h2 className="text-5xl font-extrabold text-white mt-5">
          Sunday Celebration Service
        </h2>

        <p className="text-gray-300 mt-5">
          Loading countdown...
        </p>
      </div>
    </section>
  );
}
  return (
    <section className="bg-blue-950 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <p className="uppercase tracking-[6px] text-yellow-400 font-bold">
          Next Service
        </p>

        <h2 className="text-5xl font-extrabold text-white mt-5">
          Sunday Celebration Service
        </h2>

        <p className="text-gray-300 mt-5 text-lg">
          Join us for worship, prayer and the Word of God.
        </p>

        {timeLeft ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">

            <TimeBox value={timeLeft.days} label="Days" />
            <TimeBox value={timeLeft.hours} label="Hours" />
            <TimeBox value={timeLeft.minutes} label="Minutes" />
            <TimeBox value={timeLeft.seconds} label="Seconds" />

          </div>
        ) : (
          <div className="mt-12">
            <h3 className="text-4xl text-red-500 font-bold animate-pulse">
              🔴 WE ARE LIVE NOW
            </h3>

            <a
              href="https://www.youtube.com/@esangbedoelliot7449"
              target="_blank"
              className="inline-block mt-8 bg-red-600 hover:bg-red-700 px-10 py-4 rounded-full text-white font-bold transition"
            >
              Watch Live
            </a>
          </div>
        )}

      </div>
    </section>
  );
}

function TimeBox({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  return (
    <div className="bg-white rounded-3xl shadow-2xl py-10">
      <h3 className="text-5xl font-extrabold text-blue-900">
        {String(value).padStart(2, "0")}
      </h3>

      <p className="mt-4 uppercase tracking-widest text-gray-500 font-semibold">
        {label}
      </p>
    </div>
  );
}