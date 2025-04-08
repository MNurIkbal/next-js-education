import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
    const disabled = ["/auth/login", "/auth/register"]; // Daftar halaman yang tidak ingin menampilkan menu
    const router = useRouter();

    return (
        <nav>
            <ul>
                <li>
                    <Link href='/' className="navigation">Home</Link>
                </li>
                <li>
                    <Link href='/about' className="navigation">About</Link>
                </li>
                <li>
                    <Link href='/services' className="navigation">Service</Link>
                </li>
                <li>
                    <Link href='/kontak' className="navigation">Kontak</Link>
                </li>
                
                {/* Kondisikan agar menu Login tidak muncul di halaman /auth/login dan /auth/register */}
                {!disabled.includes(router.pathname) && (
                    <li>
                        <Link href='/auth/login' className="navigation">Login</Link>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
