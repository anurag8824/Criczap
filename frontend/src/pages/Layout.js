import { Outlet, Link, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
    // const location =useLocation();

    return (
        <>
            <Header />
            <Outlet />
            <Footer />

        </>
    )
};

export default Layout;
