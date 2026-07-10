export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-950 via-blue-900 to-black text-white px-6">
      <div className="text-center max-w-4xl">
        <p className="text-yellow-400 uppercase tracking-[0.3em] font-semibold">
          Welcome To
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold mt-4">
          Omega Fire Ministries
        </h1>

        <h2 className="text-3xl md:text-4xl text-yellow-400 mt-3">
          Porto-Novo RB
        </h2>

        <p className="mt-8 text-lg text-gray-300 leading-8">
          Raising Men and Women of Fire through the Word of God,
          Prayer, Worship and the Demonstration of God's Power.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="https://www.youtube.com/@esangbedoelliot7449"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold hover:bg-yellow-400 transition"
          >
            ▶ Watch Live
          </a>

          <a
            href="#services"
            className="border-2 border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition"
          >
            Plan Your Visit
          </a>
        </div>
      </div>
    </section>
  );
}