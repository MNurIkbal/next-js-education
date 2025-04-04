import Navbar from "@/layout/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Navbar/>
      <h1>Halaman Home</h1>
      <section className="home-section">
        <div className="home-content">
          <h1>Selamat Datang di Dunia Breyy 🌍</h1>
          <p>Temukan perjalanan dan karya Breyy dalam dunia teknologi, desain, dan kreativitas. Setiap proyek mencerminkan semangat belajar dan keinginan untuk terus berkembang.</p>
          <button className="cta-button">Lihat Proyek</button>
        </div>
        <div className="home-image">
          <Image 
            src="https://images.unsplash.com/photo-1741936428950-3f66f0a69320?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MXx8fGVufDB8fHx8fA%3D%3D" 
            alt="Gambar Ilustrasi"
            width={600}
            height={400}
            priority
          />
        </div>
      </section>
    </>
  );
}