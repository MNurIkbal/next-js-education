import { useRouter } from "next/router";

const DetailBlog = () => {
    const {query} = useRouter();
    
    return (
        <>
        <h1>oka</h1>
        <p>Data  : {query.detail}</p>
        </>
    )
}

export default DetailBlog;