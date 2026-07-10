import Image from "next/image";

export default function Pastors() {
  return (
    <section
      id="pastors"
      className="py-24 bg-gray-100 px-6"
    >
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-yellow-500 uppercase font-bold tracking-widest">
          Church Leadership
        </p>

        <h2 className="text-4xl font-bold mt-3 mb-12 text-gray-900">
          Meet Our Pastors
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <Image
         src="/images/apostle-johnson-suleman.jpg"
              alt="Apostle Johnson Suleman"
              width={500}
              height={600}
              className="w-full h-[500px] object-cover"
            />

            <div className="p-8">
              <h3 className="text-2xl font-bold text-blue-900">
                Apostle Johnson Suleman
              </h3>

              <p className="text-yellow-500 font-semibold mt-2">
                General Overseer
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <Image
             src="/images/pastor-elliot-esangbedo.jpg"
              alt="Pastor Elliot Esangbedo"
              width={500}
              height={600}
              className="w-full h-[500px] object-cover"
            />

            <div className="p-8">
              <h3 className="text-2xl font-bold text-blue-900">
                Pastor Elliot Esangbedo
              </h3>

              <p className="text-yellow-500 font-semibold mt-2">
                Resident Pastor
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}