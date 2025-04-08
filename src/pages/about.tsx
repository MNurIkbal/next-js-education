import Layout from "@/layout/layout";
import Image from "next/image";

export default function About() {
    return (
        <>
             <Layout>
            <h1>About</h1>
            <Image src="/img/1.jpg" width={100} height={100} alt="ok" />
        </Layout>
        </>
    )
}