import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✨ bunu əlavə et

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
  const [selectedCard, setSelectedCard] = useState("standard");
  const navigate = useNavigate(); // ✨ navigate funksiyası

  const toggleInfo = (id: string) => {
    if (selectedInfo === id) {
      setSelectedInfo(null);
    } else {
      setSelectedInfo(id);
    }
  };

  const selectCard = (id: string) => {
    setSelectedCard(id);
  };

  // ✨ Satın alma funksiyası
  const handleBuy = (e: React.MouseEvent, pkgId: string) => {
    e.stopPropagation();

    const user = sessionStorage.getItem("user");
    if (!user) {
      navigate("/login");
    } else {
      // Əgər user varsa, burada istədiyin əməliyyatı edə bilərsən
      console.log("Paket alındı:", pkgId);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {packages.map((pkg) => {
          const isSelected = selectedCard === pkg.id;

          return (
            <div
              key={pkg.id}
              onClick={() => selectCard(pkg.id)}
              className={`cursor-pointer flex flex-col rounded-lg border ${
                isSelected
                  ? "border-indigo-600 shadow-lg"
                  : "border-gray-200 shadow-sm"
              } bg-white p-8 text-center transition hover:shadow-xl`}
            >
              <span
                className={`text-sm font-semibold tracking-widest uppercase ${
                  isSelected ? "text-indigo-600" : "text-gray-500"
                }`}
              >
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
                    className="w-5 h-5 text-indigo-600 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Test sayı: {pkg.tests}
                </li>
                <li className="flex items-center text-gray-600">
                  <svg
                    className="w-5 h-5 text-indigo-600 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Qiymət: {pkg.price} manat
                </li>
              </ul>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleInfo(pkg.id);
                }}
                className="mb-4 text-indigo-700 font-medium hover:underline focus:outline-none"
              >
                {selectedInfo === pkg.id ? "Məlumatı bağla" : "Ətraflı məlumat"}
              </button>

              <button
                onClick={(e) => handleBuy(e, pkg.id)}
                className={`mt-auto bg-indigo-600 text-white font-semibold py-3 rounded hover:bg-indigo-700 transition`}
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
