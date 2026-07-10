export default function Welcome() {
  return (
    <section
      id="about"
      className="bg-white text-gray-800 py-24 px-6"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>
          <p className="text-yellow-500 uppercase font-bold tracking-widest">
            Welcome
          </p>

          <h2 className="text-4xl font-bold mt-3">
            A Place Where Lives Are Changed
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Welcome to Omega Fire Ministries Porto-Novo RB.
            We are a Bible-believing church committed to raising men and women
            of fire through God's Word, prayer, worship, and the demonstration
            of the Holy Spirit.
          </p>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            Whether you're visiting for the first time or looking for a church
            family, we warmly welcome you. We believe God has something
            extraordinary prepared for your life.
          </p>

          <button className="mt-8 bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-lg transition">
            Learn More
          </button>
        </div>

        {/* Right Side */}
        <div className="bg-blue-900 rounded-3xl p-10 text-white shadow-2xl">
          <h3 className="text-3xl font-bold text-yellow-400">
            Our Mission
          </h3>

          <p className="mt-6 leading-8">
            To transform lives through the preaching of God's Word,
            deliverance, prayer, and the manifestation of God's power.
          </p>

          <div className="mt-8 border-t border-blue-700 pt-6">
            <h4 className="font-bold text-xl">
              Weekly Services
            </h4>

            <ul className="mt-4 space-y-3">
              <li>Sunday Celebration – 8:00 AM</li>
              <li>Tuesday Bible Study – 6:00 PM</li>
              <li>Friday Solution Service – 6:00 PM</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}