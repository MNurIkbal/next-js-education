import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/kontak">Servies</Link></li>
          <li><Link href="/services">Contact</Link></li>

        </ul>
    </nav>
    </>
  )
}