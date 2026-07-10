export default function Services() {
  const services = [
    {
      title: "Sunday Celebration Service",
      time: "8:00 AM",
      color: "bg-blue-900",
    },
    {
      title: "Tuesday Bible Study",
      time: "6:00 PM",
      color: "bg-yellow-500",
    },
    {
      title: "Friday Solution Service",
      time: "6:00 PM",
      color: "bg-purple-700",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-blue-950 text-white px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center">
          <p className="text-yellow-400 uppercase tracking-widest font-bold">
            Join Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Our Service Times
          </h2>

          <p className="mt-5 text-gray-300 max-w-2xl mx-auto">
            We invite you and your family to worship with us.
            Come expecting God's presence, power, healing and transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white text-gray-900 rounded-3xl shadow-xl overflow-hidden hover:scale-105 transition duration-300"
            >
              <div className={`${service.color} h-3`} />

              <div className="p-8 text-center">

                <h3 className="text-2xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-6 text-4xl font-extrabold text-blue-900">
                  {service.time}
                </p>

                <p className="mt-5 text-gray-600">
                  Agata, Opposite Agata Market,
                  Porto-Novo, Benin Republic
                </p>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}