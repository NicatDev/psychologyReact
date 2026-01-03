import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaGlobe, FaChevronDown } from "react-icons/fa";

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        setIsOpen(false);
        window.location.reload();
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={toggleDropdown}
                className="flex items-center gap-2 font-medium hover:text-primary-blue duration-300 focus:outline-none"
            >
                <FaGlobe size={20} />
                <span className="uppercase">{i18n.language === "az" ? "AZ" : "EN"}</span>
                <FaChevronDown size={12} className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
            </button>

            {isOpen && (
                <div className="absolute top-full right-0 mt-2 w-28 bg-white shadow-lg rounded-md overflow-hidden border border-gray-100 z-50 animate-fadeIn">
                    <button
                        onClick={() => changeLanguage("en")}
                        className={`block w-full text-left px-4 py-2 hover:bg-indigo-50 text-sm transition-colors ${i18n.language === "en" ? "font-bold text-indigo-600" : "text-gray-700"
                            }`}
                    >
                        English
                    </button>
                    <button
                        onClick={() => changeLanguage("az")}
                        className={`block w-full text-left px-4 py-2 hover:bg-indigo-50 text-sm transition-colors ${i18n.language === "az" ? "font-bold text-indigo-600" : "text-gray-700"
                            }`}
                    >
                        Azərbaycan
                    </button>
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;
