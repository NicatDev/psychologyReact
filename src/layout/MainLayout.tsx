import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "../shared/components/ScrollToTop"

const MainLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
            <ScrollToTop />
        </>
    )
}

export default MainLayout
