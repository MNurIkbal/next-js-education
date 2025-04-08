import Layout from "@/layout/layout";
import Link from "next/link";

const Login = () => {
 
    return (

        <Layout>
        <h1>Login</h1>
        <button>Login</button>

        <Link href='/auth/register' style={{fontSize:'40px'}}>Register</Link>
        </Layout>
    )
}

export default Login;