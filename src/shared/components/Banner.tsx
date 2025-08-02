import { useLocation } from "react-router-dom";

const Banner = () => {
  const { pathname } = useLocation();

  return (
    <div className="py-[60px] bg-indigo-600">
      <div className="container mx-auto">
        <h1 className="text-white text-[40px] font-[600]">{pathname === "/about-us" ? 'Haqqımızda' : pathname === "/contact-us" ? 'Bizimlə əlaqə' : pathname === "/blogs" ? 'Bloqlar'  : null}</h1>
      </div>
    </div>
  )
}

export default Banner
