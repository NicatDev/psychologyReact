import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import image from "../../shared/media/imgs/intj-male.svg";
import { personalityTypes } from "../../data/personalityTypes"; // metinler buradan gələcək
import SidebarChart from "./Chart";

const TestResult = () => {
  const [result, setResult] = useState(null);
  const [searchParams] = useSearchParams();
  const userType = searchParams.get("type") || "INTJ";

  const scores = {
    E: 81,
    S: 124,
    T: 164,
    J: 36,
    // lazım olsa yeni 4 skala əlavə et
    O: 80,
    F1: 45,
    M: 110,
    P1: 40,
  };

  const scaleData = [
    { label: "Ekstrovasiya", key: "E" },
    { label: "İntuisiya", key: "S" },
    { label: "Məntiq", key: "T" },
    { label: "Mühakimə", key: "J" },
    { label: "Açıq Fikirli", key: "O" },
    { label: "Fokuslu", key: "F1" },
    { label: "Hərəkətli", key: "M" },
    { label: "Planlı", key: "P1" },
  ];
  useEffect(() => {
    if (userType && personalityTypes[userType]) {
      setResult(personalityTypes[userType]);
    }
  }, [userType]);

  if (!result) return <p>Nəticə yüklənir...</p>;

  // Funksiya: array tipindəki məlumatları list olaraq göstərmək
  const renderList = (title, items) => (
    <>
      <h4 className="font-bold text-3xl text-primary-blue mt-12">{title}</h4>
      <ul className="list-disc pl-6">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </>
  );

  return (
    <div className="">
      {/* Header */}
      <div className="bg-primary-blue">
        <div className="container mx-auto px-2 py-16 flex items-center justify-between">
          <h2 className="text-white text-6xl font-bold w-1/2 leading-tight">
            16 tip şəxsiyyət testinin nəticəsi
          </h2>
          <img className="w-40" src={image} alt={userType} />
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-2 py-20 flex justify-between gap-10 flex-col md:flex-row">
        <div className="w-full md:w-full flex flex-col gap-6 text-lg">
          <h4 className="font-bold text-3xl text-primary-blue">
            {userType} kimdir?
          </h4>
          <p>{result.summary}</p>
          <p>{result.workplacePersonality}</p>

          {renderList("Əsas motivatorlar", result.keyMotivators)}
          {renderList("İdeal iş mühiti", result.idealWorkEnvironment)}
          {renderList("Əsas dəyərlər", result.coreValues)}
          {renderList("Sevdiyi iş tapşırıqları", result.preferredWorkTasks)}
          {renderList("Təşkilata töhfələr", result.contributionsToOrganization)}
          <p className="mt-8 font-semibold text-lg">Komanda ilə işləmə tərzi</p>
          <p>{result.workingWithTeam}</p>
          {renderList(
            "Komandaya kömək edə biləcək bacarıqlar",
            result.teamHelp
          )}
          {renderList(
            "Komandada narahatlıq yaradan hallar",
            result.teamIrritate
          )}
          {renderList(
            "Komanda bacarıqlarını inkişaf etdirmək üçün addımlar",
            result.teamActionSteps
          )}

          <p className="mt-8 font-semibold text-lg">Ünsiyyət</p>
          <p>{result.communicatingWithOthers}</p>
          {renderList(
            "Ünsiyyətdə güclü tərəflər",
            result.communicationStrengths
          )}
          {renderList(
            "Ünsiyyət problemləri",
            result.communicationMisunderstanding
          )}
          {renderList(
            "Ünsiyyət bacarıqlarını inkişaf etdirmək üçün addımlar",
            result.communicationActionSteps
          )}

          <p className="mt-8 font-semibold text-lg">Münaqişələrin idarəsi</p>
          <p>{result.managingConflict}</p>
          {renderList("Münaqişəyə kömək", result.conflictHelp)}
          {renderList("Münaqişə yaradan hallar", result.conflictTriggeredBy)}
          {renderList(
            "Münaqişədə narahat edən hallar",
            result.conflictIrritate
          )}
          {renderList(
            "Münaqişə bacarıqlarını inkişaf etdirmək üçün addımlar",
            result.conflictActionSteps
          )}

          <p className="mt-8 font-semibold text-lg">Liderlik</p>
          <p>{result.takingTheLead}</p>
          {renderList(
            "Başqalarını ilhamlandırmaq üçün yollar",
            result.inspireOthers
          )}
          {renderList("İşləri həyata keçirmək", result.makeThingsHappen)}
          {renderList(
            "Liderlik bacarıqlarını inkişaf etdirmək üçün addımlar",
            result.leadershipDevelopment
          )}

          <p className="mt-8 font-semibold text-lg">Qərar vermə</p>
          <p>{result.makingDecisions}</p>
          {renderList(
            "Qərar vermənin güclü tərəfləri",
            result.decisionStrengths
          )}
          {renderList(
            "Qərar vermənin çətin tərəfləri",
            result.decisionChallenges
          )}
          {renderList(
            "Qərar vermə bacarıqlarını inkişaf etdirmək üçün addımlar",
            result.decisionActionSteps
          )}

          <p className="mt-8 font-semibold text-lg">
            Tapşırıqları yerinə yetirmə
          </p>
          <p>{result.gettingThingsDone}</p>
          {renderList("Tapşırıqda kömək edən hallar", result.tasksHelp)}
          {renderList(
            "Tapşırıqda narahatlıq yaradan hallar",
            result.tasksIrritate
          )}
          {renderList(
            "Tapşırıq bacarıqlarını inkişaf etdirmək üçün addımlar",
            result.tasksActionSteps
          )}

          <p className="mt-8 font-semibold text-lg">İnkişaf və öyrənmə</p>
          <p>{result.growthAndDevelopment}</p>
          {renderList(
            "Öyrənməyi yaxşılaşdıran hallar",
            result.learningImproved
          )}
          {renderList("Öyrənməyə mane olan hallar", result.learningHindered)}
          {renderList("Dəyişikliyə baxış", result.howYouViewChange)}
          {renderList("İnkişaf imkanları", result.opportunitiesForGrowth)}

          <p className="mt-8 font-semibold text-lg">Stress ilə başa çıxma</p>
          <p>{result.copingWithStress}</p>
          {renderList("Stress tetikleyiciləri", result.stressTriggers)}
          {renderList(
            "Ən yaxşı stress reaksiyaları",
            result.bestStressResponse
          )}
          {renderList("Başkalarının stressdə köməyi", result.othersHelpStress)}
          {renderList("Ən pis stress reaksiyaları", result.worstStressResponse)}
          {renderList(
            "Başkalarının stressi artıran davranışları",
            result.othersWorsenStress
          )}

          <p className="mt-8 font-semibold text-lg">Uğura çatmaq</p>
          <p>{result.achievingSuccess}</p>
          {renderList("Potensial problemlər", result.potentialProblems)}
          {renderList("Tövsiyələr – etməli olduğunuz", result.suggestionsDo)}
          {renderList(
            "Tövsiyələr – etməməli olduğunuz",
            result.suggestionsDont
          )}
        </div>

        {/* Sidebar */}
        {/* Sidebar */}
        <div className="border border-solid border-zinc-300 w-full md:w-2/5 rounded-lg h-fit overflow-hidden ">
          <div className="p-4 text-center bg-zinc-100">
            <p className="text-xl font-semibold text-stone-800 pb-4">
              Sizin nəticəniz
            </p>
            <p className="text-primary-blue font-bold text-lg">{userType}</p>
          </div>
          <div className="p-4">
            <SidebarChart scores={scores} scaleData={scaleData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestResult;
