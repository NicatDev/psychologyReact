import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "../shared/components/ScrollToTop"
import Banner from "../shared/components/Banner";
import { useLocation } from "react-router-dom";

const MainLayout = () => {
    const { pathname } = useLocation();
    return (
        <>
            <Header />
            {(pathname !== "/test" && pathname !== "/profile" && pathname !== "/" && pathname !== "/result" && !pathname?.includes("/blog-detail")) && <Banner />}
            <Outlet />
            <Footer />
            <ScrollToTop />
        </>
        
    )
}

export default MainLayout
