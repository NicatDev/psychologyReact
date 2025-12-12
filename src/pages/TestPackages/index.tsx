import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "@/api";

interface Plan {
  id: number | string;
  title: string;
  tests_count: number;
  price: string;
  customerPrice: string;
  currency: string;
  short_description: string;
  is_active: boolean;
}

export default function Packages() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [selectedInfo, setSelectedInfo] = useState<string | null>(null);
  const navigate = useNavigate();

  // Backend-dən plans məlumatını çəkmək
  const getPlans = async () => {
    try {
      const response = await API.Auth.plans();
      if (response.status === 200) {
        setPlans(response.data);
      } else {
        throw new Error("Plans məlumatını yükləmək alınmadı");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPlans();
  }, []);

  const toggleInfo = (id: string | number) => {
    setSelectedInfo((prev) => (prev === id ? null : `${id}`));
  };

  const handleBuy = (planId: string | number) => {
    console.log(planId)
    alert('Paymeny system is not active'+planId)
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`cursor-pointer flex flex-col rounded-lg border 
              border-yellow-500 bg-white p-8 text-center 
              transition hover:border-blue-600 hover:shadow-xl hover:shadow-blue-200`}
          >
            <span className="text-sm font-semibold tracking-widest uppercase text-gray-700">
              {plan.title}
            </span>

            <div className="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900">
              {plan.customerPrice}
              <span className="text-xl font-normal ml-1">{plan.currency}</span>
            </div>
            <div className="text-gray-500 mt-2">/{plan.tests_count} test</div>

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
                Test sayı: {plan.tests_count}
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
                Qiymət: {plan.customerPrice} {plan.currency}
              </li>
            </ul>

            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleInfo(plan.id);
              }}
              className="mb-4 text-blue-600 font-medium hover:underline focus:outline-none"
            >
              {selectedInfo === `${plan.id}` ? "Məlumatı bağla" : "Ətraflı məlumat"}
            </button>

            {selectedInfo === `${plan.id}` && (
              <div className="my-4 p-4 border-l-4 rounded-lg shadow-sm animate-fadeIn bg-blue-50 border-blue-500 text-blue-600">
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
                  <p className="text-sm leading-relaxed">{plan.short_description}</p>
                </div>
              </div>
            )}

            <button
              onClick={(e) => handleBuy(plan.id)}
              className="mt-auto bg-blue-600 text-white font-semibold py-3 rounded hover:bg-blue-700 transition"
            >
              İndi al
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
