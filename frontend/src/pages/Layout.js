import { Outlet, Link, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
    // const location =useLocation();

    return (
        <>
            <Header />
            <main className="mb-10">
            <Outlet />


            </main>
            <Footer />

        </>
    )
};

export default Layout;
