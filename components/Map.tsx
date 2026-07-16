export default function Map() {
  return (
    <section id="location" className="py-24 bg-slate-100 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <p className="uppercase tracking-widest text-yellow-500 font-semibold">
            Find Us
          </p>

          <h2 className="text-5xl font-bold text-blue-950 mt-4">
            Visit Omega Fire Ministries
          </h2>

          <p className="text-gray-600 mt-5">
            We look forward to welcoming you to worship with us.
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-2xl">

          <iframe
            src="https://www.google.com/maps?q=Agata%20Market%20Porto-Novo%20Benin&output=embed"
            width="100%"
            height="500"
            loading="lazy"
            allowFullScreen
          ></iframe>

        </div>

      </div>
    </section>
  );
}