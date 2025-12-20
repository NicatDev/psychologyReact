import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "@/api";

export default function TestList({ user }: any) {
  const [openTestId, setOpenTestId] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"questions" | "result">("questions");

  const [questions, setQuestions] = useState<any[]>([]);
  const [testData, setTestData] = useState<any | null>(null);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(0);
  const questionsPerPage = 10 ; // bir səhifədə 10 sual

  // Suallar 1 dəfə çəkilir
  useEffect(() => {
    API.Tests.questions().then((res) => setQuestions(res.data));
  }, []);

  const fetchTestData = (id: number) => {
    API.Tests.testSingle(id).then((res) => {
      setTestData(res.data);
      setCurrentPage(0); // ilk səhifədən başlasın
      setActiveTab("questions");
    });
  };

  const tests = user?.tests || [];

  // Səhifələnmiş suallar
  const startIndex = currentPage * questionsPerPage;
  const endIndex = startIndex + questionsPerPage;
  const pageQuestions = questions.slice(startIndex, endIndex);

  const isFirstPage = currentPage === 0;
  const isLastPage = endIndex >= questions.length;

  return (
    <div className="container mx-auto mt-10 mb-11 bg-white p-8 rounded shadow">
      <h1 className="text-3xl font-semibold mb-6">Test nəticələri</h1>
    {tests?.length?
      <div className="space-y-4">
        {tests
          .sort((a: any, b: any) => b.id - a.id)
          .map((test: any) => (
            <div key={test.id} className="border rounded-xl shadow p-4 bg-white">
              <div
                onClick={() => {
                  if (openTestId === test.id) {
                    setOpenTestId(null);
                  } else {
                    setOpenTestId(test.id);
                    fetchTestData(test.id);
                  }
                }}
                className="cursor-pointer flex justify-between items-center"
              >
                <div>
                  <h2 className="text-xl font-semibold flex items-center gap-2">
                    <span className="text-indigo-600">#{test.id}</span>
                    Şəxsiyyət Testi
                  </h2>
                </div>
                <span className="text-blue-600">
                  {openTestId === test.id ? "Yığ" : "Bax"}
                </span>
              </div>

              {openTestId === test.id && testData && (
                <div className="mt-4 border-t pt-4">
                  {/* Tabs */}
                  <div className="flex gap-4 mb-4">
                    <button
                      className={`px-4 py-2 rounded ${
                        activeTab === "questions"
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200"
                      }`}
                      onClick={() => setActiveTab("questions")}
                    >
                      Suallara Bax
                    </button>
                    <button
                      className={`px-4 py-2 rounded ${
                        activeTab === "result"
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200"
                      }`}
                      onClick={() => setActiveTab("result")}
                    >
                      Nəticəyə Bax
                    </button>
                  </div>

                  {/* Questions Tab */}
                  {activeTab === "questions" && (
                    <div className="space-y-4">
                      {pageQuestions.map((question, index) => (
                        <div
                          key={question.id}
                          className="border rounded p-4 shadow-sm bg-gray-50"
                        >
                          <p className="mb-3 font-medium">
                            {startIndex + index + 1}) {question.text}
                          </p>

                          <div className="flex justify-between items-center">
                            <span className="text-sm">{question.options[0]?.text}</span>

                            <div className="flex items-center gap-4 justify-center">
                              {question.options.map((opt) => (
                                <label
                                  key={opt.id}
                                  className="flex items-center gap-2 cursor-pointer"
                                >
                                  <input
                                    type="radio"
                                    checked={testData.answers.includes(opt.id)}
                                    disabled
                                    className="hidden"
                                  />
                                  <div
                                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                                      testData.answers.includes(opt.id)
                                        ? "border-blue-500"
                                        : "border-gray-300"
                                    }`}
                                  >
                                    {testData.answers.includes(opt.id) && (
                                      <div className="w-2.5 h-2.5 bg-blue-500 rounded-full" />
                                    )}
                                  </div>
                                </label>
                              ))}
                            </div>

                            <span className="text-sm">
                              {question.options[question.options.length - 1]?.text}
                            </span>
                          </div>
                        </div>
                      ))}

                      {/* Pagination */}
                      <div className="flex gap-2 justify-center mt-4">
                        <button
                          onClick={() => setCurrentPage((p) => Math.max(p - 1, 0))}
                          className={`px-4 py-2 rounded ${
                            isFirstPage ? "bg-gray-300 cursor-pointer" : "bg-blue-500 text-white"
                          }`}
                        >
                          Əvvəlki
                        </button>
                        <button
                          onClick={() => setCurrentPage((p) => (!isLastPage ? p + 1 : p))}
                          className={`px-4 py-2 rounded ${
                            isLastPage ? "bg-gray-300 cursor-pointer" : "bg-blue-500 text-white"
                          }`}
                        >
                          Növbəti
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Result Tab */}
                  {activeTab === "result" && (
                    <div className="text-center mt-6">
                      <p className="mb-4">
                        Test nəticənizi görmək üçün aşağıdakı düyməyə klik edin.
                      </p>
                      <Link
                        to={"/result/?type=" + test.result+"&test=" + test.id}
                        target="_blank"
                        className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                      >
                        Nəticəyə Bax
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
      </div>:<></>}
      {!tests?.length?<div className="space-y-4 caret-gray-400">Test keçmişiniz mövcud deyil</div>:<></> }
    </div>
  );
}
