import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="title">My Website</div>
        <button className="menu-toggle" id="menuToggle">
          ☰
        </button>
        <div className="nav-links" id="navLinks">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/kontak">Contact</Link>
        </div>
      </nav>
    </>
  );
}
