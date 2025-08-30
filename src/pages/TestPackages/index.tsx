import { useState } from "react";
import { useNavigate } from "react-router-dom";

const packages = [
  {
    id: "standard",
    name: "Standart",
    tests: 1,
    price: 1,
    info: "Standart paket 1 ədəd test daxildir.",
  },
  {
    id: "medium",
    name: "Medium",
    tests: 10,
    price: 5,
    info: "Medium paket 10 ədəd test daxildir.",
  },
  {
    id: "pro",
    name: "Pro",
    tests: 100,
    price: 50,
    info: "Pro paket 100 ədəd test daxildir.",
  },
];

export default function Packages() {
  const [selectedInfo, setSelectedInfo] = useState<string | null>(null);
  const navigate = useNavigate();

  const toggleInfo = (id: string) => {
    setSelectedInfo((prev) => (prev === id ? null : id));
  };

  const handleBuy = (e: React.MouseEvent, pkgId: string) => {
    e.stopPropagation();
    const user = sessionStorage.getItem("user");
    if (!user) {
      navigate("/login");
    } else {
      console.log("Paket alındı:", pkgId);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {packages.map((pkg) => {
          return (
            <div
              key={pkg.id}
              className={`cursor-pointer flex flex-col rounded-lg border 
              border-yellow-500 bg-white p-8 text-center 
              transition hover:border-blue-600`}
            >
              <span className="text-sm font-semibold tracking-widest uppercase text-gray-700">
                {pkg.name}
              </span>

              <div className="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900">
                {pkg.price}
                <span className="text-xl font-normal ml-1">manat</span>
              </div>
              <div className="text-gray-500 mt-2">/{pkg.tests} test</div>

              <hr className="my-6 border-gray-300" />

              <ul className="mb-6 space-y-3 text-left">
                <li className="flex items-center text-gray-600">
                  <svg
                    className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Test sayı: {pkg.tests}
                </li>
                <li className="flex items-center text-gray-600">
                  <svg
                    className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Qiymət: {pkg.price} manat
                </li>
              </ul>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleInfo(pkg.id);
                }}
                className="mb-4 text-blue-600 font-medium hover:underline focus:outline-none"
              >
                {selectedInfo === pkg.id ? "Məlumatı bağla" : "Ətraflı məlumat"}
              </button>

              {selectedInfo === pkg.id && (
                <div
                  className="my-4 p-4 border-l-4 rounded-lg shadow-sm animate-fadeIn bg-blue-50 border-blue-500 text-blue-600"
                >
                  <div className="flex items-start">
                    <svg
                      className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 16h-1v-4h-1m1-4h.01M12 20c4.418 
                        0 8-3.582 8-8s-3.582-8-8-8-8 
                        3.582-8 8 3.582 8 8 8z"
                      />
                    </svg>
                    <p className="text-sm leading-relaxed">{pkg.info}</p>
                  </div>
                </div>
              )}

              <button
                onClick={(e) => handleBuy(e, pkg.id)}
                className="mt-auto bg-blue-600 text-white font-semibold py-3 rounded hover:bg-blue-700 transition"
              >
                İndi al
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
