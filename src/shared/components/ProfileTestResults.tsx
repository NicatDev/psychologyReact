import { useState } from "react";
import { Link } from "react-router-dom";

const tests = [
    { id: 1, title: "Şəxsiyyət Testi", description: "9 tip şəxsiyyət analiz testi" },
    { id: 2, title: "Şəxsiyyət Testi", description: "9 tip şəxsiyyət analiz testi" },
    { id: 3, title: "Şəxsiyyət Testi", description: "9 tip şəxsiyyət analiz testi" },
    { id: 4, title: "Şəxsiyyət Testi", description: "9 tip şəxsiyyət analiz testi" },
    { id: 5, title: "Şəxsiyyət Testi", description: "9 tip şəxsiyyət analiz testi" },
    { id: 6, title: "Şəxsiyyət Testi", description: "9 tip şəxsiyyət analiz testi" },
    { id: 7, title: "Şəxsiyyət Testi", description: "9 tip şəxsiyyət analiz testi" },
];

const questions = [
    { id: 1, text: "Mən öz hisslərimi ifadə etməkdə çətinlik çəkirəm", trueLabel: "Tam razıyam", falseLabel: "Heç razı deyiləm" },
    { id: 2, text: "Qərar verərkən çox düşünürəm", trueLabel: "Razıyam", falseLabel: "Razı deyiləm" },
    { id: 3, text: "İnsanlarla ünsiyyət mənə rahat gəlir", trueLabel: "Tam razıyam", falseLabel: "Heç razı deyiləm" },
    { id: 4, text: "Stresslə baş etməyi bacarıram", trueLabel: "Tam razıyam", falseLabel: "Heç razı deyiləm" },
    { id: 5, text: "Tənqidə qarşı həssasam", trueLabel: "Razıyam", falseLabel: "Razı deyiləm" },
];

const levelOptions = ["a", "b", "c", "d", "e"];

export default function TestList() {

    const [openTestId, setOpenTestId] = useState<number | null>(null);
    const [activeTab, setActiveTab] = useState<"questions" | "result">("questions");

    const [answers, setAnswers] = useState<string[]>(
        questions.map(() => "c") // default cavablar
    );

    const handleRadioChange = (questionIndex: number, value: string) => {
        const updated = [...answers];
        updated[questionIndex] = value;
        setAnswers(updated);
    };

    return (
        <div className="container mx-auto mt-10 mb-11 bg-white p-8 rounded shadow">
            <h1 className="text-3xl font-semibold mb-6">Test nəticələri</h1>
            <div className="space-y-4">
                {tests.sort((a: any, b: any) => b?.id - a?.id).map((test) => (
                    <div key={test.id} className="border rounded-xl shadow p-4 bg-white">
                        <div
                            onClick={() =>
                                setOpenTestId(openTestId === test.id ? null : test.id)
                            }
                            className="cursor-pointer flex justify-between items-center"
                        >
                            <div>
                                <h2 className="text-xl font-semibold flex items-center gap-2">
                                     <span className="text-indigo-600">#{test?.id}</span>
                                     {test.title}</h2>
                                <p className="text-gray-600">{test.description}</p>
                            </div>
                            <span className="text-blue-600">
                                {openTestId === test.id ? "Yığ" : "Bax"}
                            </span>
                        </div>

                        {openTestId === test.id && (
                            <div className="mt-4 border-t pt-4">
                                {/* Tabs */}
                                <div className="flex gap-4 mb-4">
                                    <button
                                        className={`px-4 py-2 rounded ${activeTab === "questions"
                                            ? "bg-blue-500 text-white"
                                            : "bg-gray-200"
                                            }`}
                                        onClick={() => setActiveTab("questions")}
                                    >
                                        Suallara Bax
                                    </button>
                                    <button
                                        className={`px-4 py-2 rounded ${activeTab === "result"
                                            ? "bg-blue-500 text-white"
                                            : "bg-gray-200"
                                            }`}
                                        onClick={() => setActiveTab("result")}
                                    >
                                        Nəticəyə Bax
                                    </button>
                                </div>

                                {/* Tab Content */}
                                {activeTab === "questions" && (
                                    <div className="space-y-4">
                                        {questions.map((q, i) => (
                                            <div
                                                key={q.id}
                                                className="border rounded p-4 shadow-sm bg-gray-50"
                                            >
                                                <p className="mb-3 font-medium">
                                                    {i + 1}) {q.text}
                                                </p>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-sm">{q.trueLabel}</span>
                                                    <div className="flex items-center gap-4 justify-center">
                                                        {levelOptions.map((option, j) => (
                                                            <label
                                                                key={j}
                                                                className="flex items-center gap-2 cursor-pointer"
                                                            >
                                                                <input
                                                                    type="radio"
                                                                    value={option}
                                                                    checked={answers[i] === option}
                                                                    disabled
                                                                    onChange={() =>
                                                                        handleRadioChange(i, option)
                                                                    }
                                                                    className="hidden"
                                                                />
                                                                <div
                                                                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
                                ${answers[i] === option
                                                                            ? "border-blue-500"
                                                                            : "border-gray-300"
                                                                        }`}
                                                                >
                                                                    {answers[i] === option && (
                                                                        <div className="w-2.5 h-2.5 bg-blue-500 rounded-full" />
                                                                    )}
                                                                </div>
                                                            </label>
                                                        ))}
                                                    </div>
                                                    <span className="text-sm">{q.falseLabel}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {activeTab === "result" && (
                                    <div className="text-center mt-6">
                                        <p className="mb-4">
                                            Test nəticənizi görmək üçün aşağıdakı düyməyə klik edin.
                                        </p>
                                        <Link
                                            to="/result"
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
            </div>
        </div>
    );
}
