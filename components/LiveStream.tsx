export default function LiveStream() {
  return (
    <section
      id="live"
      className="py-24 bg-black text-white px-6"
    >
      <div className="max-w-7xl mx-auto text-center">

        <p className="text-red-500 uppercase font-bold tracking-widest">
          🔴 LIVE WORSHIP
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mt-3">
          Worship With Us Online
        </h2>

        <p className="max-w-3xl mx-auto mt-6 text-gray-300 text-lg">
          Join our live services from anywhere in the world.
          Experience powerful worship, inspiring messages, prayer,
          and the presence of God live every week.
        </p>

        <div className="mt-10">
          <a
            href="https://www.youtube.com/@esangbedoelliot7449"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full transition"
          >
            ▶ Watch Live on YouTube
          </a>
        </div>

        <div className="mt-16 aspect-video rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/live_stream?channel=UC8m3_YOUR_CHANNEL_ID"
            title="Omega Fire Ministries Live"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

      </div>
    </section>
  );
}