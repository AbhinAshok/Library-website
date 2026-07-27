import { Outlet } from "react-router-dom";

import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

export default function MainLayout() {

    return (

        <>

            <Navbar />
            <main className="pt-20 lg:pt-24">
                <Outlet />
            </main>

            <Footer />

        </>

    )

}