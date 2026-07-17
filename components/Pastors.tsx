export default function Pastors() {
  return (
    <section
      id="pastors"
      data-aos="zoom-in"
      data-aos-duration="1200"
      data-aos-once="true" 
      className="py-24 px-6"
     >
      <div className="max-w-6xl mx-auto text-center">

        <p className="uppercase tracking-widest text-yellow-500 font-semibold">
          Our Leadership
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mt-4">
          Meet Our Pastors
        </h2>

        <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
          God has blessed Omega Fire Ministries with faithful servants who
          passionately preach the Gospel and shepherd His people.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mt-16">

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:scale-105 transition duration-300">
            <img
              src="/images/general-overseer.jpg"
              alt="Apostle Johnson Suleman and Rev. Dr. Lizzy Johnson Suleman"
              width={600}
              height={500}
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
/>

            <div className="p-8">
              <h3 className="text-3xl font-bold text-blue-950">
                Apostle Johnson Suleman and Rev. Dr. Lizzy Johnson Suleman
              </h3>

              <p className="text-yellow-500 font-semibold mt-2">
                General Overseer
              </p>

              <p className="text-gray-600 mt-5 leading-8">
                Founder and Senior Pastor of Omega Fire Ministries Worldwide,
                preaching salvation, healing, deliverance, and restoration
                across the nations.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:scale-105 transition duration-300">
            <img
              src="/images/pastor-elliot-esangbedo.jpg"
              alt="Pastor Elliot Esangbedo"
              className="w-full h-[700px] object-cover"
            />

            <div className="p-8">
              <h3 className="text-3xl font-bold text-blue-950">
                Pastor Elliot Esangbedo
              </h3>

              <p className="text-yellow-500 font-semibold mt-2">
                Resident Pastor
              </p>

              <p className="text-gray-600 mt-5 leading-8">
                Leading Omega Fire Ministries Porto-Novo RB with a passion for
                prayer, discipleship, worship, and spiritual transformation.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}