import "aos/dist/aos.css";
import type { Metadata } from "next";
import "./globals.css";

import AOSProvider from "@/components/AOSProvider";
import Preloader from "@/components/Preloader";

export const metadata: Metadata = {
  title: "Omega Fire Ministries Porto-Novo RB | Raising Men and Women of Fire",
  description:
    "Official website of Omega Fire Ministries Porto-Novo RB. Join us for Sunday Celebration Service, Tuesday Bible Study, Friday Solution Service, live streaming, prayer requests, and upcoming events.",

  keywords: [
    "Omega Fire Ministries",
    "Omega Fire Ministries Porto-Novo",
    "Church in Porto-Novo",
    "Pentecostal Church Benin",
    "Christian Church Porto-Novo",
    "Sunday Celebration Service",
    "Bible Study",
    "Prayer Ministry",
    "Apostle Johnson Suleman",
    "Omega Fire Ministries Benin Republic",
  ],

  authors: [
    {
      name: "Omega Fire Ministries Porto-Novo RB",
    },
  ],

  openGraph: {
    title: "Omega Fire Ministries Porto-Novo RB",
    description:
      "Experience the presence of God through powerful worship, prayer, and the Word.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AOSProvider />
        <Preloader>{children}</Preloader>
      </body>
    </html>
  );
}