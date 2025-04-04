import Navbar from "@/layout/navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <section className="about-section">
        <h2>Hai, aku Breyy 👋</h2>
        <p>Aku adalah seorang pembelajar yang bersemangat di dunia teknologi, terutama dalam bidang pengembangan web dan blockchain. Mimpiku adalah membahagiakan orang tua dan menjadi developer profesional yang berdampak luas.</p>

        <div className="card-container">
          <div className="card">
            <h3>Skill</h3>
            <p>HTML, CSS, JavaScript, React, Bootstrap, dasar Node.js, dan dasar Solidity.</p>
          </div>
          <div className="card">
            <h3>Hobi</h3>
            <p>Ngoding, desain di Canva, eksperimen mesin, dan belajar serta self-development.</p>
          </div>
          <div className="card">
            <h3>Visi Hidup</h3>
            <p>Menguasai teknologi untuk menciptakan solusi nyata</p>
          </div>
        </div>
      </section>
    </>
  );
}