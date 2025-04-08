import Layout from "@/layout/layout";
import Link from "next/link";

const Register = () => {
    return (
        <Layout>
        <h1>Register</h1>
        <Link href='/auth/login'>Login</Link>
        </Layout>
    )
}

export default Register;