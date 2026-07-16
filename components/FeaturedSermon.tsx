import { FaYoutube } from "react-icons/fa";

export default function FeaturedSermon() {
  return (
    <section className="py-24 bg-slate-100 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[6px] text-yellow-500 font-bold">
            Featured Message
          </p>

          <h2 className="text-5xl font-bold text-blue-950 mt-4">
            Experience God's Power
          </h2>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Watch our latest message and be blessed by powerful worship,
            prayer, and the life-changing Word of God.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* YouTube Video */}
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/live_stream?channel=UCYOURCHANNELID"
              title="Omega Fire Ministries Porto-Novo RB"
              allowFullScreen
            />
          </div>

          {/* Content */}
          <div>

            <div className="inline-flex items-center gap-3 bg-red-600 text-white px-5 py-2 rounded-full">
              <FaYoutube />
              Latest Message
            </div>

            <h3 className="text-4xl font-bold text-blue-950 mt-8">
              Sunday Celebration Service
            </h3>

            <p className="mt-6 text-gray-600 leading-8">
              Join us as we worship together, receive God's Word,
              experience miracles, healing, restoration, and the power
              of the Holy Spirit.
            </p>

            <a
              href="https://www.youtube.com/@esangbedoelliot7449"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-10 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold transition"
            >
              ▶ Visit Our YouTube Channel
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}