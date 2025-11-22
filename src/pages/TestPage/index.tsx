import { useState } from "react";
import questionsData from "../../data/questions";
import { Link } from "react-router-dom";
import { Modal, Button } from "antd"; // ⭐ Modal və Button əlavə OLUNDU

const TestPage = () => {
  const [currentQuestionSet, setCurrentQuestionSet] = useState(0);
  const [answers, setAnswers] = useState(Array(questionsData.length).fill(0));
  const [errors, setErrors] = useState(Array(questionsData.length).fill(false));
  const [score, setScore] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false); // ⭐ Modal state

  const handleRadioChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
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

  const getMBTIType = (scores) => {
    let type = "";
    type += scores.E >= scores.I ? "E" : "I";
    type += scores.S >= scores.N ? "S" : "N";
    type += scores.T >= scores.F ? "T" : "F";
    type += scores.J >= scores.P ? "J" : "P";
    return type;
  };

  const submitAnswers = () => {
    const scoresByType = {};
    answers.forEach((answer, index) => {
      if (answer === null) return;
      const selectedOption = questionsData[index].options[answer];
      if (!selectedOption) return;
      const values = selectedOption.value;
      Object.keys(values).forEach((type) => {
        if (!scoresByType[type]) scoresByType[type] = 0;
        scoresByType[type] += values[type];
      });
    });

    setScore(scoresByType);
    setIsModalOpen(true); // ⭐ Nəticə çıxanda modal açılsın
  };

  const renderQuestions = () => {
    const startIndex = currentQuestionSet * 10;
    const endIndex = Math.min(
      (currentQuestionSet + 1) * 10,
      questionsData.length
    );

    return questionsData.slice(startIndex, endIndex).map((q, i) => {
      const index = startIndex + i;
      const isSelected = answers[index] !== null;

      const contentStyle = {
        paddingBottom: 35,
        paddingTop: 10,
        margin: "auto",
        backgroundColor: isSelected ? "#a9a9a92e" : "#fff",
        marginBottom: isSelected ? "7px" : "0",
        border: errors[index] ? "1px solid red" : "1px solid transparent",
      };

      let levelShort = [];
      if (q.options.length === 2) levelShort = ["<<", ">>"];
      else if (q.options.length === 3) levelShort = ["<<", "•", ">>"];
      else if (q.options.length === 5) levelShort = ["<<", "<", "•", ">", ">>"];
      else levelShort = q.options.map((_, idx) => idx + 1);

      return (
        <div
          key={index}
          className="content text-center font-semibold text-xl text-primary-blue flex flex-col gap-8 w-full"
          style={contentStyle}
        >
          <p className="test-quiz pt-6 text-[14px] md:text-[20px]">
            {q.question}
          </p>
          <div className="input flex justify-center gap-2">
            {q.options.map((option, j) => (
              <label
                key={j}
                className="relative cursor-pointer flex flex-col items-center select-none min-w-[50px] md:min-w-[80px] max-w-[120px] md:max-w-[150px] text-center"
              >
                <input
                  type="radio"
                  value={j}
                  checked={answers[index] === j}
                  onChange={() => handleRadioChange(index, j)}
                  className="peer sr-only"
                />
                <div className="bg-white w-6 h-6 md:w-8 md:h-8 p-1 md:p-2 border-primary-blue border border-solid rounded-full peer-checked:bg-primary-blue flex items-center justify-center">
                  <div className="bg-white w-2 h-2 md:w-4 md:h-4 rounded-full"></div>
                </div>

                <span className="text-[10px] md:text-xs leading-[1] text-gray-500 break-words">
                  {option.text}
                </span>

                <span className="absolute bottom-full mb-1 hidden peer-hover:block px-2 py-1 text-xs bg-gray-800 text-white rounded whitespace-nowrap">
                  {option.text}
                </span>
              </label>
            ))}
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

        <div>
          <h3 className="bg-primary-blue text-white p-4 text-center font-medium">
            ŞƏXSİYYƏT TESTİNDƏN KEÇMƏK
          </h3>

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

            {currentQuestionSet < Math.ceil(questionsData.length / 10) - 1 && (
              <button
                type="button"
                className="button-next border-primary-blue border-[3px] rounded-lg py-2 px-6 font-medium text-primary-blue text-lg border-solid bg-white hover:bg-primary-blue hover:text-white duration-300"
                onClick={nextQuestions}
              >
                Növbəti
              </button>
            )}

            {currentQuestionSet ===
              Math.ceil(questionsData.length / 10) - 1 && (
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

        {/* ⭐⭐⭐ NƏTİCƏ MODALI ⭐⭐⭐ */}
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
