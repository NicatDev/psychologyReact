import { useState, useEffect } from "react";
import API from "@/api";
import questionsDataImport from "../../data/questions"; // any ilə bypass
import { Link } from "react-router-dom";
import { Modal, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useUser } from "@/context/UserContext";
interface Option {
  id: number;
  text: string;
  value: Record<string, number>;
}

interface Question {
  id: number;
  question: string;
  type: string;
  dimension: string;
  options: Option[];
}

const questionsData: any = questionsDataImport;

const TestPage = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [optionIds, setOptionIds] = useState<any>({});

  const [currentQuestionSet, setCurrentQuestionSet] = useState<number>(0);
  const [answers, setAnswers] = useState<any[]>(
    Array(questions.length).fill(null)
  );
  const [errors, setErrors] = useState<boolean[]>(
    Array(questions.length).fill(false)
  );
  const [score, setScore] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

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
    }
  };
  const fetchQuestions = async () => {
    try {
      const response = await API.Tests.questions();
      if (response.status === 200) {
        setQuestions(response.data);
      }
    } catch (err) {
      console.error("Xəta baş verdi:", err);
    }
  };
  useEffect(() => {
    if (user) {
      fetchQuestions();
    } else {
      navigate("/login", { replace: true });
    }
  }, [user, navigate]);

  const handleRadioChange = (index: number, value: any, id: number) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setOptionIds((prev: any) => ({
      ...prev, // keep all previous values
      [index]: id, // update/add this key
    }));
    console.log(value, index, "mmm");
    setAnswers(newAnswers);

    const newErrors = [...errors];
    newErrors[index] = false;
    setErrors(newErrors);
  };

  const nextQuestions = () => {
    const startIndex = currentQuestionSet * 10;
    const endIndex = (currentQuestionSet + 1) * 10;
    const subsetAnswers = answers.slice(startIndex, endIndex);

    if (subsetAnswers.some((answer) => answer === null)) {
      const newErrors = [...errors];
      subsetAnswers.forEach((answer, i) => {
        if (answer === null) newErrors[startIndex + i] = true;
      });
      setErrors(newErrors);
      return;
    }

    setCurrentQuestionSet(currentQuestionSet + 1);
    window.scrollTo(0, 0);
  };

  const prevQuestions = () => {
    setCurrentQuestionSet(currentQuestionSet - 1);
    window.scrollTo(0, 0);
  };

  const getMBTIType = (scores: any) => {
    let type = "";
    type += scores.E >= scores.I ? "E" : "I";
    type += scores.S >= scores.N ? "S" : "N";
    type += scores.T >= scores.F ? "T" : "F";
    type += scores.J >= scores.P ? "J" : "P";
    return type;
  };

  const submitAnswers = () => {
    const scoresByType: any = {};
    answers.forEach((answer: any, index: number) => {
      if (answer === null) return;

      const values = answer;
      Object.keys(values).forEach((type) => {
        if (!scoresByType[type]) scoresByType[type] = 0;
        scoresByType[type] += values[type];
      });
    });
    setScore(scoresByType);
    setIsModalOpen(true);
    handleSubmitTest(scoresByType);
  };

  const renderQuestions = () => {
    const startIndex = currentQuestionSet * 10;
    const endIndex = Math.min((currentQuestionSet + 1) * 10, questions.length);

    return questions.slice(startIndex, endIndex).map((q: any, i: number) => {
      const index = startIndex + i;
      const isSelected = answers[index] !== null;

      const contentStyle = {
        paddingBottom: 35,
        paddingTop: 10,
        margin: "auto",
        marginBottom: isSelected ? "7px" : "0",
      };

      // let levelShort = [];
      // if (q.options.length === 2) levelShort = ["<<", ">>"];
      // else if (q.options.length === 3) levelShort = ["<<", "•", ">>"];
      // else if (q.options.length === 5) levelShort = ["<<", "<", "•", ">", ">>"];
      // else levelShort = q.options.map((_: any, idx: number) => idx + 1);

      return (
        <div
          key={index}
          className="content text-center font-semibold text-xl text-primary-blue flex flex-col gap-8 w-full  border border-blue-200 bg-blue-50 hover:bg-blue-200 transition-colors duration-300 rounded"
          style={contentStyle}
        >
          <p className="test-quiz pt-6 text-[14px] md:text-[20px]">{q.text}</p>
          <div className="input flex justify-center gap-4">
            {q.options.map((option: any, j: number) => {
              const isFirst = j === 0;
              const isLast = j === q.options.length - 1;

              return (
                <div key={j} className="flex items-center">
                  {isFirst && (
                    <span className="mr-2 text-[12px] md:text-sm text-gray-500 leading-[1.4]">
                      {option.text}
                    </span>
                  )}

                  <label className="relative cursor-pointer flex flex-col items-center select-none">
                    <input
                      type="radio"
                      value={j}
                      checked={answers[index] === option.value}
                      onChange={() =>
                        handleRadioChange(index, option.value, option.id)
                      }
                      className="peer sr-only"
                    />
                    <div className="bg-white w-6 h-6 md:w-8 md:h-8 p-1 md:p-2 border-primary-blue border border-solid rounded-full peer-checked:bg-primary-blue flex items-center justify-center">
                      <div className="bg-white w-2 h-2 md:w-4 md:h-4 rounded-full"></div>
                    </div>

                    {/* Hover tooltip */}
                    <span className="absolute bottom-full mb-1 hidden peer-hover:block px-2 py-1 text-xs bg-gray-800 text-white rounded whitespace-nowrap">
                      {option.text}
                    </span>
                  </label>

                  {isLast && (
                    <span className="ml-2 text-[12px] md:text-sm text-gray-500 leading-[1.4]">
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
    <div className="bg-zinc-100">
      <div className="container mx-auto px-2 py-20">
        <p className="style-p mb-8 text-lg text-center">
          Bu pulsuz şəxsiyyət testi sizə 9 şəxsiyyət tipindən hansının sizə ən
          uyğun olduğunu göstərəcək.
        </p>

        <div className="bg-primary-blue">
          <div className="flex flex-col gap-2 px-3">
            <h3 className=" text-white p-4 text-center font-medium">
              ŞƏXSİYYƏT TESTİNDƏN KEÇMƏK
            </h3>

            <div className="flex text-white mb-4 sm:text-[14px] text-[12px] sm:gap-4 gap-2 sm:-ml-10 ml-0 items-center justify-center">
              <span>Qətiyyən razı deyiləm</span>
              <span
                style={{
                  width: 4,
                  height: 4,
                  borderRadius: "50%",
                  background: "white",
                }}
                className="flex shrink-0"
              ></span>

              <span>Neytral</span>
              <span
                style={{
                  width: 4,
                  height: 4,
                  borderRadius: "50%",
                  background: "white",
                }}
                className="flex shrink-0"
              ></span>
              <span>Tamamilə razıyam</span>
            </div>
          </div>

          <form>{renderQuestions()}</form>

          <div className="button-flex flex justify-center mt-8 gap-6">
            {currentQuestionSet > 0 && (
              <button
                type="button"
                className="border-primary-blue border-[3px] rounded-lg py-2 px-6 font-medium text-primary-blue text-lg border-solid bg-white hover:bg-primary-blue hover:text-white duration-300"
                onClick={prevQuestions}
              >
                Geri
              </button>
            )}

            {currentQuestionSet < Math.ceil(questions.length / 10) - 1 && (
              <button
                type="button"
                className="button-next border-primary-blue border-[3px] rounded-lg py-2 px-6 font-medium text-primary-blue text-lg border-solid bg-white hover:bg-primary-blue hover:text-white duration-300"
                onClick={nextQuestions}
              >
                Növbəti
              </button>
            )}

            {currentQuestionSet === Math.ceil(questions.length / 10) - 1 && (
              <button
                type="button"
                className="button-submit border-primary-blue border-[3px] rounded-lg py-2 px-6 font-medium text-primary-blue text-lg border-solid bg-white hover:bg-primary-blue hover:text-white duration-300"
                onClick={submitAnswers}
              >
                Nəticəni göstər
              </button>
            )}
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
            <Link
              key="go"
              to={"/result/?type=" + (score ? getMBTIType(score) : "")}
              target="_blank"
            ></Link>,
          ]}
        >
          {score && (
            <div className="text-center">
              <p className="text-lg font-semibold mb-3">
                Sizin Tipiniz:{" "}
                <span className="text-blue-600">
                  <Link
                    key="go"
                    to={"/result/?type=" + (score ? getMBTIType(score) : "")}
                    target="_blank"
                  >
                    {getMBTIType(score)}
                  </Link>
                </span>
              </p>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default TestPage;
