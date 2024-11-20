import { Outlet, Link, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
    // const location =useLocation();

    return (
        <>
            <Header />
            <main className="p-4 sm:ml-64">
                <Outlet />
            </main>





            <Footer />

        </>
    )
};

export default Layout;
