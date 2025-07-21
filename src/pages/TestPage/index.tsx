import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import '../../styles/test-page.css'

const TestPage = () => {
    const [currentQuestionSet, setCurrentQuestionSet] = useState(0);
    const [answers, setAnswers] = useState(Array(30).fill(null));
    const [setCompleted, setSetCompleted] = useState([false, false, false]);
    const [errors, setErrors] = useState(Array(30).fill(false));
    const navigate = useNavigate();

    const handleRadioChange = (index: any, value: any) => {
        const newAnswers = [...answers];
        newAnswers[index] = value;
        setAnswers(newAnswers);
        const newErrors = [...errors];
        newErrors[index] = false;
        setErrors(newErrors);
    };

    const levelOptions = ['a', 'b', 'c', 'd', 'e'];

    const nextQuestions = () => {
        const startIndex = currentQuestionSet * 10;
        const endIndex = (currentQuestionSet + 1) * 10;
        const subsetAnswers = answers.slice(startIndex, endIndex);
        if (subsetAnswers.some(answer => answer === null)) {
            const newErrors = [...errors];
            subsetAnswers.forEach((answer, index) => {
                if (answer === null) {
                    newErrors[startIndex + index] = true;
                }
            });
            setErrors(newErrors);
            return;
        }
        setCurrentQuestionSet(currentQuestionSet + 1);
        setSetCompleted([...setCompleted.slice(0, currentQuestionSet), true, ...setCompleted.slice(currentQuestionSet + 1)]);
        window.scrollTo(0, 0);
    };



    const prevQuestions = () => {
        setCurrentQuestionSet(currentQuestionSet - 1);
        window.scrollTo(0, 0);
    };

    const submitAnswers = () => {
        const startIndex = currentQuestionSet * 10;
        const endIndex = (currentQuestionSet + 1) * 10;
        const subsetAnswers = answers.slice(startIndex, endIndex);
        if (subsetAnswers.some(answer => answer === null)) {
            const newErrors = [...errors];
            subsetAnswers.forEach((answer, index) => {
                if (answer === null) {
                    newErrors[startIndex + index] = true;
                }
            });
            setErrors(newErrors);
            return;
        }
        console.log(answers);
        navigate('/result');
    };

    const questions = [
        "Sən yeni insanlarla tanışmağa marağı olan biri misiniz?",
        "Bir probleminiz olduğunda, hansı seçimi daha çox seçərdiniz?",
        "Bir sosial tədbirdə, siz necə davranırsınız?",
        "Bir proyekt üzərində işlərkən, sizin üstünüzlə əlaqə qurmaqda olan tərəflərinizdə necə davranırsınız?",
        "Bir problem çıxandan sonra, ilk axtardığınız şey nə olur?",
        "Yeni vəziyyətlər və məsələlər qarşısında necə davranırsınız?", "Həyatınızda daim məqsədləriniz və planlarınız var?",
        "Dostlarınızla vaxt keçirməyi necə qiymətləndirirsiniz?", "Yeni iş və təcrübələrə açıq mısınız?",
        "Bir insanın fikir və düşüncələrini öyrənmək üçün hansı metodları tərəf edərdiniz?"
    ];

    const trueOptions = ['Bəli',
        'Paylaşmaq', 'Fəaliyyətdə oluram', 'Sıx əlaqədə oluram', 'Özüm həll edirəm', 'Sevə-Sevə qarşılayıram', 'Bəli',
        'Çox vacibdir', 'Bəli', 'Onun fikirlərini dinləmək',];
    const falseOptions = [' Xeyr',
        'Yalnız olmaq', 'Geri planda qalıram', 'Fikirlərimi qoruyuram', 'Başqalarının köməyini axtarıram'
        , 'Qaçıram', ' Xeyr', 'Yalnız olmağı tərəccüb edirəm', ' Xeyr', 'Öz fikirlərinizi bölüşmək',];

    const renderQuestions = () => {
        const startIndex = currentQuestionSet * 10;
        const endIndex = Math.min((currentQuestionSet + 1) * 10, 30);
        const renderedQuestions = [];

        for (let i = startIndex; i < endIndex; i++) {
            const isSelected = answers[i] !== null;
            const contentStyle = {
                paddingBottom: 35,
                paddingTop: 10,
                margin: 'auto',
                backgroundColor: isSelected ? '#a9a9a92e' : '#fff',
                marginBottom: isSelected ? '7px' : '0',
                border: errors[i] ? '1px solid red' : '1px solid transparent'
            };

            const trueLabel = trueOptions[i % trueOptions.length];
            const falseLabel = falseOptions[i % falseOptions.length];

            renderedQuestions.push(
                <div className='content text-center font-semibold text-xl text-primary-blue flex flex-col gap-8 w-full' style={contentStyle} key={i}>
                    <p className='test-quiz pt-6'>{questions[i % 10]}</p>
                    <div className='input flex justify-center gap-14'>
                        <p style={{ width: '30%', fontWeight: 600, color: '#404f69' }}>{trueLabel}</p>
                        <div className='input-flex flex gap-4'>
                            {levelOptions.map((option, j) => (
                                <label key={j} style={{ cursor: 'pointer' }} className='container'>
                                    <input
                                        type="radio"
                                        value={option}
                                        checked={answers[i] === option}
                                        onChange={() => handleRadioChange(i, option)}
                                        className="no-hover peer sr-only"
                                    />
                                    {/* <span className="checkmark"></span> */}
                                    <div className="bg-white p-3 duration-300 border-primary-blue border border-solid rounded-full peer-checked:bg-primary-blue">
                                        <div className="bg-white p-2 rounded-full"></div>
                                    </div>
                                </label>
                            ))}
                        </div>
                        <p style={{ width: '30%', fontWeight: 600, color: '#404f69' }}>{falseLabel}</p>
                    </div>
                </div>
            );
        }

        return renderedQuestions;
    };



    return (
        <div className="bg-zinc-100">
            <div className='container mx-auto px-2 py-20'>
                <h2 className='text-center mb-4 font-bold text-sky-950 text-2xl'>SON 30 GÜNDƏ 973.578 TEST KEÇİRİLİB</h2>
                <p className='style-p mb-8 text-lg text-center'>Bu pulsuz şəxsiyyət testi sizə 9 şəxsiyyət tipindən hansının sizə ən uyğun olduğunu göstərəcək. Bütün 9 Şəxsiyyət tipi üçün necə xal qazandığınıza baxın və  şəxsiyyət sistemində harada yerləşdiyinizi anlayın.</p>
                <div>
                    <h3 className='bg-primary-blue text-white p-4 text-center font-medium'>ŞƏXSİYYƏT TESTİNDƏN KEÇMƏK ÜÇÜN HƏR BƏYANATI SİZİN ŞƏXSİYYƏTİNİZİ NECƏ DƏRƏCƏ TƏSVİR EDİLMƏSİ ƏSASINDA QEYD EDİN.</h3>
                    <form>
                        {renderQuestions()}
                    </form>
                    <div className='button-flex flex justify-center mt-8 gap-6'>
                        {currentQuestionSet > 0 && <button className='border-primary-blue border-[3px] rounded-lg py-2 px-6 font-medium text-primary-blue text-lg border-solid bg-white hover:bg-primary-blue hover:text-white duration-300' onClick={prevQuestions}>Geri</button>}
                        {currentQuestionSet < 2 && <button className='button-next border-primary-blue border-[3px] rounded-lg py-2 px-6 font-medium text-primary-blue text-lg border-solid bg-white hover:bg-primary-blue hover:text-white duration-300' onClick={nextQuestions}>Növbəti</button>}
                        {currentQuestionSet === 2 && <button className='button-next border-primary-blue border-[3px] rounded-lg py-2 px-6 font-medium text-primary-blue text-lg border-solid bg-white hover:bg-primary-blue hover:text-white duration-300' onClick={submitAnswers}>Təsdiqlə</button>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestPage;
