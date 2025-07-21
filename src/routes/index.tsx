import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import HomePage from "../pages/HomePage"
import TestPage from "../pages/TestPage"
import TestResult from "../pages/TestResult"
import Login from "../pages/Login/index"
import AboutUs from "../pages/AboutUs/index";
import ContactUs from "../pages/ContactUs/index";
import Blogs from "../pages/Blogs/index";
import BlogDetail from "../pages/BlogDetail/index";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<PrivateRoute />}>
                <Route path="/" index element={<HomePage />} />
                <Route path="/test" element={<TestPage />} />
                <Route path="/result" element={<TestResult />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/blog-detail/:id" element={<BlogDetail />} />
            </Route>

            <Route path="/login" element={<Login />} />
        </Routes>
    );
};


const Index = () => {
    return (
        <BrowserRouter basename="/">
            <AppRoutes />
        </BrowserRouter>
    );
};

export default Index;
