"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-[9999] bg-blue-950 flex flex-col items-center justify-center">

        <div className="relative">

          <div className="absolute inset-0 rounded-full border-4 border-yellow-400 animate-ping"></div>

          <div className="rounded-full border-4 border-yellow-400 p-4 animate-spin">
            <Image
              src="/images/logo.png"
              alt="OFM Logo"
              width={130}
              height={130}
              className="rounded-full"
              priority
            />
          </div>

        </div>

        <h1 className="mt-10 text-3xl md:text-5xl font-extrabold text-white animate-pulse text-center">
          Omega Fire Ministries
        </h1>

        <p className="text-yellow-400 mt-3 tracking-widest text-lg">
          Porto-Novo RB
        </p>

      </div>
    );
  }

  return <>{children}</>;
}