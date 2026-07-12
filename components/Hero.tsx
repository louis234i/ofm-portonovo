export default function Hero() {
  return (
    <section
      style={{
        backgroundImage: "url('/backgrounds/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.5)",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "60px",
            fontWeight: "bold",
          }}
        >
          Omega Fire Ministries
        </h1>
      </div>
    </section>
  );
}