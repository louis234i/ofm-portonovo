export default function Contact() {
  return (
    <section
      id="contact"
      data-aos="fade-up"
      className="py-24 bg-white px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="uppercase tracking-widest text-yellow-500 font-semibold">
            Contact Us
          </p>

          <h2 className="text-5xl font-bold text-blue-950 mt-4">
            We'd Love to Hear From You
          </h2>

          <p className="text-gray-600 mt-6">
            Visit us, call us, or send us a message anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-100 rounded-3xl p-8 shadow-lg text-center">
            <h3 className="text-2xl font-bold text-blue-900">
              📍 Address
            </h3>

            <p className="mt-6 text-gray-600 leading-7">
              Agata,
              Opposite Agata Market,
              Porto-Novo,
              Benin Republic
            </p>
          </div>

          <div className="bg-slate-100 rounded-3xl p-8 shadow-lg text-center">
            <h3 className="text-2xl font-bold text-blue-900">
              📞 Phone
            </h3>

            <p className="mt-6 text-gray-600">
              +229 98 67 90 39
            </p>
          </div>

          <div className="bg-slate-100 rounded-3xl p-8 shadow-lg text-center">
            <h3 className="text-2xl font-bold text-blue-900">
              ✉ Email
            </h3>

            <p className="mt-6 text-gray-600">
              info@ofmportonovo.org
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}