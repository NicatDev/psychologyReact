import { useState, useEffect } from "react";
import API from "@/api";
import { Link } from "react-router-dom";
import { Modal, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useUser } from "@/context/UserContext";
import { toast, ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet-async";

interface Option {
  id: number;
  text: string;
  value: Record<string, number>;
}

interface Question {
  id: number;
  question: string;
  text?: string; // API-dan gələn sual mətni
  type: string;
  dimension: string;
  options: Option[];
}

const TestPage = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  const [questions, setQuestions] = useState<Question[]>([]);
  const [optionIds, setOptionIds] = useState<Record<number, number>>({});
  const [answers, setAnswers] = useState<any[]>([]);
  const [errors, setErrors] = useState<boolean[]>([]);
  const [currentQuestionSet, setCurrentQuestionSet] = useState<number>(0);
  const [score, setScore] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // API-dan sualları gətiririk
  const fetchQuestions = async () => {
    try {
      const response = await API.Tests.questions();
      if (response.status === 200) {
        const data = response.data;
        setQuestions(data);
        // Suallar gəldikdən sonra massivləri sualların sayına görə hazırlayırıq
        setAnswers(Array(data.length).fill(null));
        setErrors(Array(data.length).fill(false));
      }
    } catch (err: any) {
      if (!user) {
        toast.error("Zəhmət olmasa daxil olun!");
      }
      if (user?.active_test_count === 0) {
        toast.error("Aktiv test paketiniz yoxdur!");
      }
      console.error("Xəta baş verdi:", err);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const handleRadioChange = (index: number, value: any, id: number) => {
    // Answers massivini yeniləyirik (bu isSelected-i tətikləyir)
    setAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[index] = value;
      return newAnswers;
    });

    // Option ID-ləri saxlayırıq (bu radio buttonun checked halını idarə edir)
    setOptionIds((prev) => ({
      ...prev,
      [index]: id,
    }));

    // Xətanı təmizləyirik
    setErrors((prev) => {
      const newErrors = [...prev];
      newErrors[index] = false;
      return newErrors;
    });
  };

  const getMBTIType = (scores: any) => {
    let type = "";
    type += (scores.E || 0) >= (scores.I || 0) ? "E" : "I";
    type += (scores.S || 0) >= (scores.N || 0) ? "S" : "N";
    type += (scores.T || 0) >= (scores.F || 0) ? "T" : "F";
    type += (scores.J || 0) >= (scores.P || 0) ? "J" : "P";
    return type;
  };

  const handleSubmitTest = async (scoresByType: any) => {
    const answersArray = Object.values(optionIds);
    const type = getMBTIType(scoresByType);

    try {
      const response = await API.Tests.testCreate({
        answers: answersArray,
        result: type,
        result_values: scoresByType,
      });

      navigate("/result/?type=" + type + "&test=" + response.data.test_id, {
        replace: true,
      });
    } catch (error) {
      console.error("Error submitting test:", error);
      toast.error("Nəticə göndərilərkən xəta baş verdi.");
    }
  };

  const submitAnswers = () => {
    const scoresByType: any = {};
    answers.forEach((answer: any) => {
      if (answer === null) return;
      Object.keys(answer).forEach((type) => {
        if (!scoresByType[type]) scoresByType[type] = 0;
        scoresByType[type] += answer[type];
      });
    });
    setScore(scoresByType);
    setIsModalOpen(true);
    handleSubmitTest(scoresByType);
  };

  const nextQuestions = () => {
    const startIndex = currentQuestionSet * 10;
    const endIndex = (currentQuestionSet + 1) * 10;
    const subsetAnswers = answers.slice(startIndex, endIndex);

    if (subsetAnswers.some((answer) => answer === null)) {
      const newErrors = [...errors];
      for (let i = startIndex; i < endIndex && i < questions.length; i++) {
        if (answers[i] === null) newErrors[i] = true;
      }
      setErrors(newErrors);
      toast.warn("Zəhmət olmasa bütün sualları cavablandırın.");
      return;
    }

    setCurrentQuestionSet(currentQuestionSet + 1);
    window.scrollTo(0, 0);
  };

  const prevQuestions = () => {
    setCurrentQuestionSet(currentQuestionSet - 1);
    window.scrollTo(0, 0);
  };

  const renderQuestions = () => {
    const startIndex = currentQuestionSet * 10;
    const endIndex = Math.min((currentQuestionSet + 1) * 10, questions.length);

    return questions.slice(startIndex, endIndex).map((q: any, i: number) => {
      const index = startIndex + i;
      const isSelected = answers[index] !== null;

      return (
        <div
          key={index}
          className={`content text-center font-semibold text-xl flex flex-col gap-8 w-full border transition-all duration-300 rounded mb-4 shadow-sm ${
            isSelected
              ? "bg-primary-blue text-white border-blue-700"
              : "bg-blue-50 text-primary-blue border-blue-200 hover:bg-blue-100"
          } ${errors[index] ? "border-red-500 border-2" : ""}`}
          style={{ paddingBottom: 35, paddingTop: 10, margin: "auto" }}
        >
          <p className="test-quiz pt-6 px-4 text-[16px] md:text-[20px]">
            {q.text || q.question}
          </p>
          <div className="input flex justify-center gap-2 md:gap-6 px-2">
            {q.options.map((option: any, j: number) => {
              const isFirst = j === 0;
              const isLast = j === q.options.length - 1;
              const isActive = optionIds[index] === option.id;

              return (
                <div key={j} className="flex items-center">
                  {isFirst && (
                    <span
                      className={`mr-2 text-[11px] md:text-sm leading-[1.2] max-w-[80px] md:max-w-none ${
                        isSelected ? "text-blue-100" : "text-gray-500"
                      }`}
                    >
                      {option.text}
                    </span>
                  )}

                  <label className="relative cursor-pointer flex flex-col items-center select-none">
                    <input
                      type="radio"
                      name={`question-${index}`}
                      checked={isActive}
                      onChange={() =>
                        handleRadioChange(index, option.value, option.id)
                      }
                      className="peer sr-only"
                    />
                    <div
                      className={`w-6 h-6 md:w-9 md:h-9 border-2 rounded-full flex items-center justify-center transition-all ${
                        isSelected
                          ? "border-white"
                          : "border-primary-blue bg-white shadow-inner"
                      }`}
                    >
                      <div
                        className={`w-3 h-3 md:w-5 md:h-5 rounded-full transition-all ${
                          isActive
                            ? isSelected
                              ? "bg-white"
                              : "bg-primary-blue"
                            : "bg-transparent"
                        }`}
                      ></div>
                    </div>
                  </label>

                  {isLast && (
                    <span
                      className={`ml-2 text-[11px] md:text-sm leading-[1.2] max-w-[80px] md:max-w-none ${
                        isSelected ? "text-blue-100" : "text-gray-500"
                      }`}
                    >
                      {option.text}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <Helmet>
        <title>Şəxsiyyət Testi | Octopus</title>
        <meta
          name="description"
          content="Şəxsiyyət testi ilə hansı şəxsiyyət tipinə daha yaxın olduğunuzu öyrənin."
        />
      </Helmet>

      <div className="bg-zinc-100 min-h-screen">
        <div className="container mx-auto px-2 py-20">
          <p className="style-p mb-8 text-lg text-center font-medium text-gray-700">
            Bu pulsuz şəxsiyyət testi sizə 9 şəxsiyyət tipindən hansının sizə ən
            uyğun olduğunu göstərəcək.
          </p>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <div className="flex flex-col gap-2 p-6 bg-primary-blue">
              <h3 className="text-white text-center font-bold text-xl tracking-wide">
                ŞƏXSİYYƏT TESTİNDƏN KEÇMƏK
              </h3>
              <div className="flex text-blue-100 text-[11px] md:text-sm gap-2 md:gap-6 items-center justify-center mt-2 opacity-90">
                <span>Qətiyyən razı deyiləm</span>
                <span className="w-1 h-1 bg-white rounded-full"></span>
                <span>Neytral</span>
                <span className="w-1 h-1 bg-white rounded-full"></span>
                <span>Tamamilə razıyam</span>
              </div>
            </div>

            <div className="p-2">
              <form onSubmit={(e) => e.preventDefault()}>
                {questions.length > 0 ? (
                  <div className="flex flex-col gap-1">{renderQuestions()}</div>
                ) : (
                  <div className="text-center py-10">Yüklənir...</div>
                )}
              </form>

              <div className="flex justify-center mt-8 gap-4 md:gap-6 border-t pt-8">
                {currentQuestionSet > 0 && (
                  <button
                    type="button"
                    className="border-primary-blue border-[2px] rounded-lg py-2 px-8 font-semibold text-primary-blue hover:bg-primary-blue hover:text-white transition-all duration-300"
                    onClick={prevQuestions}
                  >
                    Geri
                  </button>
                )}

                {currentQuestionSet < Math.ceil(questions.length / 10) - 1 && (
                  <button
                    type="button"
                    className="bg-primary-blue border-primary-blue border-[2px] rounded-lg py-2 px-8 font-semibold text-white hover:bg-blue-700 transition-all duration-300"
                    onClick={nextQuestions}
                  >
                    Növbəti
                  </button>
                )}

                {currentQuestionSet === Math.ceil(questions.length / 10) - 1 &&
                  questions.length > 0 && (
                    <button
                      type="button"
                      className="bg-green-600 border-green-600 border-[2px] rounded-lg py-2 px-8 font-semibold text-white hover:bg-green-700 transition-all duration-300 shadow-md"
                      onClick={submitAnswers}
                    >
                      Nəticəni göstər
                    </button>
                  )}
              </div>
            </div>
          </div>

          <Modal
            title="Sizin MBTI Nəticəniz"
            open={isModalOpen}
            onCancel={() => setIsModalOpen(false)}
            footer={[
              <Button key="close" onClick={() => setIsModalOpen(false)}>
                Bağla
              </Button>,
            ]}
          >
            {score && (
              <div className="text-center p-6">
                <p className="text-lg font-medium mb-2">Sizin Tipiniz:</p>
                <Link
                  to={"/result/?type=" + getMBTIType(score)}
                  className="text-3xl font-bold text-blue-600 hover:underline"
                >
                  {getMBTIType(score)}
                </Link>
              </div>
            )}
          </Modal>
          <ToastContainer position="bottom-right" />
        </div>
      </div>
    </>
  );
};

export default TestPage;
