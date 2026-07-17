import Image from "next/image";
export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div>
          <p className="text-yellow-500 font-semibold uppercase tracking-widest">
            About Us
          </p>

          <h2 className="text-4xl font-bold text-blue-950 mt-4">
            Omega Fire Ministries Porto-Novo RB
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
              Omega Fire Ministries Porto-Novo RB is a branch of the worldwide
              Omega Fire Ministries, committed to raising men and women of fire
              through the undiluted Word of God, fervent prayer, passionate worship,
              and the demonstration of God's power. We warmly welcome everyone
              seeking a deeper relationship with Jesus Christ and a life transformed
              by the presence of the Holy Spirit.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-6">

            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="font-bold text-blue-900">Our Vision</h3>
              <p className="text-gray-700 leading-8">
             Omega Fire Ministries is a non-denominational worldwide ministry with its headquarters in Auchi, Edo State, Nigeria.
             <br />
             <br />
            The Almighty God used His chosen servant, Apostle Johnson Suleman, to birth this vision in February 2004.
             </p>
            </div>

            <div className="bg-yellow-50 rounded-xl p-6">
              <h3 className="font-bold text-yellow-700">Our Mission</h3>
              <p className="text-gray-700 leading-8">
            To wipe out tears, restore people to their God-given destinies through the revelation of God's Word, the manifestation of His power, and the reality of the Holy Spirit.
              </p>
            </div>

          </div>
        </div>

        <div>
          <Image
          src="/backgrounds/hero.jpg"
          alt="Church Worship"
          width={600}
          height={500}
          className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
         />
        </div>

      </div>
    </section>
  );
}