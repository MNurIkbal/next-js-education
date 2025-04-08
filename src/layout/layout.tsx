import Navbar from "@/components/navbar"
import React from "react";

type TIpeData = {
    children: React.ReactNode;
}

const Layout = (props: TIpeData) => {
    const { children } = props;
    return (
        <>
            <Navbar />
            {children}
        </>
    );
}

export default Layout;