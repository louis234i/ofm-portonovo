export default function Events() {
  const events = [
    {
      title: "Sunday Celebration Service",
      date: "Every Sunday",
      time: "8:00 AM",
      color: "bg-blue-600",
    },
    {
      title: "Tuesday Bible Study",
      date: "Every Tuesday",
      time: "6:00 PM",
      color: "bg-yellow-500",
    },
    {
      title: "Friday Solution Service",
      date: "Every Friday",
      time: "6:00 PM",
      color: "bg-purple-600",
    },
  ];

  return (
    <section id="events" data-aos="fade-left" className="py-24 bg-slate-100 px-6">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="uppercase tracking-widest text-yellow-500 font-semibold">
            Join Us
          </p>

          <h2 className="text-5xl font-bold text-blue-950 mt-4">
            Upcoming Services
          </h2>

          <p className="text-gray-600 mt-5">
            We would love to worship with you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:-translate-y-2 transition"
            >
              <div className={`${event.color} h-3`} />

              <div className="p-8">

                <h3 className="text-2xl font-bold text-blue-950">
                  {event.title}
                </h3>

                <p className="text-gray-500 mt-5">
                  📅 {event.date}
                </p>

                <p className="text-yellow-600 text-2xl font-bold mt-3">
                  🕒 {event.time}
                </p>

                <button className="mt-8 w-full bg-blue-900 text-white py-3 rounded-full hover:bg-blue-700 transition">
                  Plan My Visit
                </button>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}