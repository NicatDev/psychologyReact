import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useUser } from "@/context/UserContext";
import logo from "../../shared/media/imgs/logo.png";
import ProfileDropdown from "../../shared/components/ProfileDropDown";
import { toast, ToastContainer } from "react-toastify";
const Header = () => {
  const { user, logout } = useUser();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const menu = [
    { title: "Haqqımızda", link: "/about-us" },
    { title: "Bloqlar", link: "/blogs" },
    { title: "Planlar", link: "/test-packages" },
    { title: "Əlaqə", link: "/contact-us" },
    { title: "Testə başla!", link: "/test", isButton: true },
  ];
  console.log(user, "");
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="bg-white sticky top-0 z-40 shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        <div>
          <Link to="/">
            <img className="h-[70px] md:h-[90px]" src={logo} alt="logo" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 text-lg">
          {menu.map((item, index) => {
            const handleClick = (e:any) => {
              if (item.title === "Testə başla!" && !user) {
                e.preventDefault(); // Linkin navigasiyasını dayandırır
                toast.error("Zəhmət olmasa, əvvəlcə daxil olun"); // toast mesajı göstərir
              }
             if (item.title === "Testə başla!" && user && user?.active_test_count==0) {
                e.preventDefault(); // Linkin navigasiyasını dayandırır
                toast.error("Test etmək üçün hesabınızda aktiv test paketi olmalıdır"); // toast mesajı göstərir
              }
            };

            return (
              <Link
                key={index}
                to={item.link}
                onClick={handleClick}
                className={
                  item.isButton
                    ? "font-medium border-2 cursor-pointer border-indigo-600 text-indigo-600 py-2 px-6 rounded-lg shadow-md bg-white animate-pulse hover:bg-indigo-600 hover:text-white hover:shadow-xl transform transition duration-300 ease-in-out"
                    : "font-medium flex cursor-pointer gap-2 items-center hover:text-primary-blue duration-300"
                }
              >
                {item.title}
              </Link>
            );
          })}
          {!user ? (
            <Link
              className="font-medium bg-indigo-600 text-white py-2 px-10 rounded-md"
              to="/login"
            >
              Daxil ol
            </Link>
          ) : (
            <ProfileDropdown user={user} onLogout={handleLogout} />
          )}
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-md border-t border-gray-200">
          <div className="flex flex-col gap-4 px-6 py-6 text-lg">
            {menu.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className={
                  item.isButton
                    ? "font-medium border-2 border-indigo-600 text-indigo-600 py-2 px-6 rounded-lg shadow-md hover:bg-indigo-600 hover:text-white hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out text-center"
                    : "font-medium hover:text-primary-blue duration-300"
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            {!user ? (
              <Link
                className="font-medium bg-indigo-600 text-white py-2 px-10 text-center rounded-md"
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
              >
                Daxil ol
              </Link>
            ) : (
              <ProfileDropdown user={user} onLogout={handleLogout} />
            )}
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default Header;
