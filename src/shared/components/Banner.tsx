import { useLocation } from "react-router-dom";

const Banner = () => {
  const { pathname } = useLocation();

  return (
    <div className="py-[60px] bg-[#0a4cb7]">
      <div className="container mx-auto px-4">
        <h1 className="text-white text-[40px] font-[600]">
          {pathname === "/about-us"
            ? "Haqqımızda"
            : pathname === "/contact-us"
            ? "Bizimlə əlaqə"
            : pathname === "/blogs"
            ? "Bloqlar"
            : pathname === "/test-packages"
            ? "Test paketlər"
            : null}
        </h1>
      </div>
    </div>
  );
};

export default Banner;
