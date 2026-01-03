import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Banner = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  return (
    <div className="py-[60px] bg-[#0a4cb7]">
      <div className="container mx-auto px-10">
        <h1 className="text-white text-[40px] font-[600]">
          {pathname === "/about-us"
            ? t("banner.about")
            : pathname === "/contact-us"
              ? t("banner.contact")
              : pathname === "/blogs"
                ? t("banner.blogs")
                : pathname === "/test-packages"
                  ? t("banner.plans")
                  : null}
        </h1>
      </div>
    </div>
  );
};

export default Banner;
