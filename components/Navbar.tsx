export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-950/90 backdrop-blur-md shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div>
          <h1 className="text-white text-2xl font-bold">
            Omega Fire Ministries
          </h1>
          <p className="text-yellow-400 text-sm">
            Porto-Novo RB
          </p>
        </div>

        <ul className="hidden md:flex gap-8 text-white font-medium">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#pastors">Pastors</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}