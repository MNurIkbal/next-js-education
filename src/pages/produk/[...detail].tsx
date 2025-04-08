import { useRouter } from "next/router";

const Produk = () => {
    const { query } = useRouter();
    if (query.detail && query.detail.length > 1) {
        console.log(query.detail[2]);
    }

    return (
        <>
            {/* <p>Data : {query.detail}</p> */}
        </>
    )
}

export default Produk;