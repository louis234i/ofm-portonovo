import { FaYoutube } from "react-icons/fa";

const sermons = [
  {
    title: "Sunday Celebration Service",
    link: "https://www.youtube.com/@esangbedoelliot7449",
  },
  {
    title: "Tuesday Bible Study",
    link: "https://www.youtube.com/@esangbedoelliot7449",
  },
  {
    title: "Friday Solution Service",
    link: "https://www.youtube.com/@esangbedoelliot7449",
  },
];

export default function LatestSermons() {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <p className="uppercase tracking-[6px] text-yellow-500 font-bold">
            Watch & Grow
          </p>

          <h2 className="text-5xl font-bold text-blue-950 mt-4">
            Latest Messages
          </h2>

          <p className="mt-6 text-gray-600">
            Be blessed by our recent services and Bible teachings.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {sermons.map((sermon) => (
            <div
              key={sermon.title}
              className="rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <div className="bg-red-600 h-48 flex items-center justify-center">
                <FaYoutube size={70} className="text-white" />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-blue-950">
                  {sermon.title}
                </h3>

                <a
                  href={sermon.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition"
                >
                  ▶ Watch on YouTube
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}