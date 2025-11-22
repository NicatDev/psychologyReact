// MBTI Tiplərinin Təsvirləri 
const personalityTypes = {
    "INTJ": {
        name: "Memar (The Architect)",
        summary: "INTJ-lər analitik, strateji və innovativ düşüncə tərzinə malikdir. Onlar rasionaldır, mürəkkəb sistemləri anlayır və uzunmüddətli planlar qururlar. Müstəqil və qərarlıdırlar, yeni ideyalar yaratmağı sevirlər.",
        workplacePersonality: "INTJ olaraq siz rasional, strateji və innovativ düşüncə tərzinə maliksiniz. Dünyanı strukturlaşdırmağa və inkişaf etdirməyə can atan müstəqil düşünənsiniz. Bəzən soyuq və ya tənqidi görünə bilərsiniz.",
        keyMotivators: [
            "Mürəkkəb problemlərin həlli",
            "Müstəqil işləmək",
            "Yeni konsepsiyaların inkişaf etdirilməsi",
            "Bilik əldə etmək"
        ],
        idealWorkEnvironment: [
            "Müstəqil işləməyə imkan verən mühit",
            "Strukturlaşdırılmış və məqsədyönlü iş yeri",
            "İnnovativ ideyaların dəstəkləndiyi şərait",
            "Rasional qərarların qəbul olunduğu yer"
        ],
        coreValues: [
            "Məntiq",
            "Effektivlik",
            "Müstəqillik",
            "Bilik"
        ],
        preferredWorkTasks: [
            "Strateji planlaşdırma",
            "Sistem analizi və dizaynı",
            "Problemlərin mürəkkəb həlli",
            "Tədqiqat və inkişaf"
        ],
        contributionsToOrganization: [
            "Uzunmüddətli strategiyalar təklif etmək",
            "Problemlərə məntiqi həllər tapmaq",
            "Səmərəliliyi artırmaq",
            "Gələcək imkanları görmək"
        ],
        workingWithTeam: "INTJ-lər komanda işində əsasən ideyaları təklif edən və məntiqi çərçivə yaradan tərəf olurlar. Onlar səmərəliliyə üstünlük verir və emosional münaqişələrdən çəkinirlər.",
        teamHelp: [
            "Mürəkkəb problemlərə rasional həllər təklif etmək",
            "Strateji baxış təmin etmək",
            "Komandanı daha səmərəli işləməyə yönəltmək"
        ],
        teamIrritate: [
            "Həddindən artıq tənqidi olmaq",
            "Emosiyaları nəzərə almamaq",
            "Komanda üzvlərinə qarşı soyuqqanlı görünmək"
        ],
        teamActionSteps: [
            "Komanda üzvlərinin hisslərini dinləməyi öyrənmək",
            "Fikirlərinizi daha diplomatik şəkildə ifadə etmək",
            "Komanda fəaliyyətlərində daha çox iştirak etmək"
        ],
        communicatingWithOthers: "INTJ-lər ünsiyyətdə dəqiq, məntiqi və birbaşa olmağı üstün tuturlar. Onlar fikirlərini aydın şəkildə ifadə edirlər, lakin bəzən digərlərinin emosional reaksiyalarını nəzərə almaya bilərlər.",
        communicationStrengths: [
            "Aydın və dəqiq ifadə",
            "Məntiqi arqumentasiya",
            "Problemlərə fokuslanma"
        ],
        communicationMisunderstanding: [
            "Duyğusal konteksti nəzərə almamaq",
            "Həddindən artıq birbaşa olmaq",
            "Abstrakt ideyaları izah etməkdə çətinlik"
        ],
        communicationActionSteps: [
            "Empatiya hissini inkişaf etdirmək",
            "Ünsiyyətdə daha səbirli olmaq",
            "Bədən dilini və qeyri-verbal siqnalları oxumağı öyrənmək"
        ],
        managingConflict: "INTJ-lər münaqişələri məntiqi yolla həll etməyə çalışırlar. Onlar emosional partlamalardan xoşlanmırlar və münaqişəni obyektiv faktlara əsaslanaraq həll etməyi üstün tuturlar.",
        conflictHelp: [
            "Problemlərə rasional yanaşmaq",
            "Münaqişəni obyektiv məlumatlarla analiz etmək",
            "Effektiv həll yolları təklif etmək"
        ],
        conflictTriggeredBy: [
            "Məntiqsiz qərarlar",
            "Səmərəliliyin pozulması",
            "Faktların gözardı edilməsi"
        ],
        conflictIrritate: [
            "Həddindən artıq rasional olmaq",
            "Hissləri və emosiyaları nəzərə almamaq",
            "Mübahisələrdə israrçı olmaq"
        ],
        conflictActionSteps: [
            "Münaqişələrdə empatiyanı artırmaq",
            "Başqalarının hisslərinə hörmət etmək",
            "Bəzən güzəştə getməyi öyrənmək"
        ],
        takingTheLead: "INTJ-lər vizyoner və strateji liderlərdir. Onlar təşkilatı irəli aparan innovativ ideyalarla çıxış edirlər və məqsədlərə çatmaq üçün sistemli yanaşma tətbiq edirlər.",
        inspireOthers: [
            "Aydın vizyon təqdim etmək",
            "Məntiqi əsaslar üzərində inam yaratmaq",
            "Səmərəliliyə diqqət yetirmək"
        ],
        makeThingsHappen: [
            "Aydın planlar hazırlamaq",
            "Resursları effektiv idarə etmək",
            "Məqsədlərə çatmaq üçün sistemlər qurmaq"
        ],
        leadershipDevelopment: [
            "Komanda üzvlərinə daha çox səlahiyyət vermək",
            "Empatiya hissini inkişaf etdirmək",
            "Geri bildirim verməkdə daha həssas olmaq"
        ],
        makingDecisions: "INTJ-lər qərarları məntiqi analiz və uzunmüddətli nəticələrə əsasən verirlər. Onlar sürətli və qətiyyətli olurlar, lakin bəzən insan faktorunu gözardı edə bilərlər.",
        decisionStrengths: [
            "Məntiqi və rasional yanaşma",
            "Qətiyyətli və sürətli qərarlar",
            "Uzunmüddətli perspektiv"
        ],
        decisionChallenges: [
            "İnsan amilini gözardı etmək",
            "Həddindən artıq obyektiv olmaq",
            "Bəzən alternativləri kifayət qədər araşdırmamaq"
        ],
        decisionActionSteps: [
            "Qərar qəbul edərkən başqalarının hisslərini nəzərə almaq",
            "Bütün mümkün variantları araşdırmağa vaxt ayırmaq",
            "Əlavə məlumat toplamağa açıq olmaq"
        ],
        gettingThingsDone: "INTJ-lər tapşırıqlara planlı və səmərəli yanaşırlar. Onlar işləri vaxtında və keyfiyyətli şəkildə bitirməyə meyillidirlər.",
        tasksHelp: [
            "Layihələrin planlaşdırılması",
            "Resursların effektiv idarə edilməsi",
            "Tapşırıqların vaxtında yerinə yetirilməsi"
        ],
        tasksIrritate: [
            "Detallara həddindən artıq fokuslanmaq",
            "Bürokratiya ilə çətinlik çəkmək",
            "Proseslərdə dəyişikliyə müqavimət"
        ],
        tasksActionSteps: [
            "Daha çevik olmağa çalışmaq",
            "Bəzən spontanlığa icazə vermək",
            "İşlərin icrasında daha çox əməkdaşlıq etmək"
        ],
        growthAndDevelopment: "INTJ-lər öyrənməyə həvəslidirlər, xüsusilə də mürəkkəb nəzəriyyələr və sistemlər haqqında. Onlar məntiqi və intellektual inkişafa üstünlük verirlər.",
        learningImproved: [
            "Məntiqə əsaslanan materiallar",
            "Fərdi öyrənmə imkanları",
            "Dərin təhlil tələb edən mövzular"
        ],
        learningHindered: [
            "Çox sosial öyrənmə mühiti",
            "Emosional və ya şaxəli mövzular",
            "Praktik tərəfi zəif olan materiallar"
        ],
        howYouViewChange: [
            "Dəyişikliyə qarşı rasional yanaşma",
            "Potensial faydalarını qiymətləndirmək",
            "Uzunmüddətli nəticələri düşünmək"
        ],
        opportunitiesForGrowth: [
            "Empatiyanı inkişaf etdirmək",
            "Sosial bacarıqları gücləndirmək",
            "Daha çevik və uyğunlaşa bilən olmaq",
            "Tənqidləri şəxsi qəbul etməmək"
        ],
        copingWithStress: "INTJ-lər stressə qarşı analitik və məntiqi yanaşmağa çalışırlar. Lakin həddindən artıq stress altında özlərini təcrid edə bilər və ya həddindən artıq tənqidi ola bilərlər.",
        stressTriggers: [
            "Məntiqsiz qərarlar və davranışlar",
            "Səmərəliliyin pozulması",
            "Şəxsi məkanın pozulması"
        ],
        bestStressResponse: [
            "Müstəqil düşünmək",
            "Problemləri analiz etmək",
            "Yalnız vaxt keçirmək",
            "Yeni strategiyalar hazırlamaq"
        ],
        othersHelpStress: [
            "Onlara məntiqi dəstək vermək",
            "Problemlərə həll yolları tapmağa kömək etmək",
            "Onlara fərdi məkan vermək"
        ],
        worstStressResponse: [
            "Həddindən artıq tənqidi olmaq",
            "Başqalarından uzaqlaşmaq",
            "Emosional partlamalar yaşamaq"
        ],
        othersWorsenStress: [
            "Hissləri ilə bağlı suallar vermək",
            "Məntiqsiz təzyiqlər tətbiq etmək",
            "Onları sosial fəaliyyətlərə məcbur etmək"
        ],
        achievingSuccess: "INTJ-lər iş yerində yüksək potensiala malikdirlər, xüsusilə də intellektual və strateji sahələrdə. Uğur üçün güclü tərəflərini maksimum dərəcədə istifadə etməli, zəif tərəflərini isə inkişaf etdirməlidirlər.",
        potentialProblems: [
            "Sosial qarşılıqlı əlaqələrdə çətinliklər",
            "Hissləri nəzərə almamaq",
            "Həddindən artıq tənqidi yanaşma"
        ],
        suggestionsDo: [
            "Daha çox empatiya göstərmək",
            "Komanda işinə açıq olmaq",
            "Geri bildirimə müsbət yanaşmaq",
            "Hissləri ifadə etməyi öyrənmək"
        ],
        suggestionsDont: [
            "Həddindən artıq rasional olmaq",
            "Sosial fəaliyyətlərdən tamamilə qaçmaq",
            "Başqalarının fikirlərini aşağılamaq"
        ]
    },
    "INTP": {
        name: "Məntiqçi (The Logician)",
        summary: "INTP-lər yüksək intellektual maraqlara malik, analitik və dərin düşünənlərdir. Onlar bilik axtarışında olurlar və mürəkkəb nəzəriyyələri anlamağı sevirlər. Müstəqil və orijinaldırlar.",
        workplacePersonality: "INTP olaraq siz rasional, analitik və müstəqil düşünənsiniz. Mürəkkəb problemləri həll etməyi və yeni konsepsiyaları araşdırmağı sevən, məntiqə əsaslanan bir yanaşmaya maliksiniz. Rutindən və təkrar işlərdən tez darıxa bilərsiniz.",
        keyMotivators: [
            "Problemləri həll etmək",
            "Məlumat toplamaq və analiz etmək",
            "Yeni ideyalar yaratmaq",
            "Müstəqil işləmək"
        ],
        idealWorkEnvironment: [
            "Müstəqil və azad iş mühiti",
            "İdeyaların sərbəst axdığı şərait",
            "Rutin işlərin az olduğu mühit",
            "Intellektual stimullaşdırıcı layihələr"
        ],
        coreValues: [
            "Bilgi",
            "Məntiq",
            "Orijinallıq",
            "Müstəqillik"
        ],
        preferredWorkTasks: [
            "Nəzəriyyələrin inkişafı",
            "Mürəkkəb problemlərin təhlili",
            "Yeni sistemlərin dizaynı",
            "Tədqiqat işləri"
        ],
        contributionsToOrganization: [
            "Orijinal və innovativ həllər təklif etmək",
            "Problemlərə dərin analitik baxış gətirmək",
            "Mürəkkəb məlumatları anlamaq və izah etmək",
            "Gələcək imkanları görmək"
        ],
        workingWithTeam: "INTP-lər komanda işində əsasən obyektiv və məntiqi düşüncələrlə töhfə verirlər. Onlar komanda daxilindəki emosional dinamikaya qarışmaqdansa, problemlərin rasional həllinə fokuslanırlar.",
        teamHelp: [
            "Məntiqi və analitik perspektiv təmin etmək",
            "Problemlərə obyektiv baxış gətirmək",
            "Yeni və qeyri-ənənəvi ideyalar təklif etmək"
        ],
        teamIrritate: [
            "Sosial qarşılıqlı əlaqələrdə soyuqqanlı olmaq",
            "Hissləri nəzərə almamaq",
            "Həddindən artıq intellektual görünmək",
            "Detalları gözardı etmək"
        ],
        teamActionSteps: [
            "Daha çox ünsiyyət qurmağı öyrənmək",
            "Başqalarının fikirlərinə daha çox hörmət etmək",
            "Praktik tətbiqlərə diqqət yetirmək"
        ],
        communicatingWithOthers: "INTP-lər ünsiyyətdə dəqiq və məntiqi olmağı üstün tuturlar. Onlar ideyalarını aydın şəkildə ifadə etməyə çalışır, lakin bəzən abstrakt və ya texniki dildən istifadə edə bilərlər ki, bu da digərləri üçün anlaşılmaz ola bilər.",
        communicationStrengths: [
            "Aydın və dəqiq ifadə",
            "Məntiqi arqumentasiya",
            "Problemlərə fokuslanma"
        ],
        communicationMisunderstanding: [
            "Duyğusal konteksti nəzərə almamaq",
            "Həddindən artıq intellektual terminlərdən istifadə etmək",
            "Başqalarının başa düşmədiyini fərz etməmək"
        ],
        communicationActionSteps: [
            "Ünsiyyətdə daha sadə dil istifadə etmək",
            "Başqalarının reaksiyalarına diqqət yetirmək",
            "Hissləri nəzərə almağı öyrənmək"
        ],
        managingConflict: "INTP-lər münaqişələri məntiqi yolla həll etməyə meyillidirlər. Onlar emosional partlamalardan xoşlanmırlar və problemin kökünə çatmaq üçün obyektiv məlumatları axtarırlar.",
        conflictHelp: [
            "Problemlərə rasional yanaşmaq",
            "Münaqişəni obyektiv məlumatlarla analiz etmək",
            "Effektiv həll yolları təklif etmək"
        ],
        conflictTriggeredBy: [
            "Məntiqsiz qərarlar",
            "Səmərəliliyin pozulması",
            "Faktların gözardı edilməsi",
            "Şəxsi dəyərlərinə meydan oxumaq"
        ],
        conflictIrritate: [
            "Həddindən artıq rasional olmaq",
            "Hissləri və emosiyaları nəzərə almamaq",
            "Mübahisələrdə israrçı olmaq",
            "Konfliktdən qaçmaq"
        ],
        conflictActionSteps: [
            "Münaqişələrdə empatiyanı artırmaq",
            "Başqalarının hisslərinə hörmət etmək",
            "Bəzən güzəştə getməyi öyrənmək",
            "Daha açıq fikirli olmaq"
        ],
        takingTheLead: "INTP-lər lider kimi daha çox intellektual rəhbərlik edirlər. Onlar komandalarına yeni ideyalar və nəzəriyyələr təqdim edir, lakin idarəetmə detallarına o qədər də fokuslanmırlar.",
        inspireOthers: [
            "Yeni və orijinal ideyalarla ilhamlandırmaq",
            "Dərin analitik düşüncəni təşviq etmək",
            "Intellektual maraq oyatmaq"
        ],
        makeThingsHappen: [
            "Mürəkkəb planlar hazırlamaq",
            "Resursları ağıllı şəkildə idarə etmək",
            "Yeni sistemlər yaratmaq"
        ],
        leadershipDevelopment: [
            "Praktik tətbiqlərə diqqət yetirmək",
            "Komanda üzvlərini daha yaxından idarə etmək",
            "Geri bildirim verməkdə daha həssas olmaq"
        ],
        makingDecisions: "INTP-lər qərarları məntiqi analizə və obyektiv faktlara əsasən verirlər. Onlar bütün variantları diqqətlə araşdırmağa meyilli olurlar və qərar qəbul etmə prosesində emosiyaları kənara qoyurlar.",
        decisionStrengths: [
            "Məntiqi və rasional yanaşma",
            "Dərin təhlil bacarığı",
            "Obyektivlik",
            "Həll yönümlülük"
        ],
        decisionChallenges: [
            "Həddindən artıq çox düşünmək (paralysis by analysis)",
            "Qərarları gecikdirmək",
            "İnsan amilini nəzərə almamaq"
        ],
        decisionActionSteps: [
            "Qərar qəbul etmək üçün son tarixlər qoymaq",
            "Qərarlarda daha çevik olmaq",
            "Başqalarının hisslərini dinləməyi öyrənmək"
        ],
        gettingThingsDone: "INTP-lər tapşırıqlara yanaşmada çevik və uyğunlaşandırıcıdırlar. Onlar daha çox ideya yaratmağa və nəzəriyyələri inkişaf etdirməyə maraqlıdırlar, detallara və tətbiqə o qədər də yox.",
        tasksHelp: [
            "Konseptual problemləri həll etmək",
            "Yeni yanaşmalar təklif etmək",
            "Mürəkkəb məlumatları sadələşdirmək"
        ],
        tasksIrritate: [
            "Detal işlərini sevməmək",
            "Rutin tapşırıqlardan tez darıxmaq",
            "Son tarixlərə diqqət yetirməmək",
            "Bəzən işləri yarımçıq qoymaq"
        ],
        tasksActionSteps: [
            "Təşkilatlanma bacarıqlarını inkişaf etdirmək",
            "Son tarixlərə diqqət yetirmək",
            "İşləri başlamaqdan çox bitirməyə fokuslanmaq"
        ],
        growthAndDevelopment: "INTP-lər bilik toplamağa və intellektual cəhətdən inkişaf etməyə can atırlar. Onlar məntiqə əsaslanan və abstrakt mövzuları öyrənməyi sevirlər.",
        learningImproved: [
            "Məntiqə əsaslanan materiallar",
            "Fərdi öyrənmə imkanları",
            "Dərin təhlil tələb edən mövzular"
        ],
        learningHindered: [
            "Çox sosial öyrənmə mühiti",
            "Emosional və ya şaxəli mövzular",
            "Praktik tərəfi zəif olan materiallar"
        ],
        howYouViewChange: [
            "Dəyişikliyə qarşı obyektiv yanaşma",
            "Potensial faydalarını qiymətləndirmək",
            "Dəyişikliyin məntiqi əsaslarını anlamaq"
        ],
        opportunitiesForGrowth: [
            "Sosial bacarıqları gücləndirmək",
            "Praktik tətbiqlərə diqqət yetirmək",
            "Hissləri ifadə etməyi öyrənmək",
            "Həddindən artıq tənqidi olmaqdan çəkinmək"
        ],
        copingWithStress: "INTP-lər stress altında özlərini təcrid edə, həddindən artıq analitik və ya tənqidi ola bilərlər. Onlar stressi məntiqi yolla həll etməyə çalışırlar.",
        stressTriggers: [
            "Məntiqsizlik və ya qeyri-rasional davranış",
            "Emosional partlamalar",
            "Rutin və təkrarlanan işlər",
            "Təzyiq altında qərarlar qəbul etmək"
        ],
        bestStressResponse: [
            "Müstəqil düşünmək",
            "Problemləri analiz etmək",
            "Tək vaxt keçirmək",
            "Yeni nəzəriyyələr öyrənmək"
        ],
        othersHelpStress: [
            "Onlara məntiqi dəstək vermək",
            "Problemlərə həll yolları tapmağa kömək etmək",
            "Onlara fərdi məkan vermək",
            "Sakit və rasional mühit təmin etmək"
        ],
        worstStressResponse: [
            "Həddindən artıq tənqidi olmaq",
            "Başqalarından uzaqlaşmaq",
            "Emosional partlamalar yaşamaq",
            "Problemləri yalnız öz daxilində həll etməyə çalışmaq"
        ],
        othersWorsenStress: [
            "Hissləri ilə bağlı suallar vermək",
            "Məntiqsiz təzyiqlər tətbiq etmək",
            "Onları sosial fəaliyyətlərə məcbur etmək",
            "Problemləri emosional yolla həll etməyə çalışmaq"
        ],
        achievingSuccess: "INTP-lər iş yerində yüksək intellektual potensiala malikdirlər. Uğur üçün güclü tərəflərini (analitik bacarıqlar) maksimum istifadə etməli və zəif tərəflərini (sosial ünsiyyət) inkişaf etdirməlidirlər.",
        potentialProblems: [
            "Sosial qarşılıqlı əlaqələrdə çətinliklər",
            "Detalları gözardı etmək",
            "Rutin işlərdən sıxılmaq"
        ],
        suggestionsDo: [
            "Daha çox ünsiyyət qurmaq",
            "İşlərin praktik tətbiqlərinə diqqət yetirmək",
            "Hissləri ifadə etməyi öyrənmək",
            "Tənqidləri obyektiv qəbul etmək"
        ],
        suggestionsDont: [
            "Həddindən artıq intellektual olmaq",
            "Sosial fəaliyyətlərdən tamamilə qaçmaq",
            "Başqalarının fikirlərini aşağılamaq"
        ]
    },
    "ENTJ": {
        name: "Komandir (The Commander)",
        summary: "ENTJ-lər liderlik keyfiyyətlərinə malik, qərarlı və strategik şəxslərdir. Onlar məqsədyönlüdür, təşkilatçıdır və çətinlikləri həll etməyi sevirlər. Bəzən həddindən artıq tələbkar ola bilərlər.",
        workplacePersonality: "ENTJ olaraq siz təbii bir lidersiniz, qərarlı, məqsədyönlü və strategiksiniz. Layihələrə sistemli şəkildə yanaşır, problemləri həll etməkdən və məqsədlərə çatmaqdan zövq alırsınız. Bəzən insanlar sizi həddindən artıq dominant və ya empatiyası az hesab edə bilərlər.",
        keyMotivators: [
            "Liderlik etmək",
            "Məqsədlərə çatmaq",
            "Sistemləri təkmilləşdirmək",
            "Effektivliyə nail olmaq"
        ],
        idealWorkEnvironment: [
            "Aydın hədəflərin olduğu mühit",
            "Liderlik imkanlarının olduğu yer",
            "Səmərəliliyin qiymətləndirildiyi şərait",
            "Qərarların tez qəbul edildiyi yer"
        ],
        coreValues: [
            "Liderlik",
            "Effektivlik",
            "Qətiyyət",
            "Məqsədyönlülük"
        ],
        preferredWorkTasks: [
            "Strateji planlaşdırma",
            "Layihə rəhbərliyi",
            "Sistemlərin optimallaşdırılması",
            "Qərarların qəbulu"
        ],
        contributionsToOrganization: [
            "Aydın vizyon və istiqamət təmin etmək",
            "Məqsədlərə çatmaq üçün effektiv planlar qurmaq",
            "Komandaları motivasiya etmək",
            "Səmərəliliyi artırmaq"
        ],
        workingWithTeam: "ENTJ-lər komandada liderlik etməyi və işləri irəli aparmağı sevirlər. Onlar komandanı məqsədlərə doğru yönəldir, lakin bəzən komanda üzvlərinin hisslərini nəzərə almaya bilərlər.",
        teamHelp: [
            "Aydın istiqamət və liderlik təmin etmək",
            "Məqsədlərə çatmaq üçün planlar qurmaq",
            "Komandanı motivasiya etmək",
            "Problemlərə praktik həllər tapmaq"
        ],
        teamIrritate: [
            "Həddindən artıq tələbkar olmaq",
            "Empatiyası az görünmək",
            "Başqalarının fikirlərinə kifayət qədər qulaq asmamaq",
            "Dominant olmaq"
        ],
        teamActionSteps: [
            "Daha çox dinləməyə çalışmaq",
            "Komanda üzvlərinin hisslərini nəzərə almaq",
            "Daha diplomatik olmaq",
            "Səlahiyyətləri bölüşməyi öyrənmək"
        ],
        communicatingWithOthers: "ENTJ-lər ünsiyyətdə birbaşa, məntiqi və inandırıcıdırlar. Onlar öz fikirlərini aydın şəkildə ifadə edir, lakin bəzən digərlərinin hisslərinə qarşı həssas olmaya bilərlər.",
        communicationStrengths: [
            "Aydın və birbaşa ünsiyyət",
            "Məntiqi arqumentasiya",
            "İnandırıcı olmaq"
        ],
        communicationMisunderstanding: [
            "Həddindən artıq sərt görünmək",
            "Duyğusal konteksti gözardı etmək",
            "Təzyiq edici olmaq"
        ],
        communicationActionSteps: [
            "Daha çox empatiya göstərmək",
            "Ünsiyyətdə daha səbirli olmaq",
            "Başqalarının fikirlərinə daha çox hörmət etmək"
        ],
        managingConflict: "ENTJ-lər münaqişələri məntiqi və effektiv şəkildə həll etməyə çalışırlar. Onlar münaqişəni bir problem kimi görüb onu tez bir zamanda həll etmək istəyirlər.",
        conflictHelp: [
            "Münaqişələri tez və səmərəli həll etmək",
            "Məntiqi həll yolları təklif etmək",
            "Problemlərə obyektiv yanaşmaq"
        ],
        conflictTriggeredBy: [
            "Qeyri-səmərəlilik",
            "Məntiqsiz qərarlar",
            "Zəif liderlik",
            "Emosional partlamalar"
        ],
        conflictIrritate: [
            "Həddindən artıq dominant olmaq",
            "Hissləri nəzərə almamaq",
            "Mübahisələrdə sərt olmaq",
            "Kompromisə getməmək"
        ],
        conflictActionSteps: [
            "Empatiyanı inkişaf etdirmək",
            "Başqalarının hisslərinə hörmət etmək",
            "Daha çox dinləməyə çalışmaq"
        ],
        takingTheLead: "ENTJ-lər təbii liderlərdir. Onlar komandalarına aydın vizyon təqdim edir, onları məqsədlərə doğru yönəldir və effektivlik üçün sistemlər qururlar.",
        inspireOthers: [
            "Aydın vizyon və məqsədlərlə ilhamlandırmaq",
            "Özünə inam və qətiyyətlə yol göstərmək",
            "Nəticələrə fokuslanmaq"
        ],
        makeThingsHappen: [
            "Dəqiq planlar yaratmaq",
            "Resursları optimallaşdırmaq",
            "Sistemləri effektiv şəkildə idarə etmək"
        ],
        leadershipDevelopment: [
            "Daha çox empatiya göstərmək",
            "Başqalarının fikirlərinə qulaq asmaq",
            "Təzyiqsiz bir mühit yaratmaq"
        ],
        makingDecisions: "ENTJ-lər qərarları tez və qətiyyətlə verirlər. Onlar faktlara və məntiqə əsaslanır, lakin bəzən bütün mümkün perspektivləri nəzərə almaya bilərlər.",
        decisionStrengths: [
            "Qətiyyətli və sürətli qərarlar",
            "Məntiqi yanaşma",
            "Effektivlik yönümlülük"
        ],
        decisionChallenges: [
            "Bəzən səthi qərarlar",
            "İnsan amilini gözardı etmək",
            "Tənqidə qarşı müqavimət"
        ],
        decisionActionSteps: [
            "Qərar qəbul etməzdən əvvəl daha çox məlumat toplamaq",
            "Başqalarının fikirlərini dinləmək",
            "Daha çevik olmaq"
        ],
        gettingThingsDone: "ENTJ-lər işləri həyata keçirməkdə son dərəcə bacarıqlıdırlar. Onlar məqsədlərə yönəlib, planlar qurur və onları effektiv şəkildə icra edirlər.",
        tasksHelp: [
            "Layihələrin vaxtında və büdcə daxilində tamamlanması",
            "Resursların səmərəli idarə edilməsi",
            "İş proseslərinin optimallaşdırılması"
        ],
        tasksIrritate: [
            "Detalları gözardı etmək",
            "Həddindən artıq tələbkar olmaq",
            "Qeyri-səmərəliliyə dözməmək"
        ],
        tasksActionSteps: [
            "Detal işlərinə daha çox diqqət yetirmək",
            "Komanda üzvlərini daha çox dəstəkləmək",
            "Məsuliyyətləri bölüşməyi öyrənmək"
        ],
        growthAndDevelopment: "ENTJ-lər daim inkişaf etməyə və öyrənməyə can atırlar. Onlar liderlik və strateji düşüncə bacarıqlarını gücləndirməyə üstünlük verirlər.",
        learningImproved: [
            "Liderlik və idarəetmə təlimləri",
            "Strateji planlaşdırma kursları",
            "Effektivlik metodları"
        ],
        learningHindered: [
            "Çox emosional mövzular",
            "Detallı və sıxıcı materiallar",
            "Praktik tətbiqi olmayan nəzəriyyələr"
        ],
        howYouViewChange: [
            "Dəyişikliyə açıqdırlar, xüsusilə də onun səmərəliliyi artıracağını düşünürlərsə",
            "Dəyişikliyi təşkilatı irəli aparmaq üçün bir fürsət kimi görürlər",
            "Strateji olaraq dəyişiklikləri idarə edirlər"
        ],
        opportunitiesForGrowth: [
            "Empatiya hissini inkişaf etdirmək",
            "Başqalarının hisslərinə qarşı həssas olmaq",
            "Kompromisə getməyi öyrənmək",
            "Daha çox səbirli olmaq"
        ],
        copingWithStress: "ENTJ-lər stress altında daha dominant, sərt və tənqidi ola bilərlər. Onlar problemləri təkbaşına həll etməyə çalışır və hisslərini ifadə etməkdə çətinlik çəkirlər.",
        stressTriggers: [
            "Qeyri-səmərəlilik",
            "Hisslərin ifadəsi",
            "Məqsədlərinə çata bilməmək",
            "Əməkdaşlığın olmaması"
        ],
        bestStressResponse: [
            "Problemləri analiz etmək",
            "Planlar qurmaq",
            "Fiziki aktivliklə məşğul olmaq",
            "Məqsədlərə fokuslanmaq"
        ],
        othersHelpStress: [
            "Onlara məntiqi dəstək vermək",
            "Problemlərə həll yolları tapmağa kömək etmək",
            "Onların liderlik bacarıqlarını qiymətləndirmək"
        ],
        worstStressResponse: [
            "Həddindən artıq aqressiv olmaq",
            "Hissləri inkar etmək",
            "Başqalarından uzaqlaşmaq",
            "Təkbaşına hər şeyi həll etməyə çalışmaq"
        ],
        othersWorsenStress: [
            "Məntiqsiz arqumentlər irəli sürmək",
            "Onları emosional qərarlar qəbul etməyə məcbur etmək",
            "Onların liderliyini şübhə altına almaq",
            "Münaqişələri emosional yolla həll etməyə çalışmaq"
        ],
        achievingSuccess: "ENTJ-lər iş yerində liderlik və strateji sahələrdə yüksək potensiala malikdirlər. Uğur üçün güclü tərəflərini (qətiyyətli liderlik) maksimum istifadə etməli və zəif tərəflərini (empatiya) inkişaf etdirməlidirlər.",
        potentialProblems: [
            "Həddindən artıq tələbkar olmaq",
            "Empatiyanın az olması",
            "Başqalarının fikirlərinə kifayət qədər qulaq asmamaq"
        ],
        suggestionsDo: [
            "Daha çox empatiya göstərmək",
            "Komanda üzvlərini dinləmək",
            "Daha çevik olmaq",
            "Delegasiya etməyi öyrənmək"
        ],
        suggestionsDont: [
            "Həddindən artıq sərt olmaq",
            "Hissləri gözardı etmək",
            "Hər şeyi öz üzərinizə götürmək"
        ]
    },
    "ENTP": {
        name: "Debatçı (The Debater)",
        summary: "ENTP-lər ağıllı, çevik və yenilikçi şəxslərdir. Onlar mübahisə etməyi, ideyaları araşdırmağı və fərqli perspektivləri nəzərdən keçirməyi sevirlər. Bəzən praktikadan uzaq ola bilərlər.",
        workplacePersonality: "ENTP olaraq siz intellektual, maraqlı və yenilikçi birisiniz. Yeni ideyaları araşdırmağı, status-kvoya meydan oxumağı və mövcud sistemləri təkmilləşdirməyi sevirsiniz. Bəzən həddindən artıq mübahisəçi və ya qərarsız görünə bilərsiniz.",
        keyMotivators: [
            "Yeni ideyalar yaratmaq",
            "Problemləri innovativ şəkildə həll etmək",
            "Müzakirələr aparmaq",
            "Status-kvoya meydan oxumaq"
        ],
        idealWorkEnvironment: [
            "İdeyaların sərbəst axdığı mühit",
            "Yenilikçiliyin təşviq edildiyi yer",
            "Çevik və qeyri-rəsmi iş şəraiti",
            "Mübahisə və diskussiyalara açıq mühit"
        ],
        coreValues: [
            "Yenilikçilik",
            "Məntiq",
            "Müstəqillik",
            "Azadlıq"
        ],
        preferredWorkTasks: [
            "Beyin fırtınası seansları",
            "Yeni layihələrin konsepsiyası",
            "Mürəkkəb problemlərin araşdırılması",
            "Dəyişikliklərin idarə edilməsi"
        ],
        contributionsToOrganization: [
            "Orijinal ideyalar təklif etmək",
            "Mürəkkəb problemlərə qeyri-ənənəvi həllər tapmaq",
            "Yeni perspektivlər gətirmək",
            "Dəyişiklikləri təşviq etmək"
        ],
        workingWithTeam: "ENTP-lər komanda işində əsasən ideya generatoru və müzakirə aparıcısı kimi çıxış edirlər. Onlar komandaya yeni yanaşmalar təklif edir, lakin bəzən detalları gözardı edə və ya işləri yarımçıq qoya bilərlər.",
        teamHelp: [
            "Yeni və innovativ ideyalar təklif etmək",
            "Mürəkkəb problemlərə qeyri-ənənəvi həllər tapmaq",
            "Müzakirələrə rəhbərlik etmək"
        ],
        teamIrritate: [
            "Həddindən artıq mübahisəçi olmaq",
            "Detalları gözardı etmək",
            "Qərarsız görünmək",
            "İşləri yarımçıq qoymaq"
        ],
        teamActionSteps: [
            "Qərarları daha tez qəbul etməyə çalışmaq",
            "Detallara daha çox diqqət yetirmək",
            "Başqalarının hisslərinə qarşı daha həssas olmaq"
        ],
        communicatingWithOthers: "ENTP-lər ünsiyyətdə dinamik, ağıllı və bəzən sarkastik ola bilərlər. Onlar mübahisələri sevir və ideyalarını inandırıcı şəkildə təqdim edirlər.",
        communicationStrengths: [
            "Ağıllı və çevik ünsiyyət",
            "İnandırıcı arqumentasiya",
            "Yeni ideyaları aydın şəkildə izah etmək"
        ],
        communicationMisunderstanding: [
            "Həddindən artıq mübahisəçi olmaq",
            "Hissləri gözardı etmək",
            "Bəzən səthi görünmək"
        ],
        communicationActionSteps: [
            "Daha az mübahisə etməyə çalışmaq",
            "Başqalarının fikirlərini dinləmək",
            "Daha az sarkastik olmaq"
        ],
        managingConflict: "ENTP-lər münaqişələri intellektual oyun kimi görür və onları müzakirə yolu ilə həll etməyə çalışırlar. Onlar münaqişəni ideyaları sınaqdan keçirmək üçün bir fürsət kimi qəbul edirlər.",
        conflictHelp: [
            "Münaqişələrə yeni perspektivlər gətirmək",
            "Problemləri məntiqi şəkildə analiz etmək",
            "Fərqli fikirlər arasında kompromis tapmaq"
        ],
        conflictTriggeredBy: [
            "Rutin və darıxdırıcı vəziyyətlər",
            "İdeyaların məhdudlaşdırılması",
            "Məntiqsiz qərarlar",
            "Təzyiq altında qərar qəbul etmək"
        ],
        conflictIrritate: [
            "Həddindən artıq mübahisəçi olmaq",
            "Emosiyaları gözardı etmək",
            "Qərarsız görünmək",
            "Mübahisəni uzatmaq"
        ],
        conflictActionSteps: [
            "Hissləri nəzərə almağı öyrənmək",
            "Daha tez qərar qəbul etməyə çalışmaq",
            "Münaqişələri şəxsi qəbul etməmək"
        ],
        takingTheLead: "ENTP-lər lider kimi yenilikçi və ilhamverici olurlar. Onlar komandalarını yeni ideyalarla motivasiya edir, lakin bəzən idarəetmə detallarına o qədər də fokuslanmırlar.",
        inspireOthers: [
            "Yeni və innovativ ideyalarla ilhamlandırmaq",
            "Azad düşüncəni təşviq etmək",
            "Mübahisələrlə maraq oyatmaq"
        ],
        makeThingsHappen: [
            "Yeni layihələr başlatmaq",
            "Mürəkkəb problemləri həll etmək",
            "Yenilikləri tətbiq etmək"
        ],
        leadershipDevelopment: [
            "Detallara daha çox diqqət yetirmək",
            "Planlaşdırma bacarıqlarını inkişaf etdirmək",
            "Qərarlarda daha qətiyyətli olmaq"
        ],
        makingDecisions: "ENTP-lər qərarları spontan və çevik şəkildə verirlər. Onlar bütün mümkün variantları araşdırmağı sevirlər, lakin bəzən qərarsız ola bilərlər.",
        decisionStrengths: [
            "Çevik və spontan qərarlar",
            "Bütün variantları araşdırma",
            "Yenilikçi yanaşma"
        ],
        decisionChallenges: [
            "Qərarsızlıq",
            "Son tarixlərə diqqət yetirməmək",
            "Praktik tətbiqi gözardı etmək"
        ],
        decisionActionSteps: [
            "Qərar qəbul etmək üçün son tarixlər qoymaq",
            "Daha qətiyyətli olmaq",
            "Qərarların praktik nəticələrini düşünmək"
        ],
        gettingThingsDone: "ENTP-lər işləri həyata keçirməkdə yaradıcı və dinamikdirlər. Onlar yeni ideyaları başlatmağı sevir, lakin rutin və detallı işlərdən tez darıxa bilərlər.",
        tasksHelp: [
            "Yeni layihələr başlatmaq",
            "Mürəkkəb problemləri həll etmək",
            "Yenilikləri tətbiq etmək"
        ],
        tasksIrritate: [
            "Detallara diqqət yetirməmək",
            "Rutin işlərdən sıxılmaq",
            "İşləri yarımçıq qoymaq"
        ],
        tasksActionSteps: [
            "Detallara daha çox diqqət yetirmək",
            "Planlaşdırma bacarıqlarını inkişaf etdirmək",
            "İşləri başlamaqdan çox bitirməyə fokuslanmaq"
        ],
        growthAndDevelopment: "ENTP-lər bilik toplamağa və intellektual cəhətdən inkişaf etməyə can atırlar. Onlar yeni ideyaları və nəzəriyyələri öyrənməyi sevirlər.",
        learningImproved: [
            "Yeni ideyalar və nəzəriyyələr",
            "Müzakirələr və debat",
            "Qeyri-ənənəvi öyrənmə metodları"
        ],
        learningHindered: [
            "Rutin və təkrarlanan materiallar",
            "Çox formal öyrənmə mühiti",
            "Praktik tətbiqi olmayan nəzəriyyələr"
        ],
        howYouViewChange: [
            "Dəyişikliyə açıqdırlar və onu bir fürsət kimi görürlər",
            "Dəyişiklikləri təşviq edirlər",
            "Yeni imkanları araşdırmağı sevirlər"
        ],
        opportunitiesForGrowth: [
            "Detallara diqqət yetirmək",
            "Qərarlarda daha qətiyyətli olmaq",
            "Başqalarının hisslərinə qarşı daha həssas olmaq",
            "İşləri bitirməyə fokuslanmaq"
        ],
        copingWithStress: "ENTP-lər stress altında daha mübahisəçi, qərarsız və ya səthi ola bilərlər. Onlar stressi intellektual oyun kimi qəbul edir və problemləri müzakirə yolu ilə həll etməyə çalışırlar.",
        stressTriggers: [
            "Rutin və darıxdırıcı işlər",
            "İdeyaların məhdudlaşdırılması",
            "Məntiqsiz qərarlar",
            "Təzyiq altında qərar qəbul etmək"
        ],
        bestStressResponse: [
            "Yeni ideyalar üzərində düşünmək",
            "Müzakirələr aparmaq",
            "Problemləri analiz etmək",
            "Yaradıcı fəaliyyətlərlə məşğul olmaq"
        ],
        othersHelpStress: [
            "Onlara intellektual stimullaşdırma vermək",
            "Onların ideyalarına qulaq asmaq",
            "Mübahisələrə açıq olmaq"
        ],
        worstStressResponse: [
            "Həddindən artıq mübahisəçi olmaq",
            "Detalları gözardı etmək",
            "Qərarsız görünmək",
            "Hissləri inkar etmək"
        ],
        othersWorsenStress: [
            "Rutin və darıxdırıcı işlərə məcbur etmək",
            "İdeyalarını rədd etmək",
            "Məntiqsiz arqumentlər irəli sürmək",
            "Emosional təzyiqlər tətbiq etmək"
        ],
        achievingSuccess: "ENTP-lər iş yerində yenilikçilik və problem həll etmə sahələrində yüksək potensiala malikdirlər. Uğur üçün güclü tərəflərini (yaradıcılıq) maksimum istifadə etməli və zəif tərəflərini (detal işləri) inkişaf etdirməlidirlər.",
        potentialProblems: [
            "Detalları gözardı etmək",
            "Rutin işlərdən sıxılmaq",
            "İşləri yarımçıq qoymaq"
        ],
        suggestionsDo: [
            "Detallara diqqət yetirmək",
            "Qərarlarda daha qətiyyətli olmaq",
            "İşləri bitirməyə fokuslanmaq",
            "Daha çox dinləməyə çalışmaq"
        ],
        suggestionsDont: [
            "Həddindən artıq mübahisəçi olmaq",
            "Hissləri gözardı etmək",
            "Hər şeyi öz üzərinizə götürmək"
        ]
    },
    "INFJ": {
        name: "Vəkil (The Advocate)",
        summary: "INFJ-lər idealist, intuitiv və empatik şəxslərdir. Onlar dərin mənalar axtarır, başqalarına kömək etməyi sevir və güclü dəyərlərə sahibdirlər. Bəzən həddindən artıq idealist ola bilərlər.",
        workplacePersonality: "INFJ olaraq siz idealist, vizyoner və dəyərlərinizə sadiq birisiniz. İnsanlara dərin qayğı göstərir, başqalarına kömək etməyi sevir və dünyanı daha yaxşı bir yerə çevirməyə çalışırsınız. Bəzən həddindən artıq həssas və ya yorğun görünə bilərsiniz.",
        keyMotivators: [
            "Məqsədyönlü işlər görmək",
            "Başqalarına kömək etmək",
            "Dəyərlərinə sadiq qalmaq",
            "Dərin əlaqələr qurmaq"
        ],
        idealWorkEnvironment: [
            "Dəyərlərinə uyğun iş mühiti",
            "Empatiya və əməkdaşlığın olduğu yer",
            "Məqsədyönlü layihələr",
            "Sakit və dəstəkləyici şərait"
        ],
        coreValues: [
            "Empatiya",
            "Dəyərlərə sədaqət",
            "Məqsədyönlülük",
            "İnkişaf"
        ],
        preferredWorkTasks: [
            "Məsləhətçilik",
            "Yaradıcı layihələr",
            "İnsan inkişafı",
            "Strateji planlaşdırma (dəyərlər əsasında)"
        ],
        contributionsToOrganization: [
            "Məqsədyönlü və dəyərlərə əsaslanan vizyon təmin etmək",
            "Komanda daxilində harmoniyanı təşviq etmək",
            "Başqalarına kömək etmək",
            "Uzunmüddətli perspektiv təqdim etmək"
        ],
        workingWithTeam: "INFJ-lər komandada dəstəkləyici və harmonik bir üzv olurlar. Onlar komanda üzvlərinin hisslərinə qarşı həssasdırlar və ümumi məqsədlərə çatmaq üçün əməkdaşlığa üstünlük verirlər.",
        teamHelp: [
            "Komandaya empatiya və dəstək təmin etmək",
            "Münaqişələri həll etməyə kömək etmək",
            "Ümumi məqsədlərə doğru yönəltmək"
        ],
        teamIrritate: [
            "Həddindən artıq idealist olmaq",
            "Tənqidə qarşı həssas olmaq",
            "Bəzən geri çəkilmək",
            "Praktik detalları gözardı etmək"
        ],
        teamActionSteps: [
            "Daha realistik məqsədlər qoymaq",
            "Tənqidləri şəxsi qəbul etməmək",
            "Daha açıq ünsiyyət qurmağa çalışmaq"
        ],
        communicatingWithOthers: "INFJ-lər ünsiyyətdə dərin, mənalı və empatikdirlər. Onlar başqalarının hisslərinə qarşı həssasdırlar və söhbətlərində daha çox məna axtarırlar.",
        communicationStrengths: [
            "Dərin və mənalı ünsiyyət",
            "Empatik dinləmə",
            "Hissləri ifadə etmə bacarığı"
        ],
        communicationMisunderstanding: [
            "Həddindən artıq idealist olmaq",
            "Praktik detalları gözardı etmək",
            "Bəzən qapalı görünmək"
        ],
        communicationActionSteps: [
            "Daha praktik dil istifadə etmək",
            "Başqalarının perspektivlərini anlamağa çalışmaq",
            "Daha açıq fikirli olmaq"
        ],
        managingConflict: "INFJ-lər münaqişələrdən çəkinir və harmoniyanı qorumağa çalışırlar. Onlar münaqişəni şəxsi qəbul edə bilər və ya həddindən artıq emosional reaksiya verə bilərlər.",
        conflictHelp: [
            "Harmoniyanı təşviq etmək",
            "Empatik yanaşma",
            "Münaqişələri dəyərlər əsasında həll etməyə çalışmaq"
        ],
        conflictTriggeredBy: [
            "Dəyərlərinin pozulması",
            "Ədalətsizlik",
            "Şəxsi hücumlara məruz qalmaq",
            "Harmoniyanın pozulması"
        ],
        conflictIrritate: [
            "Münaqişədən qaçmaq",
            "Həddindən artıq həssas olmaq",
            "Problemləri şəxsi qəbul etmək",
            "Mübahisəni uzatmaq"
        ],
        conflictActionSteps: [
            "Münaqişələri daha obyektiv qəbul etmək",
            "Hissləri idarə etməyi öyrənmək",
            "Daha açıq şəkildə ünsiyyət qurmaq"
        ],
        takingTheLead: "INFJ-lər lider kimi ilhamverici və dəyərlərə sadiq olurlar. Onlar komandalarını ümumi məqsədlərə doğru yönəldir və onlara dəstək verirlər.",
        inspireOthers: [
            "Dəyərlərə əsaslanan vizyonla ilhamlandırmaq",
            "Empatiya və dəstək göstərmək",
            "Ümumi məqsədlərə doğru yönəltmək"
        ],
        makeThingsHappen: [
            "Dəyərlərinə uyğun planlar qurmaq",
            "İnsanları motivasiya etmək",
            "Problemlərə yaradıcı həllər tapmaq"
        ],
        leadershipDevelopment: [
            "Daha realistik məqsədlər qoymaq",
            "Daha çox qətiyyət göstərmək",
            "Tənqidləri obyektiv qəbul etmək"
        ],
        makingDecisions: "INFJ-lər qərarları dəyərlərinə və hisslərinə əsasən verirlər. Onlar başqalarının ehtiyaclarını nəzərə alır, lakin bəzən praktik faktları gözardı edə bilərlər.",
        decisionStrengths: [
            "Dəyərlərə əsaslanan qərarlar",
            "Empatik yanaşma",
            "Uzunmüddətli perspektiv"
        ],
        decisionChallenges: [
            "Praktik faktları gözardı etmək",
            "Həddindən artıq həssas olmaq",
            "Qərarsızlıq"
        ],
        decisionActionSteps: [
            "Daha çox məlumat toplamaq",
            "Faktlara diqqət yetirmək",
            "Daha qətiyyətli olmaq"
        ],
        gettingThingsDone: "INFJ-lər işləri həyata keçirməkdə məqsədyönlü və dəyərlərinə sadiqdir. Onlar layihələrə dərin məna qatır və onları bitirməyə çalışırlar.",
        tasksHelp: [
            "Məqsədyönlü layihələr başlatmaq",
            "Komandaya dəstək vermək",
            "Problemlərə yaradıcı həllər tapmaq"
        ],
        tasksIrritate: [
            "Rutin işlərdən sıxılmaq",
            "Praktik detalları gözardı etmək",
            "Tənqidə qarşı həssas olmaq"
        ],
        tasksActionSteps: [
            "Detallara diqqət yetirmək",
            "Planlaşdırma bacarıqlarını inkişaf etdirmək",
            "Daha realistik məqsədlər qoymaq"
        ],
        growthAndDevelopment: "INFJ-lər dərin intellektual və emosional inkişafa can atırlar. Onlar mənalı mövzuları öyrənməyi və şəxsi dəyərlərinə uyğun inkişaf etməyi sevirlər.",
        learningImproved: [
            "Dəyərlərə əsaslanan materiallar",
            "Dərin müzakirələr",
            "Fərdi inkişaf mövzuları"
        ],
        learningHindered: [
            "Çox praktik və ya formal mühit",
            "Hissləri ifadə etməyə imkan verilməməsi",
            "Əhəmiyyətsiz görünən mövzular"
        ],
        howYouViewChange: [
            "Dəyişikliyə ehtiyatla yanaşırlar, xüsusilə də onun insanlara təsirini düşünürlər",
            "Dəyişikliyi dəyərlərinə uyğun gələrsə qəbul edirlər",
            "Dəyişikliyin məqsədini anlamağa çalışırlar"
        ],
        opportunitiesForGrowth: [
            "Daha realistik olmaq",
            "Tənqidləri şəxsi qəbul etməmək",
            "Daha çox açıq ünsiyyət qurmaq",
            "Daha qətiyyətli olmaq"
        ],
        copingWithStress: "INFJ-lər stress altında özlərini təcrid edə, həddindən artıq həssas və ya yorğun ola bilərlər. Onlar stressi dərin emosional səviyyədə hiss edirlər.",
        stressTriggers: [
            "Dəyərlərinin pozulması",
            "Ədalətsizlik",
            "Harmoniyanın pozulması",
            "Həddindən artıq sosial təzyiq"
        ],
        bestStressResponse: [
            "Tək vaxt keçirmək",
            "Problemləri analiz etmək",
            "Dərin düşünmək",
            "Hissləri ifadə etmək (etibarlı insanlarla)"
        ],
        othersHelpStress: [
            "Onlara dəstək və empatiya vermək",
            "Onların hisslərini dinləmək",
            "Onlara şəxsi məkan vermək"
        ],
        worstStressResponse: [
            "Həddindən artıq həssas olmaq",
            "Problemləri şəxsi qəbul etmək",
            "Təcrid olmaq",
            "Münaqişədən qaçmaq"
        ],
        othersWorsenStress: [
            "Hisslərinə əhəmiyyət verməmək",
            "Onları tənqid etmək",
            "Onları sosial fəaliyyətlərə məcbur etmək",
            "Dəyərlərini şübhə altına almaq"
        ],
        achievingSuccess: "INFJ-lər iş yerində dəyərlərə əsaslanan və məqsədyönlü fəaliyyətlərdə yüksək potensiala malikdirlər. Uğur üçün güclü tərəflərini (empatiya, vizyon) maksimum istifadə etməli və zəif tərəflərini (praktiklik, tənqidə həssaslıq) inkişaf etdirməlidirlər.",
        potentialProblems: [
            "Həddindən artıq idealist olmaq",
            "Tənqidə qarşı həssas olmaq",
            "Praktik detalları gözardı etmək"
        ],
        suggestionsDo: [
            "Daha realistik olmaq",
            "Tənqidləri obyektiv qəbul etmək",
            "Daha çox açıq ünsiyyət qurmaq",
            "Daha qətiyyətli olmaq"
        ],
        suggestionsDont: [
            "Hissləri inkar etmək",
            "Hər şeyi şəxsi qəbul etmək",
            "Təcrid olmaq",
            "Problemlərdən qaçmaq"
        ]
    },
    "INFP": {
        name: "Vasitəçi (The Mediator)",
        summary: "INFP-lər yaradıcı, idealist və dəyərlərə sadiq şəxslərdir. Onlar dərin hisslərə malikdir, dünyanı daha yaxşı etməyə çalışır və öz dəyərlərinə uyğun yaşayırlar. Bəzən praktik tərəfi zəif ola bilər.",
        workplacePersonality: "INFP olaraq siz yaradıcı, idealist və dəyərlərinizə sadiq birisiniz. Mənalı işlər görməyə, dünyanı daha yaxşı bir yerə çevirməyə və öz daxili dəyərlərinizə uyğun yaşamağa can atırsınız. Bəzən praktik detallardan uzaq və ya qərarsız görünə bilərsiniz.",
        keyMotivators: [
            "Dəyərlərə uyğun işlər görmək",
            "Yaradıcı fəaliyyətlər",
            "Mənalı əlaqələr qurmaq",
            "Başqalarına ilham vermək"
        ],
        idealWorkEnvironment: [
            "Yaradıcılığın təşviq edildiyi mühit",
            "Dəyərlərə hörmət edən şərait",
            "Rutin işlərin az olduğu yer",
            "Fərdi ifadəyə imkan verən mühit"
        ],
        coreValues: [
            "Orijinallıq",
            "Empatiya",
            "Sadiq",
            "İdealizm"
        ],
        preferredWorkTasks: [
            "Yaradıcı yazıçılıq",
            "Məsləhətçilik",
            "İncəsənət və dizayn",
            "Sosial iş"
        ],
        contributionsToOrganization: [
            "Yeni və yaradıcı ideyalar təklif etmək",
            "Harmonik iş mühiti yaratmaq",
            "Başqalarına empatiya göstərmək",
            "Dəyərlərə əsaslanan qərarlar qəbul etmək"
        ],
        workingWithTeam: "INFP-lər komandada dəstəkləyici, yaradıcı və empatik bir üzv olurlar. Onlar komanda daxilində harmoniyanı qiymətləndirir və fərqli fikirləri qəbul edirlər.",
        teamHelp: [
            "Komandaya yaradıcı ideyalar təklif etmək",
            "Harmonik mühit yaratmaq",
            "Empatiya və dəstək göstərmək"
        ],
        teamIrritate: [
            "Praktik detalları gözardı etmək",
            "Qərarsız görünmək",
            "Tənqidə qarşı həssas olmaq",
            "Münaqişələrdən qaçmaq"
        ],
        teamActionSteps: [
            "Daha realistik məqsədlər qoymaq",
            "Tənqidləri şəxsi qəbul etməmək",
            "Daha açıq ünsiyyət qurmağa çalışmaq"
        ],
        communicatingWithOthers: "INFP-lər ünsiyyətdə dərin, mənalı və bəzən poetikdirlər. Onlar öz dəyərlərini və hisslərini ifadə etməyi sevirlər, lakin bəzən abstrakt və ya qeyri-praktik ola bilərlər.",
        communicationStrengths: [
            "Dərin və mənalı ünsiyyət",
            "Empatik dinləmə",
            "Yaradıcı ifadə"
        ],
        communicationMisunderstanding: [
            "Həddindən artıq idealist olmaq",
            "Praktik detalları gözardı etmək",
            "Bəzən qapalı görünmək"
        ],
        communicationActionSteps: [
            "Daha praktik dil istifadə etmək",
            "Başqalarının perspektivlərini anlamağa çalışmaq",
            "Daha açıq fikirli olmaq"
        ],
        managingConflict: "INFP-lər münaqişələrdən çəkinir və harmoniyanı qorumağa çalışırlar. Onlar münaqişəni şəxsi qəbul edə bilər və ya həddindən artıq emosional reaksiya verə bilərlər.",
        conflictHelp: [
            "Harmoniyanı təşviq etmək",
            "Empatik yanaşma",
            "Münaqişələri dəyərlər əsasında həll etməyə çalışmaq"
        ],
        conflictTriggeredBy: [
            "Dəyərlərinin pozulması",
            "Ədalətsizlik",
            "Şəxsi hücumlara məruz qalmaq",
            "Harmoniyanın pozulması"
        ],
        conflictIrritate: [
            "Münaqişədən qaçmaq",
            "Həddindən artıq həssas olmaq",
            "Problemləri şəxsi qəbul etmək",
            "Mübahisəni uzatmaq"
        ],
        conflictActionSteps: [
            "Münaqişələri daha obyektiv qəbul etmək",
            "Hissləri idarə etməyi öyrənmək",
            "Daha açıq şəkildə ünsiyyət qurmaq"
        ],
        takingTheLead: "INFP-lər lider kimi ilhamverici və dəyərlərə sadiq olurlar. Onlar komandalarını ümumi məqsədlərə doğru yönəldir və onlara dəstək verirlər.",
        inspireOthers: [
            "Dəyərlərə əsaslanan vizyonla ilhamlandırmaq",
            "Empatiya və dəstək göstərmək",
            "Ümumi məqsədlərə doğru yönəltmək"
        ],
        makeThingsHappen: [
            "Dəyərlərinə uyğun planlar qurmaq",
            "İnsanları motivasiya etmək",
            "Problemlərə yaradıcı həllər tapmaq"
        ],
        leadershipDevelopment: [
            "Daha realistik məqsədlər qoymaq",
            "Daha çox qətiyyət göstərmək",
            "Tənqidləri obyektiv qəbul etmək"
        ],
        makingDecisions: "INFP-lər qərarları dəyərlərinə və hisslərinə əsasən verirlər. Onlar başqalarının ehtiyaclarını nəzərə alır, lakin bəzən praktik faktları gözardı edə bilərlər.",
        decisionStrengths: [
            "Dəyərlərə əsaslanan qərarlar",
            "Empatik yanaşma",
            "Uzunmüddətli perspektiv"
        ],
        decisionChallenges: [
            "Praktik faktları gözardı etmək",
            "Həddindən artıq həssas olmaq",
            "Qərarsızlıq"
        ],
        decisionActionSteps: [
            "Daha çox məlumat toplamaq",
            "Faktlara diqqət yetirmək",
            "Daha qətiyyətli olmaq"
        ],
        gettingThingsDone: "INFP-lər işləri həyata keçirməkdə yaradıcı və dəyərlərinə sadiqdir. Onlar layihələrə dərin məna qatır və onları bitirməyə çalışırlar.",
        tasksHelp: [
            "Məqsədyönlü layihələr başlatmaq",
            "Komandaya dəstək vermək",
            "Problemlərə yaradıcı həllər tapmaq"
        ],
        tasksIrritate: [
            "Rutin işlərdən sıxılmaq",
            "Praktik detalları gözardı etmək",
            "Tənqidə qarşı həssas olmaq"
        ],
        tasksActionSteps: [
            "Detallara diqqət yetirmək",
            "Planlaşdırma bacarıqlarını inkişaf etdirmək",
            "Daha realistik məqsədlər qoymaq"
        ],
        growthAndDevelopment: "INFP-lər dərin intellektual və emosional inkişafa can atırlar. Onlar mənalı mövzuları öyrənməyi və şəxsi dəyərlərinə uyğun inkişaf etməyi sevirlər.",
        learningImproved: [
            "Dəyərlərə əsaslanan materiallar",
            "Dərin müzakirələr",
            "Fərdi inkişaf mövzuları"
        ],
        learningHindered: [
            "Çox praktik və ya formal mühit",
            "Hissləri ifadə etməyə imkan verilməməsi",
            "Əhəmiyyətsiz görünən mövzular"
        ],
        howYouViewChange: [
            "Dəyişikliyə ehtiyatla yanaşırlar, xüsusilə də onun insanlara təsirini düşünürlər",
            "Dəyişikliyi dəyərlərinə uyğun gələrsə qəbul edirlər",
            "Dəyişikliyin məqsədini anlamağa çalışırlar"
        ],
        opportunitiesForGrowth: [
            "Daha realistik olmaq",
            "Tənqidləri şəxsi qəbul etməmək",
            "Daha çox açıq ünsiyyət qurmaq",
            "Daha qətiyyətli olmaq"
        ],
        copingWithStress: "INFP-lər stress altında özlərini təcrid edə, həddindən artıq həssas və ya yorğun ola bilərlər. Onlar stressi dərin emosional səviyyədə hiss edirlər.",
        stressTriggers: [
            "Dəyərlərinin pozulması",
            "Ədalətsizlik",
            "Harmoniyanın pozulması",
            "Həddindən artıq sosial təzyiq"
        ],
        bestStressResponse: [
            "Tək vaxt keçirmək",
            "Problemləri analiz etmək",
            "Dərin düşünmək",
            "Hissləri ifadə etmək (etibarlı insanlarla)"
        ],
        othersHelpStress: [
            "Onlara dəstək və empatiya vermək",
            "Onların hisslərini dinləmək",
            "Onlara şəxsi məkan vermək"
        ],
        worstStressResponse: [
            "Həddindən artıq həssas olmaq",
            "Problemləri şəxsi qəbul etmək",
            "Təcrid olmaq",
            "Münaqişədən qaçmaq"
        ],
        othersWorsenStress: [
            "Hisslərinə əhəmiyyət verməmək",
            "Onları tənqid etmək",
            "Onları sosial fəaliyyətlərə məcbur etmək",
            "Dəyərlərini şübhə altına almaq"
        ],
        achievingSuccess: "INFP-lər iş yerində dəyərlərə əsaslanan və yaradıcı fəaliyyətlərdə yüksək potensiala malikdirlər. Uğur üçün güclü tərəflərini (yaradıcılıq, empatiya) maksimum istifadə etməli və zəif tərəflərini (praktiklik, tənqidə həssaslıq) inkişaf etdirməlidirlər.",
        potentialProblems: [
            "Həddindən artıq idealist olmaq",
            "Tənqidə qarşı həssas olmaq",
            "Praktik detalları gözardı etmək"
        ],
        suggestionsDo: [
            "Daha realistik olmaq",
            "Tənqidləri obyektiv qəbul etmək",
            "Daha çox açıq ünsiyyət qurmaq",
            "Daha qətiyyətli olmaq"
        ],
        suggestionsDont: [
            "Hissləri inkar etmək",
            "Hər şeyi şəxsi qəbul etmək",
            "Təcrid olmaq",
            "Problemlərdən qaçmaq"
        ]
    },
    "ENFJ": {
        name: "Qəhrəman (The Protagonist)",
        summary: "ENFJ-lər cazibədar, ilhamverici və başqalarına diqqət yetirən liderlərdir. Onlar insanları motivasiya etməyi və ətrafındakılara kömək etməyi sevir, güclü dəyərlərə sahibdirlər. Bəzən tənqidə həddindən artıq həssas ola bilərlər.",
        workplacePersonality: "ENFJ olaraq siz mehriban, həvəsli, ünsiyyətcil, empatik və dəstəkləyicisiniz. Başqalarına kömək edir və motivasiya edirsiniz, tez-tez iş adınızdan asılı olmayaraq mentor rolunu üzərinizə götürürsünüz. İnandığınız şeyin qızğın tərəfdarısınız, imkanları müdafiə etməkdə və daha parlaq gələcəyə yol açmaqda mahirsiniz. Liderliyə cəlb olunursunuz və ətrafınızdakı insanların rifahını artıran ideyaları həyata keçirməkdən zövq alırsınız. Lakin tənqidə həddindən artıq həssas ola bilər və bəzən sadəlövh və emosional görünə bilərsiniz.",
        keyMotivators: [
            "Müxtəlif problemlərin öhdəsindən gəlmək",
            "Dəyərlərinizə və vizyonunuza sadiq qalmaq",
            "Başqalarına oxumaq və öyrətmək",
            "Müxtəlif insanlarla münasibətlər qurmaq"
        ],
        idealWorkEnvironment: [
            "Şəxsi dəyərlərin təşkilatın missiyası və vizyonu ilə uyğunlaşdığı mühit",
            "Hər kəsin ideyalarını bölüşməyə və inkişaf etdirməyə həvəsləndirildiyi enerjili, insan mərkəzli mühit",
            "İşinizi planlaya və planınıza əməl edə biləcəyiniz yaxşı təşkil olunmuş mühit",
            "Əməkdaşlıq və harmoniyaya can atdığınız, rəqabətli mühitdə çətinlik çəkə biləcəyiniz yer"
        ],
        coreValues: [
            "Altruizm",
            "Orijinallıq",
            "Sədaqət",
            "Komanda işi"
        ],
        preferredWorkTasks: [
            "Optimistik, uzunmüddətli hədəflər və əlaqəli fəaliyyət planları təyin etmək",
            "İnsanların rifahı üçün sistemləri və prosesləri dəyişdirmək",
            "Şəbəkə qurmaq",
            "Komandaları birləşdirmək və motivasiya etmək"
        ],
        contributionsToOrganization: [
            "İnsanları ümumi bir məqsəd ətrafında birləşdirmək",
            "İnkişaf planlarını həyata keçirmək",
            "Komanda üzvlərinin, müştərilərin və maraqlı tərəflərin ehtiyaclarını intuitiv olaraq anlamaq",
            "Başqalarına öz potensiallarını tam reallaşdırmaqda kömək etmək"
        ],
        workingWithTeam: "ENFJ-lər əla insan bacarıqlarına malikdirlər, bəlkə də digər tiplərdən daha çox. Siz insanları anlayır və onlara qayğı göstərirsiniz, daha qapalı olanları belə özünüzə cəlb etmək üçün xüsusi istedadınız var. Dəstəkləyici və empatik olaraq, komandanız üçün işləri reallaşdırmaqdan, hətta başqalarının ehtiyaclarını özünüzünkündən üstün tutmaqdan böyük məmnuniyyət duyursunuz. Bəziləri sizin fədakarlığınıza hörmət edəcək; digərləri isə istifadə edə bilər.",
        teamHelp: [
            "Layihələr və ideyalar haqqında həvəs yaratmaq",
            "Həvəsləndirmə və dəstək təmin etmək",
            "Optimism and energy to the team dynamic",
            "Finding consensus between opposing viewpoints"
        ],
        teamIrritate: [
            "Müəyyən səbəbləri və ya insanları dəstəkləmək üçün cari reallıqlardan yayınmaq",
            "Komandaya sizin qədər töhfə vermədiyini düşündüyünüz insanlara qarşı səbirsiz olmaq",
            "Razılaşmasalar belə, başqalarını öz planlarınıza və sxemlərinizə cəlb etmək",
            "İnsanlar və onların motivləri haqqında ani qərarlar vermək"
        ],
        teamActionSteps: [
            "Yeni ideyalar üzərində düşünmək üçün qrup mühitindən kənarda, başqalarının həddən artıq təsirinə məruz qala biləcəyiniz mühitlərdən uzaqda tək vaxt keçirin",
            "İdealizminizin və insanlara fokuslanmanızın, ani hərəkət və nəticələri üstün tutan insanlar üçün boğucu ola biləcəyini qəbul edin",
            "Şəxsi dəyər sisteminizlə ziddiyyət təşkil edən baxış bucaqlarını inkar etməməyə diqqət edin",
            "Dəyərlərinizin və inanclarınızın kəskinliyinin insanları sizdən uzaqlaşdırmadığına diqqət edin"
        ],
        communicatingWithOthers: "ENFJ-lər xameleon kimi ünsiyyətçilərdir, ünsiyyət tərzlərini dinləyicinin mövcud əhval-ruhiyyəsinə uyğunlaşdırmağı bacarırlar. Cazibədar və ifadəli olaraq, söhbətə qoşulmağa həmişə hazırsınız və tez-tez müxtəlif mövzularda müzakirələr başlayırsınız. Şəbəkələşmə və ictimai çıxış kimi tapşırıqlarda müvəffəq olursunuz, burada auditoriya ilə asan əlaqə qura bilərsiniz. Başqaları sizi 'dilbaz' adlandıra bilər.",
        communicationStrengths: [
            "Nəsə deyilməli olduqda danışmaqdan qorxmursunuz",
            "Başqalarının fikirləri sizinkilərlə ziddiyyət təşkil etsə belə, onların eşidilməsini təmin etmək üçün istedadınız var",
            "Çətin bir vəziyyətə şənlik gətirə bilirsiniz, tez-tez zarafatlar və gülməli hekayələr vasitəsilə ünsiyyət qurursunuz",
            "Ətrafınızdakılara təsir etmək üçün görünmədən bunu etmək kimi nadir bir bacarığınız var"
        ],
        communicationMisunderstanding: [
            "Müzakirələrinizi şəxsi dəyərlər ətrafında cəmləşdirirsiniz və bir ideyanın məntiqi və ya praktiki tətbiqini əhatə edən söhbətləri izləməkdə çətinlik çəkə bilərsiniz",
            "Çox danışaraq başqalarını qıcıqlandıra bilərsiniz",
            "Danışarkən, başqalarının başa düşməyə biləcəyi bənzətmələr, metaforalar və digər mücərrəd dildən istifadə etməyə meyllisiniz",
            "Başqalarının da sizinlə eyni mövqeyə və ya inanclara sahib olduğunu düşünürsünüz və onlar belə olmadıqda çaşqın və ya hətta incinmiş hiss edə bilərsiniz"
        ],
        communicationActionSteps: [
            "Praktik şəkildə ünsiyyət qurmağı öyrənin, məlumatı məntiqi ardıcıllıqla təqdim edin və lazım gəldikdə müsbət və mənfi tərəflərdən istifadə edin",
            "Danışıqlarda, avtomatik olaraq digər insanın sizinlə eyni dəyərlərə və ya məqsədlərə sahib olduğunu düşünməyin",
            "Unutmayın ki, şəxsi dəyərlər həmişə üstün deyil və bəzən ən yaxşı qərar həm də rasional biznes məqsədlərini nəzərə alandır",
            "İnsanları oxumaq və onlara təsir etmək bacarığınızı, onları etmək istəmədikləri bir şeyi etməyə manipulyasiya etmək üçün istifadə etməməyə diqqət edin"
        ],
        managingConflict: "ENFJ-lər harmoniya yaratmaq üçün yorulmadan çalışırlar və fikir ayrılıqlarına dözümlülükləri son dərəcə aşağıdır. Hətta komanda səlis işləmədikdə özünüzü şəxsən məsuliyyətli hiss edə bilərsiniz. Empatik və intuitiv olaraq, başqalarının inanclarını, xüsusiyyətlərini və emosiyalarını öz üzərinizə götürməyə meyllisiniz. Hətta bir münaqişə vəziyyətinə birbaşa cəlb olunmasanız belə, bu yükləri özünüzünkü kimi qəbul edə bilərsiniz.",
        conflictHelp: [
            "Münaqişə həlli üçün isti və dəstəkləyici mühit yaratmaq",
            "Harmoniyanı təşviq etmək üçün vaxtınızı və səylərinizi səxavətlə vermək",
            "İnsanların ehtiyaclarını ödəmək üçün əlinizdən gələni etmək",
            "Qalib/qalib nəticələrə nail olmaq üçün səy göstərmək"
        ],
        conflictTriggeredBy: [
            "Dəyərlərinizə qarşı çıxmaq",
            "Fikirlərinizin nəzərə alınmaması və ya ciddi qəbul edilməməsi",
            "İnsanların rifahını pozan sistemlər və protokollarla bağlı narazılıq"
        ],
        conflictIrritate: [
            "Münaqişədən qaçmaq üçün problemləri halının altına süpürmək",
            "İnsanların problemlərinə həddindən artıq qarışmaq",
            "Tənqidləri şəxsən qəbul etmək, tez-tez neytral şərhləri həddindən artıq ciddi qəbul etmək",
            "İnsanları incitməkdən o qədər narahat olmaq ki, heç vaxt problemin kökünə çata bilməmək"
        ],
        conflictActionSteps: [
            "Münaqişənin normal olduğunu və müsbət dəyişikliklərə səbəb ola biləcək sağlam bir yol olduğunu qəbul etmək",
            "Vəziyyətə obyektiv baxmağı öyrənmək, irəliləməzdən əvvəl bir mübahisənin faktlarını nəzərə almaq",
            "Düzəldici rəyləri şəxsən qəbul etməmək",
            "Prinsiplərinizə sadiq qalmaq istəyinizin kiməsə zərər verib-vermədiyini düşünmək və həm rasional, həm də başqalarının ehtiyaclarını qarşılayan münaqişə həlli yollarını nəzərdən keçirmək"
        ],
        takingTheLead: "ENFJ-lər təşkilatın qəlbini və ağlını qazana bilən ilhamverici liderlərdir. Siz insan vəziyyətlərindən motivasiya alırsınız və insanların rifahı üçün işləri reallaşdıra bildiyiniz zaman inkişaf edirsiniz. Bir lider kimi ən böyük töhfəniz fərdlərin böyüməsini və inkişafını təşviq etmək bacarığınızdır. Uzunmüddətli perspektivdə, məqsədiniz ardıcıllığı, dürüstlüyü və orijinallığı ilə tanınan dünya səviyyəli bir təşkilat qurmaqdır.",
        inspireOthers: [
            "Başqalarını sizə tabe olmağa ilhamlandıran isti və cazibədar bir şəxsiyyətə sahib olmaq",
            "Cəmiyyət dəyərlərini gücləndirmək və insanları ümumi xeyir üçün birlikdə işləməyə təşviq etmək",
            "İnsanlar haqqında son dərəcə yüksək fikrə sahib olmaq və onların sizin gözləntilərinizə uyğun hərəkət edəcəyini fərz etmək",
            "Başqalarının ehtiyaclarına diqqət yetirmək və onların vəziyyətini yaxşılaşdırmaq üçün çox çalışmaq, bu da sizə insanlarınızdan ən yaxşısını almağa imkan verir"
        ],
        makeThingsHappen: [
            "İş üçün doğru insanları tapmaq üçün geniş əlaqə şəbəkənizdən istifadə etmək",
            "Ümumi mənzərəni görmək və insanların izləməsi üçün aydın bir vizyon yaratmaq, onlarla birlikdə məqsədlərinə nail olmaq",
            "Cəza və mükafatla hökmranlıq etməmək; bir tapşırığın öz xatirinə dəyərli olduğunu təlqin etməyi üstün tutmaq",
            "Yaxşı görülmüş bir iş üçün geniş rəhbərlik və qiymətləndirmə təmin etmək"
        ],
        leadershipDevelopment: [
            "Kəskin müəyyən edilmiş dəyər sisteminizin bəzi sahələrdə sizi sərt etməməsinə diqqət yetirmək",
            "Başqalarına verdiyiniz təriflərdə həddindən artıq müsbət, hətta səmimi görünməməyinizə diqqət yetirmək",
            "Mənfi geri bildirim almağa və verməyə açıq olmaq və bunu böyümə imkanı kimi görmək",
            "Şəxsi inkişafa o qədər çox diqqət yetirməmək ki, komandanızın performansını, məhsuldarlığını və son nəticələrini nəzərə almayı unutmaq",
            "Bəzi insanların yaxından idarə olunmağı üstün tutduğunu və işlərini yerinə yetirmək üçün aydın müəyyən edilmiş sistemlərə və cədvəllərə ehtiyac duyduğunu qəbul etmək"
        ],
        makingDecisions: "ENFJ olaraq, qərarları praktik detallara fokuslanmaqdansa, hisslərinizə əsasən verməyə üstünlük verirsiniz. Mühakiməedən meyliniz o deməkdir ki, tapşırıqları bitirmək və qapanma hissi yaratmaq üçün tez qərarlar qəbul etməyi üstün tutursunuz. Lakin, kiminsə gözləntilərini qarşılamaq narahatlığı və ya komanda daxilində münaqişə varsa, bəzən hər şeyi həddindən artıq düşünə və ya kiçik detallara takıla bilərsiniz. Anlayışlı və empatik olaraq, siz intuitiv şəkildə başqalarının ehtiyaclarını qərar qəbul etmənizə daxil edirsiniz, bəzən yoxlanıla bilən faktları gözardı edirsiniz.",
        decisionStrengths: [
            "Başqalarını qərar qəbul etmə prosesinə daxil etməyin yollarını tapmaq və onların hisslərini qorumağa diqqət yetirmək",
            "Qərar qəbul etməyə sərf olunan vaxtı məhdudlaşdırmaq və planları tez və qətiyyətlə həyata keçirmək",
            "Həmişə qalib/qalib nəticəyə nail olmaq üçün qarşılıqlı faydalı həllərə nail olmaq üçün çox çalışmaq",
            "Qərar qəbul etdikdən sonra onu təhlil etmək və başqalarının töhfələrini qiymətləndirmək"
        ],
        decisionChallenges: [
            "İnsanlara prioritet vermək və qərar qəbul etmənin məntiqi və kritik tərəfini gözardı etmək",
            "Bir qərarın nəticəsi haqqında həddindən artıq narahat olmaq, xüsusilə də insanlara təsir etdiyi zaman",
            "Konsensus üçün o qədər səy göstərmək ki, qərar qəbul etmək qeyri-mümkün olsun",
            "Qərarlarınızı özünüzün və ya başqalarının şəxsi seçimlərinin təsiri altında saxlamaq"
        ],
        decisionActionSteps: [
            "Variantları məntiqi, eləcə də diplomatik şəkildə araşdırmağı öyrənmək və bu anlayışı qərar qəbul etmənizə əlavə etmək",
            "Bütün məlumatları toplamağa kifayət qədər vaxt ayırdığınızdan əmin olun ki, çox tez qərar qəbul etməyəsiniz",
            "Şəxsi inanclarınız və dəyərlərinizlə uyğun gəlməyən digər baxış bucaqlarını nəzərə almağın yollarını araşdırmaq"
        ],
        gettingThingsDone: "ENFJ-lər layihələrə yanaşmada tapşırıq yönümlü və stratejidirlər. Bir layihəyə baxıb onu necə icra edəcəyinizi və sizə verilən resursları necə idarə edəcəyinizi intuitiv olaraq bilə bilərsiniz. Çalışqan və məsuliyyətli olaraq, məqsədləri həyata keçirməkdə çox əməkdaşsınız və hər kəsin eyni istiqamətdə hərəkət etməsini təmin etmək üçün əhəmiyyətli ünsiyyət bacarıqlarınızdan istifadə edirsiniz. Lakin darıxmaq bir problem ola bilər, çünki qapanma üçün son tarixi olmayan uzunmüddətli bir tapşırıqla qarşılaşdıqda tez-tez narahat hiss edirsiniz.",
        tasksHelp: [
            "Layihə haqqında həvəs yaymaq",
            "İşi vaxtında və büdcə daxilində etibarlı şəkildə təqdim etmək",
            "Məqsədə nail olmaq üçün insanları və resursları təşkil etmək",
            "Birdən çox məsuliyyəti həvəslə öz üzərinə götürmək"
        ],
        tasksIrritate: [
            "Nəticələrdən çox insanlara və prosesə maraqlanmaq",
            "Əhval-ruhiyyəni yüksəltməklə o qədər məşğul olmaq ki, layihə məqsədini itirmək",
            "Həddindən artıq çox öhdəlik götürmək, yalnız detalları əldən vermək və ya layihə tamamlanmadan yanmaq",
            "Qeyri-kafi performansa göz yummaq"
        ],
        tasksActionSteps: [
            "Layihəni qəbul etməzdən əvvəl bir tapşırığı öz üzərinizə götürmək qabiliyyətinizi qiymətləndirmək",
            "İnsanlara və prosesə o qədər çox diqqət yetirməməyinizə əmin olun ki, layihə məqsədini unudasınız",
            "Layihəyə başlamazdan əvvəl hər hansı bir əsas münasibət problemini həll edin ki, irəlidə ləngimələr və təxirə salmaların qarşısını alasınız",
            "Şəxsi münasibətlər naminə performansı kompromisə salmadığınıza diqqət yetirin"
        ],
        growthAndDevelopment: "ENFJ-lər qruplar və ya fərdlər üçün müsbət dəyişikliklərə səbəb olacaq hər hansı yeni bacarığı öyrənməyə həvəslidirlər. Siz həm konsepsiyaları, həm də konkret məlumatları tez qavrayırsınız, bu da o deməkdir ki, yeni material haqqında böyük genişlik və dərinlikdə anlayış inkişaf etdirirsiniz. Bir ekstravert olaraq, müzakirə yolu ilə öyrənməkdən və başqaları ilə fikir mübadiləsi etməkdən zövq alırsınız. Güclü insan yönümlüyünüz o deməkdir ki, material şəxsi xarakterli mövzulara deyil, qeyri-şəxsi faktlara əsaslandıqda öyrənmə ehtimalınız daha azdır.",
        learningImproved: [
            "Material insanların müsbət nəticələrinə səbəb olduqda",
            "Öyrənmə proqramı əməkdaşlıq və müzakirə imkanları ehtiva etdikdə",
            "Öyrənmə həm sistemli, həm də sürətli şəkildə çatdırıldıqda",
            "Qrup layihəsində liderlik etməyə icazə verildikdə"
        ],
        learningHindered: [
            "Materialın vizyonunuz və ya dəyərlərinizlə güclü bir əlaqəsi olmadıqda",
            "Material sırf praktik olduqda və ya konkret detallara fokuslandıqda",
            "Təlimatçılar müsbət həvəsləndirmə və geri bildirim vermədikdə",
            "Problemləri təhlil edərkən yaradıcılığınızı və anlayışınızı istifadə etmək üçün məhdud imkanlar olduqda"
        ],
        howYouViewChange: [
            "Dəyişikliyə və onun insanlara təsirinə qarşı ehtiyatlı olursunuz",
            "Adətən yeni bir fəaliyyət kursuna başlamazdan əvvəl böyük mənzərəni və detalları bilmək istəyirsiniz",
            "Təşkilata dəyər qatan və əlaqədar insanlar üçün mənalı olan dəyişikliyə açıqsınız"
        ],
        opportunitiesForGrowth: [
            "Qərar qəbul etmənizə obyektivlik əlavə etməyin yollarını araşdırmaq",
            "Ünsiyyətdə faktlar və konkret nümunələrdən istifadə etmək",
            "İdealizminizin və altruizminizin bir aktivdən çox bir məsuliyyət olduğu vəziyyətləri tanımaq və ya qarşısını almaq",
            "Tənqidi qəbul etməyi və onu şəxsi inkişaf üçün bir fürsət kimi istifadə etməyi öyrənmək",
            "Təşkilati ehtiyaca əsaslanan prioritetlər təyin etmək və onlara sadiq qalmaq"
        ],
        copingWithStress: "ENFJ-lər tarazlığa nail olmağa çalışırlar və harmoniya təhdid edildikdə və ya pozulduqda pis reaksiya verə bilərlər. Həddindən artıq stress şəxsiyyətinizin müəyyən cəhətlərinin şişirdilməsinə səbəb ola bilər. Bacarıqlarınıza və ya zəkanızda şübhə edə və özünüzə və başqalarına qarşı mühakiməedici ola bilərsiniz. Qərar qəbul etmənizdə qeyri-çevik ola bilərsiniz. Və ya başqalarına qarşı güclü xasiyyət göstərə, əmr edən və təzyiq edən ola bilər, ya da düşünmədən sərt sözlər söyləyə bilərsiniz. İşinizdəki stressləri həmişə idarə edə bilməyə bilərsiniz, lakin onlarla konstruktiv şəkildə mübarizə aparmağı öyrənmək bu mənfi reaksiyaları minimuma endirməyə kömək edə bilər.",
        stressTriggers: [
            "Dəyərlərinizin sorğulanması və ya pozulması",
            "Əməkdaşlıq etməyən və ya düşmənçilik edən mühitdə işləmək",
            "Birdən ortaya çıxan dəyişiklik",
            "Həddindən artıq tənqid almaq",
            "Qapalı və ya qərarsız olduğunu düşündüyünüz insanlarla işləmək",
            "İşinizi yüksək standartda tamamlamaq üçün kifayət qədər vaxtınızın olmaması"
        ],
        bestStressResponse: [
            "Fiziki ehtiyaclara diqqət yetirmək - düzgün dincəlmək, yatmaq və yemək",
            "Dostlarla ünsiyyət qurmaq",
            "Dəyərləriniz üzərində düşünmək üçün vaxt ayırmaq",
            "Fikirlərinizi və hisslərinizi bölüşmək"
        ],
        othersHelpStress: [
            "Problemi sizinlə danışmağınıza icazə vermək",
            "Sizə və təşkilata verdiyiniz töhfələrə görə təşəkkür etmək",
            "Fərqli bir fəaliyyətdə sizə qoşulmaq və mühiti dəyişmək",
            "Uğurları qeyd etmək, beləliklə problemi perspektivdə görə və ümumi vizyona doğru nə qədər irəlilədiyinizi anlaya bilərsiniz"
        ],
        worstStressResponse: [
            "Vəziyyətdən çəkinmək və ya insanlardan qaçmaq",
            "Uzun müddət tək vaxt keçirmək",
            "Problemi özünüz həll etməyə çalışmaq",
            "Başınızı quma basdırmaq"
        ],
        othersWorsenStress: [
            "Davranışlarınıza və hisslərinizə inanmazlıq ifadə etmək",
            "Sizi stressdən çıxarmaq üçün məntiqdən istifadə etmək",
            "Sizə məhəl qoymamaq, hətta davranışınız aqressiv və ya irrasional olsa belə",
            "Sizi himayə etmək və ya narahatlıqlarınıza əhəmiyyət verməmək"
        ],
        achievingSuccess: "İş yerində potensialınıza çatmaq, zəif tərəflərinizin öhdəsindən gəlməyə çalışarkən güclü tərəflərinizi maksimum dərəcədə artırmaq deməkdir.",
        potentialProblems: [
            "Başqalarını dəstəkləməyə o qədər çox vaxt sərf edə bilərsiniz ki, öz tapşırıqlarınızı gözardı edəsiniz",
            "İnsan amili ilə heç bir əlaqəsi olmayan faktlar və məntiq ilə məşğul olmağa məcbur edildikdə yaxşı işləmirsiniz",
            "Münasibətləri ideallaşdırmağa meyllisiniz və başqaları sizi məyus etdikdə məyus ola bilərsiniz"
        ],
        suggestionsDo: [
            "Şəxsi prioritetlərinizi başqalarının ehtiyaclarına uyğun olaraq müəyyən etmədiyinizdən əmin olmaq üçün tək vaxt keçirin",
            "Dərhal dəyər sisteminizdən kənarda qalan imkanlara özünüzü açın",
            "Qərar qəbul etmənizdə son nəticəyə baxın",
            "Hətta münaqişə potensialı olsa belə, işləri müzakirəyə açıq buraxın",
            "Hər kəs tərəfindən sevilmək istəyinizi buraxın - siz hər zaman hər kəsi razı sala bilməzsiniz"
        ],
        suggestionsDont: [
            "Hər kəsin problemini həll etməyin sizin məsuliyyətiniz olduğunu fərz etməyin",
            "Başqalarına həddindən artıq güvənməyin",
            "Qarşılıqlı harmoniya və əməkdaşlıq naminə mübahisəli fikirləri yatırmayın",
            "Özünüzü yaxşı hiss etmək üçün başqalarının təsdiqinə güvənməyin",
            "İnanclarınızı və dəyər sisteminizi bölüşməyən insanlara qarşı kin saxlamayın"
        ]
    },
    "ENFP": {
        name: "Kampaniyaçı (The Campaigner)",
        summary: "ENFP-lər coşqulu, yaradıcı və sosial şəxslərdir. Onlar yeni ideyalara açıqdır, insanlarla əlaqə qurmağı sevir və həyatı dolu-dolu yaşayırlar. Bəzən fokuslanma çətinliyi yaşaya bilərlər.",
        workplacePersonality: "ENFP olaraq siz enerjili, yaradıcı və həvəsli birisiniz. Yeni imkanları araşdırmağı, insanlarla əlaqə qurmağı və ideyalarınıza digərlərini cəlb etməyi sevirsiniz. Bəzən detalları gözardı edə və ya işləri yarımçıq qoya bilərsiniz.",
        keyMotivators: [
            "Yaradıcı işlər görmək",
            "Yeni ideyalar yaratmaq",
            "İnsanlarla ünsiyyət qurmaq",
            "İlham vermək"
        ],
        idealWorkEnvironment: [
            "Yaradıcılığın və yenilikçiliyin təşviq edildiyi mühit",
            "Sosial qarşılıqlı əlaqələrin olduğu yer",
            "Çevik və dinamik şərait",
            "Rutin işlərin az olduğu mühit"
        ],
        coreValues: [
            "Yaradıcılıq",
            "Azadlıq",
            "Sosial əlaqə",
            "Həvəs"
        ],
        preferredWorkTasks: [
            "Beyin fırtınası seansları",
            "Yeni layihələr başlatmaq",
            "Ünsiyyət və PR işləri",
            "İnsanlarla işləmək"
        ],
        contributionsToOrganization: [
            "Yeni və innovativ ideyalar təklif etmək",
            "İnsanları motivasiya etmək",
            "Müsbət iş mühiti yaratmaq",
            "Dəyişiklikləri təşviq etmək"
        ],
        workingWithTeam: "ENFP-lər komandada enerjili, həvəsli və dəstəkləyici bir üzv olurlar. Onlar komandaya yeni ideyalar gətirir və əməkdaşlığı təşviq edirlər.",
        teamHelp: [
            "Komandaya enerji və həvəs gətirmək",
            "Yeni və innovativ ideyalar təklif etmək",
            "Müsbət iş mühiti yaratmaq"
        ],
        teamIrritate: [
            "Detalları gözardı etmək",
            "Fokuslanma çətinliyi",
            "İşləri yarımçıq qoymaq",
            "Həddindən artıq optimist olmaq"
        ],
        teamActionSteps: [
            "Daha realistik məqsədlər qoymaq",
            "Detallara daha çox diqqət yetirmək",
            "İşləri başlamaqdan çox bitirməyə fokuslanmaq"
        ],
        communicatingWithOthers: "ENFP-lər ünsiyyətdə coşqulu, ifadəli və ilhamvericidirlər. Onlar yeni ideyaları bölüşməyi və insanları özlərinə cəlb etməyi sevirlər.",
        communicationStrengths: [
            "Coşqulu və ifadəli ünsiyyət",
            "İlhamverici olmaq",
            "Yeni ideyaları aydın şəkildə izah etmək"
        ],
        communicationMisunderstanding: [
            "Həddindən artıq abstrakt olmaq",
            "Detalları gözardı etmək",
            "Bəzən səthi görünmək"
        ],
        communicationActionSteps: [
            "Daha praktik dil istifadə etmək",
            "Detallara diqqət yetirmək",
            "Daha dəqiq olmaq"
        ],
        managingConflict: "ENFP-lər münaqişələrdən çəkinir və harmoniyanı qorumağa çalışırlar. Onlar münaqişəni emosional səviyyədə hiss edə bilər və ya həddindən artıq həssas reaksiya verə bilərlər.",
        conflictHelp: [
            "Harmoniyanı təşviq etmək",
            "Empatik yanaşma",
            "Münaqişələri yaradıcı şəkildə həll etməyə çalışmaq"
        ],
        conflictTriggeredBy: [
            "Dəyərlərinin pozulması",
            "Ədalətsizlik",
            "Harmoniyanın pozulması",
            "Həddindən artıq rutin işlər"
        ],
        conflictIrritate: [
            "Münaqişədən qaçmaq",
            "Həddindən artıq həssas olmaq",
            "Problemləri şəxsi qəbul etmək",
            "Mübahisəni uzatmaq"
        ],
        conflictActionSteps: [
            "Münaqişələri daha obyektiv qəbul etmək",
            "Hissləri idarə etməyi öyrənmək",
            "Daha açıq şəkildə ünsiyyət qurmaq"
        ],
        takingTheLead: "ENFP-lər lider kimi ilhamverici və enerjili olurlar. Onlar komandalarını yeni ideyalarla motivasiya edir və onları özlərinə cəlb edirlər.",
        inspireOthers: [
            "Coşqu və həvəslə ilhamlandırmaq",
            "Yeni imkanlar göstərmək",
            "Yaradıcı düşüncəni təşviq etmək"
        ],
        makeThingsHappen: [
            "Yeni layihələr başlatmaq",
            "İnsanları motivasiya etmək",
            "Problemlərə yaradıcı həllər tapmaq"
        ],
        leadershipDevelopment: [
            "Daha çox fokuslanmaq",
            "Planlaşdırma bacarıqlarını inkişaf etdirmək",
            "Daha realistik məqsədlər qoymaq"
        ],
        makingDecisions: "ENFP-lər qərarları spontan və çevik şəkildə verirlər. Onlar bütün mümkün variantları araşdırmağı sevirlər, lakin bəzən qərarsız ola bilərlər.",
        decisionStrengths: [
            "Çevik və spontan qərarlar",
            "Bütün variantları araşdırma",
            "Yenilikçi yanaşma"
        ],
        decisionChallenges: [
            "Qərarsızlıq",
            "Son tarixlərə diqqət yetirməmək",
            "Praktik tətbiqi gözardı etmək"
        ],
        decisionActionSteps: [
            "Qərar qəbul etmək üçün son tarixlər qoymaq",
            "Daha qətiyyətli olmaq",
            "Qərarların praktik nəticələrini düşünmək"
        ],
        gettingThingsDone: "ENFP-lər işləri həyata keçirməkdə yaradıcı və dinamikdirlər. Onlar yeni ideyaları başlatmağı sevir, lakin rutin və detallı işlərdən tez darıxa bilərlər.",
        tasksHelp: [
            "Yeni layihələr başlatmaq",
            "Mürəkkəb problemləri həll etmək",
            "Yenilikləri tətbiq etmək"
        ],
        tasksIrritate: [
            "Detallara diqqət yetirməmək",
            "Rutin işlərdən sıxılmaq",
            "İşləri yarımçıq qoymaq"
        ],
        tasksActionSteps: [
            "Detallara daha çox diqqət yetirmək",
            "Planlaşdırma bacarıqlarını inkişaf etdirmək",
            "İşləri başlamaqdan çox bitirməyə fokuslanmaq"
        ],
        growthAndDevelopment: "ENFP-lər bilik toplamağa və intellektual cəhətdən inkişaf etməyə can atırlar. Onlar yeni ideyaları və nəzəriyyələri öyrənməyi sevirlər.",
        learningImproved: [
            "Yeni ideyalar və nəzəriyyələr",
            "Müzakirələr və debat",
            "Qeyri-ənənəvi öyrənmə metodları"
        ],
        learningHindered: [
            "Rutin və təkrarlanan materiallar",
            "Çox formal öyrənmə mühiti",
            "Praktik tətbiqi olmayan nəzəriyyələr"
        ],
        howYouViewChange: [
            "Dəyişikliyə açıqdırlar və onu bir fürsət kimi görürlər",
            "Dəyişiklikləri təşviq edirlər",
            "Yeni imkanları araşdırmağı sevirlər"
        ],
        opportunitiesForGrowth: [
            "Detallara diqqət yetirmək",
            "Qərarlarda daha qətiyyətli olmaq",
            "Başqalarının hisslərinə qarşı daha həssas olmaq",
            "İşləri bitirməyə fokuslanmaq"
        ],
        copingWithStress: "ENFP-lər stress altında daha mübahisəçi, qərarsız və ya səthi ola bilərlər. Onlar stressi intellektual oyun kimi qəbul edir və problemləri müzakirə yolu ilə həll etməyə çalışırlar.",
        stressTriggers: [
            "Rutin və darıxdırıcı işlər",
            "İdeyaların məhdudlaşdırılması",
            "Məntiqsiz qərarlar",
            "Təzyiq altında qərar qəbul etmək"
        ],
        bestStressResponse: [
            "Yeni ideyalar üzərində düşünmək",
            "Müzakirələr aparmaq",
            "Problemləri analiz etmək",
            "Yaradıcı fəaliyyətlərlə məşğul olmaq"
        ],
        othersHelpStress: [
            "Onlara intellektual stimullaşdırma vermək",
            "Onların ideyalarına qulaq asmaq",
            "Mübahisələrə açıq olmaq"
        ],
        worstStressResponse: [
            "Həddindən artıq mübahisəçi olmaq",
            "Detalları gözardı etmək",
            "Qərarsız görünmək",
            "Hissləri inkar etmək"
        ],
        othersWorsenStress: [
            "Rutin və darıxdırıcı işlərə məcbur etmək",
            "İdeyalarını rədd etmək",
            "Məntiqsiz arqumentlər irəli sürmək",
            "Emosional təzyiqlər tətbiq etmək"
        ],
        achievingSuccess: "ENFP-lər iş yerində yenilikçilik və problem həll etmə sahələrində yüksək potensiala malikdirlər. Uğur üçün güclü tərəflərini (yaradıcılıq) maksimum istifadə etməli və zəif tərəflərini (detal işləri) inkişaf etdirməlidirlər.",
        potentialProblems: [
            "Detalları gözardı etmək",
            "Rutin işlərdən sıxılmaq",
            "İşləri yarımçıq qoymaq"
        ],
        suggestionsDo: [
            "Detallara diqqət yetirmək",
            "Qərarlarda daha qətiyyətli olmaq",
            "İşləri bitirməyə fokuslanmaq",
            "Daha çox dinləməyə çalışmaq"
        ],
        suggestionsDont: [
            "Həddindən artıq mübahisəçi olmaq",
            "Hissləri gözardı etmək",
            "Hər şeyi öz üzərinizə götürmək"
        ]
    },
    "ISTJ": {
        name: "Müfəttiş (The Logistician)",
        summary: "ISTJ-lər məsuliyyətli, praktik və təşkilatçı şəxslərdir. Onlar qaydalara riayət edir, detallara diqqət yetirir və öhdəliklərini yerinə yetirirlər. Bəzən çevik olmaya bilərlər.",
        workplacePersonality: "ISTJ olaraq siz etibarlı, məsuliyyətli və praktik birisiniz. İşləri dəqiq, sistemli və vaxtında yerinə yetirməyi sevirsiniz. Detallara diqqət yetirir və qaydalara riayət edirsiniz. Bəzən yeni ideyalara qarşı müqavimət göstərə bilərsiniz.",
        keyMotivators: [
            "Öhdəlikləri yerinə yetirmək",
            "Dəqiqlik və düzgünlük",
            "Planlara əməl etmək",
            "Struktur və nizam"
        ],
        idealWorkEnvironment: [
            "Aydın qaydaların və prosedurların olduğu mühit",
            "Stabil və proqnozlaşdırıla bilən şərait",
            "Detallara diqqət yetirilən yer",
            "Tək işləməyə imkan verən mühit"
        ],
        coreValues: [
            "Məsuliyyət",
            "Etibarlılıq",
            "Dəqiqlik",
            "Ənənə"
        ],
        preferredWorkTasks: [
            "Məlumatların toplanması və təhlili",
            "Sistemlərin idarə edilməsi",
            "Keyfiyyətə nəzarət",
            "Planların icrası"
        ],
        contributionsToOrganization: [
            "Etibarlı və dəqiq işləmə",
            "Sistemlərin və prosedurların qorunması",
            "Təşkilatı sabit saxlamaq",
            "Məlumatlara əsaslanan qərarlar qəbul etmək"
        ],
        workingWithTeam: "ISTJ-lər komandada etibarlı və məsuliyyətli bir üzv olurlar. Onlar işləri vaxtında yerinə yetirir və komandanın məqsədlərinə çatmağına kömək edirlər. Lakin bəzən komanda dinamikasına qarışmaqda çətinlik çəkə bilərlər.",
        teamHelp: [
            "Komandaya sabitlik və etibarlılıq təmin etmək",
            "İşləri vaxtında və dəqiq yerinə yetirmək",
            "Detallara diqqət yetirmək"
        ],
        teamIrritate: [
            "Həddindən artıq sərt olmaq",
            "Dəyişikliyə müqavimət göstərmək",
            "Emosiyaları nəzərə almamaq",
            "Başqalarının fikirlərinə kifayət qədər qulaq asmamaq"
        ],
        teamActionSteps: [
            "Daha çevik olmağa çalışmaq",
            "Başqalarının fikirlərinə açıq olmaq",
            "Hissləri ifadə etməyi öyrənmək"
        ],
        communicatingWithOthers: "ISTJ-lər ünsiyyətdə dəqiq, faktiki və birbaşa olurlar. Onlar məlumatı aydın şəkildə ifadə etməyi sevirlər, lakin bəzən abstrakt və ya emosional mövzularla çətinlik çəkə bilərlər.",
        communicationStrengths: [
            "Dəqiq və faktiki ünsiyyət",
            "Məlumatı aydın şəkildə ifadə etmək",
            "Məntiqi arqumentasiya"
        ],
        communicationMisunderstanding: [
            "Həddindən artıq birbaşa olmaq",
            "Hissləri gözardı etmək",
            "Abstrakt ideyaları izah etməkdə çətinlik"
        ],
        communicationActionSteps: [
            "Daha çox empatiya göstərmək",
            "Ünsiyyətdə daha səbirli olmaq",
            "Bədən dilini və qeyri-verbal siqnalları oxumağı öyrənmək"
        ],
        managingConflict: "ISTJ-lər münaqişələri məntiqi və faktiki şəkildə həll etməyə çalışırlar. Onlar emosional partlamalardan xoşlanmır və problemin həllinə fokuslanırlar.",
        conflictHelp: [
            "Münaqişələri obyektiv məlumatlarla analiz etmək",
            "Məntiqi həll yolları təklif etmək",
            "Problemlərə praktik yanaşmaq"
        ],
        conflictTriggeredBy: [
            "Qaydalara riayət etməmək",
            "Qeyri-dəqiqlik",
            "Qeyri-səmərəlilik",
            "Emosional partlamalar"
        ],
        conflictIrritate: [
            "Həddindən artıq sərt olmaq",
            "Hissləri gözardı etmək",
            "Kompromisə getməmək",
            "Mübahisələrdə israrçı olmaq"
        ],
        conflictActionSteps: [
            "Empatiya hissini inkişaf etdirmək",
            "Başqalarının hisslərinə hörmət etmək",
            "Daha çox dinləməyə çalışmaq"
        ],
        takingTheLead: "ISTJ-lər lider kimi etibarlı və məsuliyyətli olurlar. Onlar komandalarına aydın təlimatlar verir, qaydalara riayət etməyi təşviq edir və işlərin vaxtında tamamlanmasını təmin edirlər.",
        inspireOthers: [
            "Etibarlılıq və məsuliyyətlə ilhamlandırmaq",
            "Aydın təlimatlar vermək",
            "Sistemli yanaşmanı təşviq etmək"
        ],
        makeThingsHappen: [
            "Dəqiq planlar yaratmaq",
            "Resursları effektiv idarə etmək",
            "İşlərin vaxtında tamamlanmasını təmin etmək"
        ],
        leadershipDevelopment: [
            "Daha çox çevik olmaq",
            "Yeni ideyalara açıq olmaq",
            "Başqalarının fikirlərinə qulaq asmaq"
        ],
        makingDecisions: "ISTJ-lər qərarları faktlara və keçmiş təcrübələrə əsasən verirlər. Onlar məntiqi və rasional olurlar, lakin bəzən bütün mümkün perspektivləri nəzərə almaya bilərlər.",
        decisionStrengths: [
            "Məntiqi və rasional yanaşma",
            "Faktlara əsaslanan qərarlar",
            "Dəqiqlik və etibarlılıq"
        ],
        decisionChallenges: [
            "Dəyişikliyə müqavimət",
            "Yeni ideyalara bağlı deyil",
            "Həddindən artıq ehtiyatlı olmaq"
        ],
        decisionActionSteps: [
            "Daha çox məlumat toplamaq",
            "Alternativləri araşdırmaq",
            "Daha çevik olmaq"
        ],
        gettingThingsDone: "ISTJ-lər işləri həyata keçirməkdə sistemli və dəqiqdirlər. Onlar planlara əməl edir və tapşırıqları vaxtında yerinə yetirirlər.",
        tasksHelp: [
            "İşlərin vaxtında və dəqiq tamamlanması",
            "Sistemlərin və prosedurların qorunması",
            "Resursların səmərəli idarə edilməsi"
        ],
        tasksIrritate: [
            "Rutin işlərdən sıxılmaq",
            "Qaydalara riayət etməmək",
            "Dəyişikliyə müqavimət göstərmək"
        ],
        tasksActionSteps: [
            "Daha çevik olmaq",
            "Yeni ideyalara açıq olmaq",
            "İşləri daha yaradıcı şəkildə həyata keçirmək"
        ],
        growthAndDevelopment: "ISTJ-lər praktik və konkret məlumatları öyrənməyi sevirlər. Onlar sistemli və strukturlaşdırılmış öyrənmə mühitinə üstünlük verirlər.",
        learningImproved: [
            "Praktik və konkret məlumatlar",
            "Sistemli təlimlər",
            "Dəqiqlik və detallara diqqət yetirmək"
        ],
        learningHindered: [
            "Çox abstrakt və ya nəzəri materiallar",
            "Qeyri-formal öyrənmə mühiti",
            "Dəyişikliyə müqavimət"
        ],
        howYouViewChange: [
            "Dəyişikliyə ehtiyatla yanaşırlar, çünki bu, mövcud sistemləri poza bilər",
            "Dəyişikliyin məntiqi əsaslarını anlamağa çalışırlar",
            "Dəyişikliyin faydalarına əmin olduqdan sonra onu qəbul edirlər"
        ],
        opportunitiesForGrowth: [
            "Daha çevik olmaq",
            "Yeni ideyalara açıq olmaq",
            "Başqalarının fikirlərinə qulaq asmaq",
            "Hissləri ifadə etməyi öyrənmək"
        ],
        copingWithStress: "ISTJ-lər stress altında daha sərt, tənqidi və ya təcrid olunmuş ola bilərlər. Onlar stressi qaydalara riayət etməklə və işləri bitirməklə idarə etməyə çalışırlar.",
        stressTriggers: [
            "Qeyri-dəqiqlik",
            "Nizamsızlıq",
            "Qaydalara riayət etməmək",
            "Emosional partlamalar"
        ],
        bestStressResponse: [
            "Problemləri analiz etmək",
            "Planlar qurmaq",
            "Tək vaxt keçirmək",
            "İşləri bitirmək"
        ],
        othersHelpStress: [
            "Onlara məntiqi dəstək vermək",
            "Problemlərə həll yolları tapmağa kömək etmək",
            "Onlara fərdi məkan vermək"
        ],
        worstStressResponse: [
            "Həddindən artıq sərt olmaq",
            "Hissləri inkar etmək",
            "Başqalarından uzaqlaşmaq",
            "Təkbaşına hər şeyi həll etməyə çalışmaq"
        ],
        othersWorsenStress: [
            "Məntiqsiz arqumentlər irəli sürmək",
            "Onları emosional qərarlar qəbul etməyə məcbur etmək",
            "Onların liderliyini şübhə altına almaq",
            "Münaqişələri emosional yolla həll etməyə çalışmaq"
        ],
        achievingSuccess: "ISTJ-lər iş yerində dəqiqlik, etibarlılıq və təşkilatçılıq sahələrində yüksək potensiala malikdirlər. Uğur üçün güclü tərəflərini (məsuliyyət) maksimum istifadə etməli və zəif tərəflərini (çeviklik) inkişaf etdirməlidirlər.",
        potentialProblems: [
            "Dəyişikliyə müqavimət",
            "Yeni ideyalara bağlı deyil",
            "Həddindən artıq ehtiyatlı olmaq"
        ],
        suggestionsDo: [
            "Daha çevik olmaq",
            "Yeni ideyalara açıq olmaq",
            "Başqalarının fikirlərinə qulaq asmaq",
            "Hissləri ifadə etməyi öyrənmək"
        ],
        suggestionsDont: [
            "Həddindən artıq sərt olmaq",
            "Hissləri gözardı etmək",
            "Hər şeyi öz üzərinizə götürmək"
        ]
    },
    "ISFJ": {
        name: "Müdafiəçi (The Defender)",
        summary: "ISFJ-lər qayğıkeş, sadiq və praktik şəxslərdir. Onlar başqalarına kömək etməyi sevir, detallara diqqət yetirir və ənənələrə hörmət edirlər.",
        workplacePersonality: "ISFJ olaraq, siz məsuliyyətli, sadiq və əməkdaşsınız. İş yerində adətən səssiz və nəzakətlisiniz, lakin dəyərlərinizə sadiq qalırsınız. Başqalarının ehtiyaclarını qarşılamağa fokuslanırsınız və komandaya sabitlik gətirirsiniz. Detallara diqqət yetirməyiniz və yaddaşınızla seçilirsiniz.",
        keyMotivators: [
            "Başqalarına kömək etmək",
            "Müəyyən edilmiş qaydalara riayət etmək",
            "Harmoniya və sabitlik",
            "Görülən işlərə görə qiymətləndirilmək"
        ],
        idealWorkEnvironment: [
            "Aydın struktura və gözləntilərə malik mühit",
            "Əməkdaşlığın təşviq edildiyi yer",
            "Sakit və dəstəkləyici atmosfer",
            "Başqalarına kömək etmək imkanlarının olduğu sahələr"
        ],
        coreValues: [
            "Sədaqət",
            "Məsuliyyət",
            "Xidmət",
            "Etibarlılıq"
        ],
        preferredWorkTasks: [
            "Detallı işlərin təşkili",
            "Rutini tələb edən tapşırıqlar",
            "Başqalarına dəstək vermək",
            "Məlumatları qeyd etmək və saxlamaq"
        ],
        contributionsToOrganization: [
            "Sabitlik və davamlılıq təmin etmək",
            "Etibarlı və vicdanlı işçi olmaq",
            "Komandaya qayğı və dəstək gətirmək",
            "Ətraflı məlumatlara diqqət yetirmək"
        ],
        workingWithTeam: "ISFJ-lər komandada dəstəkləyici və əməkdaşdırlar. Onlar digər komanda üzvlərinə kömək etməyi sevirlər və harmoniyanın pozulmasından çəkinirlər.",
        teamHelp: [
            "Dəstək və qayğı göstərmək",
            "Sadiq və etibarlı komanda üzvü olmaq",
            "Praktik həllər təklif etmək"
        ],
        teamIrritate: [
            "Dəyişikliyə qarşı müqavimət göstərmək",
            "Öz ehtiyaclarını gözardı etmək",
            "Tənqidi şəxsi qəbul etmək"
        ],
        teamActionSteps: [
            "Daha çevik olmağa çalışmaq",
            "Bəzən öz ehtiyaclarınızı ifadə etmək",
            "Yeni ideyalara açıq olmaq"
        ],
        communicatingWithOthers: "ISFJ-lər ünsiyyətdə sakit, nəzakətli və birbaşa olurlar. Onlar adətən faktlara fokuslanırlar və emosional məlumatları dəstəkləyici şəkildə çatdırırlar.",
        communicationStrengths: [
            "Yaxşı dinləyici olmaq",
            "Aydın və dəqiq ifadə",
            "Dəstəkləyici ünsiyyət"
        ],
        communicationMisunderstanding: [
            "Hisslərini ifadə etməkdə çətinlik",
            "Başqalarının ehtiyaclarına həddindən artıq fokuslanmaq",
            "Münaqişədən qaçma meyli"
        ],
        communicationActionSteps: [
            "Daha açıq ünsiyyət qurmağı öyrənmək",
            "Öz fikirlərinizi daha qətiyyətlə ifadə etmək",
            "Konfliktləri konstruktiv şəkildə həll etməyi öyrənmək"
        ],
        managingConflict: "ISFJ-lər münaqişələri idarə etməkdə harmoniyaya üstünlük verirlər. Onlar gərginlikdən çəkinirlər və tez-tez öz hisslərini yatırırlar.",
        conflictHelp: [
            "Harmoniya yaratmaq",
            "Empatik yanaşmaq",
            "Başqalarına dəstək vermək"
        ],
        conflictTriggeredBy: [
            "Dəyərlərinin pozulması",
            "Həddindən artıq tənqid",
            "Ədalətsizlik"
        ],
        conflictIrritate: [
            "Münaqişədən qaçmaq",
            "Pasiv-aqressiv davranış",
            "Özünü qurban vermə meyli"
        ],
        conflictActionSteps: [
            "Problemləri birbaşa həll etməyi öyrənmək",
            "Öz ehtiyaclarınızı ifadə etmək",
            "Daha qətiyyətli olmaq"
        ],
        takingTheLead: "ISFJ-lər liderlikdə praktik, sadiq və dəstəkləyici olurlar. Onlar adətən formal liderlik rollarını deyil, arxa planda başqalarına dəstək verən rolları üstün tuturlar.",
        inspireOthers: [
            "Öz fədakarlıqları ilə nümunə olmaq",
            "Dəstək və qayğı göstərmək",
            "Etibarlılıqları ilə inam yaratmaq"
        ],
        makeThingsHappen: [
            "Detallı planlar qurmaq",
            "İşləri ardıcıl şəkildə yerinə yetirmək",
            "Komandaya praktik dəstək vermək"
        ],
        leadershipDevelopment: [
            "Daha qətiyyətli olmaq",
            "Qərarlar qəbul etməkdə daha müstəqil olmaq",
            "Böyük mənzərəni görməyə çalışmaq"
        ],
        makingDecisions: "ISFJ-lər qərarları praktik dəyərlərə və keçmiş təcrübələrə əsasən verirlər. Onlar başqalarının ehtiyaclarını nəzərə alırlar, lakin bəzən yeni yanaşmalara açıq olmaya bilərlər.",
        decisionStrengths: [
            "Praktik və realist qərarlar",
            "Başqalarının ehtiyaclarını nəzərə almaq",
            "Ətraflı məlumatlara diqqət yetirmək"
        ],
        decisionChallenges: [
            "Dəyişikliyə qarşı müqavimət",
            "Həddindən artıq ehtiyatlı olmaq",
            "Ani qərarlar verməkdə çətinlik"
        ],
        decisionActionSteps: [
            "Yeni ideyalara daha açıq olmaq",
            "Qərar qəbul etməkdə daha çevik olmaq",
            "Bəzən intuitiv qərarlara güvənmək"
        ],
        gettingThingsDone: "ISFJ-lər işləri sistemli və dəqiq şəkildə tamamlayırlar. Onlar məsuliyyətli və etibarlıdırlar, lakin bəzən rutindən kənara çıxmaqda çətinlik çəkə bilərlər.",
        tasksHelp: [
            "İşləri vaxtında və dəqiq yerinə yetirmək",
            "Təşkilatçılıq bacarıqları",
            "Detallara diqqət yetirmək"
        ],
        tasksIrritate: [
            "Dəyişikliyə müqavimət",
            "Çox detallara fokuslanmaq",
            "Bəzən böyük mənzərəni gözardı etmək"
        ],
        tasksActionSteps: [
            "Daha çevik iş tərzini mənimsəmək",
            "Yeni yanaşmaları sınaqdan keçirmək",
            "Bəzən detalları delegasiya etmək"
        ],
        growthAndDevelopment: "ISFJ-lər praktik və konkret yollarla öyrənirlər. Onlar təcrübə vasitəsilə bilik əldə etməyi və tətbiqi bacarıqları inkişaf etdirməyi üstün tuturlar.",
        learningImproved: [
            "Praktik tapşırıqlar və nümunələr",
            "Aydın və strukturlaşdırılmış təlimatlar",
            "Qrup işləri və əməkdaşlıq"
        ],
        learningHindered: [
            "Abstrakt nəzəriyyələr",
            "Sistemli olmayan öyrənmə mühiti",
            "Şəxsi məkanın olmaması"
        ],
        howYouViewChange: [
            "Dəyişikliyə ehtiyatla yanaşmaq",
            "Tanış və təhlükəsiz mühiti üstün tutmaq",
            "Dəyişikliyin necə təsir edəcəyini başa düşməyə ehtiyac duymaq"
        ],
        opportunitiesForGrowth: [
            "Daha qətiyyətli olmaq",
            "Münaqişələri daha açıq şəkildə idarə etmək",
            "Yeni ideyalara açıq olmaq",
            "Öz ehtiyaclarını daha çox nəzərə almaq"
        ],
        copingWithStress: "ISFJ-lər stress altında özlərini geri çəkə bilər və ya həddindən artıq narahat ola bilərlər. Onlar adətən başqalarına yük olmaqdan çəkinirlər.",
        stressTriggers: [
            "Xaos və nizamsızlıq",
            "Tənqid və ya tənqid hissi",
            "Dəyərlərin pozulması",
            "Başqalarının məyus olması"
        ],
        bestStressResponse: [
            "Tək vaxt keçirmək",
            "Dəstəkləyici dostlarla danışmaq",
            "Rutin fəaliyyətlərlə məşğul olmaq",
            "Problemləri analiz etmək"
        ],
        othersHelpStress: [
            "Onlara dəstək və təsdiq vermək",
            "Sakit və sabit bir mühit yaratmaq",
            "Onların hisslərini dinləmək"
        ],
        worstStressResponse: [
            "Problemi içlərində saxlamaq",
            "Həddindən artıq özünü tənqid etmək",
            "Başqalarından tamamilə uzaqlaşmaq"
        ],
        othersWorsenStress: [
            "Onlara təzyiq etmək",
            "Onların hisslərini gözardı etmək",
            "Münaqişəyə sürükləmək"
        ],
        achievingSuccess: "ISFJ-lər iş yerində dəyərli və etibarlı əməkdaşlardır. Uğur üçün onların sabitlik, detallara diqqət və sadiqlik kimi güclü tərəflərini istifadə etməli, çeviklik və özünü ifadə etmə bacarıqlarını inkişaf etdirməlidirlər.",
        potentialProblems: [
            "Dəyişikliklərə adaptasiya çətinliyi",
            "Öz fikirlərini ifadə etməkdə tərəddüd",
            "Başqalarının ehtiyaclarını özününkündən üstün tutma meyli"
        ],
        suggestionsDo: [
            "Daha çox liderlik rolunu öz üzərinə götürmək",
            "Yeni ideyaları qəbul etməyə çalışmaq",
            "Öz dəyərlərini daha qətiyyətlə ifadə etmək"
        ],
        suggestionsDont: [
            "Münaqişədən tamamilə qaçmaq",
            "Həddindən artıq özünü qurban vermək",
            "Həddindən artıq ehtiyatlı olmaq"
        ]
    },
    "ESTJ": {
        name: "İcraçı (The Executive)",
        summary: "ESTJ-lər praktik, təşkilatçı və qərarlı liderlərdir. Onlar qaydalara riayət edir, effektiv işləməyi sevir və məqsədlərə çatmaq üçün çalışırlar.",
        workplacePersonality: "ESTJ olaraq, siz təşkilatçı, məsuliyyətli və liderlik keyfiyyətlərinə maliksiniz. İş yerində effektivlik və nəticələrə fokuslanırsınız. Struktur və qaydalara üstünlük verirsiniz və işlərin düzgün şəkildə aparılmasını təmin edirsiniz. Bəzən sərt və ya hökmran görünə bilərsiniz.",
        keyMotivators: [
            "Aydın məqsədlərə çatmaq",
            "Təşkilatçılıq və idarəetmə",
            "Ədalətli və obyektiv olmaq",
            "Effektiv nəticələr əldə etmək"
        ],
        idealWorkEnvironment: [
            "Aydın hiyerarxiyaya və qaydalara malik mühit",
            "Nəticələrə yönümlü iş sahəsi",
            "Məsuliyyətlərin aydın təyin olunduğu yer",
            "Çalışqanlığın qiymətləndirildiyi atmosfer"
        ],
        coreValues: [
            "Məsuliyyət",
            "Nizam-intizam",
            "Effektivlik",
            "Dürüstlük"
        ],
        preferredWorkTasks: [
            "Proseslərin və sistemlərin idarə edilməsi",
            "Qərarların qəbul edilməsi və icrası",
            "Layihələrin planlaşdırılması və nəzarəti",
            "Kollektiv məqsədlərə çatmaq"
        ],
        contributionsToOrganization: [
            "Struktur və nizam yaratmaq",
            "Effektiv qərarlar qəbul etmək",
            "Məqsədlərə çatmağa kömək etmək",
            "Güclü liderlik təmin etmək"
        ],
        workingWithTeam: "ESTJ-lər komandada liderlik etməyi və işlərin düzgün şəkildə aparılmasını təmin etməyi sevirlər. Onlar praktik və məqsədyönlüdürlər.",
        teamHelp: [
            "Aydın hədəflər təyin etmək",
            "İşlərin icrasını təmin etmək",
            "Nizam və intizam yaratmaq"
        ],
        teamIrritate: [
            "Həddindən artıq sərt olmaq",
            "Hissləri gözardı etmək",
            "Dəyişikliyə qarşı müqavimət"
        ],
        teamActionSteps: [
            "Daha çevik olmağa çalışmaq",
            "Empatiyanı inkişaf etdirmək",
            "Komanda üzvlərinin fikirlərini dinləmək"
        ],
        communicatingWithOthers: "ESTJ-lər ünsiyyətdə birbaşa, dəqiq və məntiqi olurlar. Onlar faktlara və nəticələrə fokuslanırlar.",
        communicationStrengths: [
            "Aydın və birbaşa ünsiyyət",
            "Məntiqi arqumentasiya",
            "Praktik həllərə fokuslanma"
        ],
        communicationMisunderstanding: [
            "Həddindən artıq birbaşa olmaq",
            "Hissləri gözardı etmək",
            "Abstrakt ideyaları başa düşməkdə çətinlik"
        ],
        communicationActionSteps: [
            "Daha diplomatik olmağı öyrənmək",
            "Başqalarının hisslərini nəzərə almaq",
            "Daha açıqfikirli olmaq"
        ],
        managingConflict: "ESTJ-lər münaqişələri məntiqi və obyektiv şəkildə həll etməyə çalışırlar. Onlar münaqişəni dərhal həll etməyə meyillidirlər.",
        conflictHelp: [
            "Problemləri məntiqi həll etmək",
            "Aydın qərarlar qəbul etmək",
            "Ədalətli həllər tapmaq"
        ],
        conflictTriggeredBy: [
            "Nizamsızlıq və səmərəsizlik",
            "Qaydalara riayət olunmaması",
            "Məntiqsiz davranışlar"
        ],
        conflictIrritate: [
            "Həddindən artıq sərt olmaq",
            "Hissləri gözardı etmək",
            "Tənqidi qəbul etməkdə çətinlik"
        ],
        conflictActionSteps: [
            "Daha çox empatiya göstərmək",
            "Münaqişələrdə səbirli olmaq",
            "Bəzən güzəştə getməyi öyrənmək"
        ],
        takingTheLead: "ESTJ-lər təbii liderlərdir. Onlar məqsədlərə çatmaq üçün effektiv sistemlər qururlar və komandaları idarə etməyi bacarırlar.",
        inspireOthers: [
            "Öz qətiyyətləri ilə",
            "Aydın hədəflər təyin etməklə",
            "Nəticələrə fokuslanmaqla"
        ],
        makeThingsHappen: [
            "Aydın tapşırıqlar təyin etmək",
            "Nəzarət və koordinasiya",
            "Səmərəli proseslər qurmaq"
        ],
        leadershipDevelopment: [
            "Daha çevik olmaq",
            "Başqalarına daha çox səlahiyyət vermək",
            "Hissləri nəzərə almağı öyrənmək"
        ],
        makingDecisions: "ESTJ-lər qərarları praktik faktlara və məntiqi təhlilə əsasən verirlər. Onlar sürətli və qətiyyətli olurlar.",
        decisionStrengths: [
            "Məntiqi və obyektiv qərarlar",
            "Sürətli və qətiyyətli",
            "Nəticələrə yönümlü"
        ],
        decisionChallenges: [
            "Hissləri gözardı etmək",
            "Dəyişikliyə qarşı müqavimət",
            "Həddindən artıq sərt olmaq"
        ],
        decisionActionSteps: [
            "Qərar qəbul edərkən insan amilini nəzərə almaq",
            "Fərqli perspektivləri dinləmək",
            "Daha çevik yanaşma tətbiq etmək"
        ],
        gettingThingsDone: "ESTJ-lər işləri planlı və effektiv şəkildə tamamlayırlar. Onlar məsuliyyətli və vicdanlıdırlar.",
        tasksHelp: [
            "Layihələri idarə etmək",
            "Tapşırıqları vaxtında bitirmək",
            "Səmərəli iş axını təmin etmək"
        ],
        tasksIrritate: [
            "Nizamsızlığa dözümsüzlük",
            "Həddindən artıq nəzarət",
            "Dəyişikliyə müqavimət"
        ],
        tasksActionSteps: [
            "Daha çevik iş tərzini mənimsəmək",
            "Başqalarına daha çox güvənmək",
            "Spontanlığa yer vermək"
        ],
        growthAndDevelopment: "ESTJ-lər praktik və tətbiqi öyrənməyə üstünlük verirlər. Onlar yeni bacarıqları tez mənimsəyirlər.",
        learningImproved: [
            "Strukturlaşdırılmış təlimatlar",
            "Tətbiqi təlimlər",
            "Məqsədəyönümlü öyrənmə"
        ],
        learningHindered: [
            "Abstrakt və nəzəri mövzular",
            "Nizamsız öyrənmə mühiti",
            "Empatiya tələb edən mövzular"
        ],
        howYouViewChange: [
            "Dəyişikliyə ehtiyatla yanaşmaq",
            "Dəyişikliyin effektivliyini və məntiqini görməyə ehtiyac duymaq",
            "Planlı və strukturlaşdırılmış dəyişikliklərə üstünlük vermək"
        ],
        opportunitiesForGrowth: [
            "Daha çox empatiya göstərmək",
            "Daha çevik olmaq",
            "Başqalarına daha çox səlahiyyət vermək",
            "Öz fikirlərini ifadə etməkdə daha yumşaq olmaq"
        ],
        copingWithStress: "ESTJ-lər stress altında daha sərt və ya hökmran ola bilərlər. Onlar problemləri dərhal həll etməyə çalışırlar.",
        stressTriggers: [
            "Nizamsızlıq və xaos",
            "Səmərəsizlik",
            "Qaydalara riayət olunmaması",
            "Dəyərlərin pozulması"
        ],
        bestStressResponse: [
            "Problemləri həll etməyə fokuslanmaq",
            "Plan qurmaq",
            "Struktur yaratmaq",
            "Fiziki fəaliyyətlə məşğul olmaq"
        ],
        othersHelpStress: [
            "Onlara məntiqi dəstək vermək",
            "Aydın hədəflər təyin etməkdə kömək etmək",
            "Onların problemlərini həll etməsinə imkan vermək"
        ],
        worstStressResponse: [
            "Həddindən artıq sərt olmaq",
            "Başqalarına təzyiq etmək",
            "Hissləri gözardı etmək"
        ],
        othersWorsenStress: [
            "Onların qərarlarını şübhə altına almaq",
            "Nizamsızlıq yaratmaq",
            "Emosional yanaşmalarla çıxış etmək"
        ],
        achievingSuccess: "ESTJ-lər iş yerində yüksək məhsuldarlıq və liderlik bacarıqları ilə fərqlənirlər. Uğur üçün onların təşkilatçılıq və qətiyyət kimi güclü tərəflərini istifadə etməli, empatiya və çeviklik sahələrini inkişaf etdirməlidirlər.",
        potentialProblems: [
            "Həddindən artıq hökmran olmaq",
            "Başqalarının hisslərini gözardı etmək",
            "Dəyişikliyə qarşı müqavimət"
        ],
        suggestionsDo: [
            "Daha çox empatiya göstərmək",
            "Daha çevik olmaq",
            "Başqalarına daha çox güvənmək",
            "İnsan amilini nəzərə almaq"
        ],
        suggestionsDont: [
            "Həddindən artıq sərt olmaq",
            "Qaydaları kor-koranə tətbiq etmək",
            "Başqalarının fikirlərini aşağılamaq"
        ]
    },
    "ESFJ": {
        name: "Konsul (The Consul)",
        summary: "ESFJ-lər sosial, qayğıkeş və praktik şəxslərdir. Onlar başqaları ilə əlaqə qurmağı sevir, harmoniyaya önəm verir və cəmiyyətə faydalı olmaq istəyirlər.",
        workplacePersonality: "ESFJ olaraq, siz sosial, qayğıkeş və praktik bir şəxssiniz. İş yerində kollektivə harmoniya gətirir, başqalarına dəstək olursunuz və etik dəyərlərə sadiq qalırsınız. Əla ünsiyyət bacarıqlarınız var və komanda ruhunu yüksəltməyə çalışırsınız.",
        keyMotivators: [
            "Başqalarına kömək etmək",
            "Sosial əlaqələr qurmaq",
            "Harmoniya və əməkdaşlıq",
            "Qiymətləndirilmək və tanınmaq"
        ],
        idealWorkEnvironment: [
            "Əməkdaşlığın təşviq edildiyi komanda mühiti",
            "Başqalarına dəstək vermək imkanlarının olduğu yer",
            "Aydın struktura və qaydalara malik iş sahəsi",
            "Dostyana və qayğıkeş atmosfer"
        ],
        coreValues: [
            "Xidmət",
            "Sədaqət",
            "Cəmiyyət",
            "Harmoniya"
        ],
        preferredWorkTasks: [
            "Sosial tədbirlərin təşkili",
            "Müştərilərlə əlaqələr qurmaq",
            "Komanda işini koordinasiya etmək",
            "İnsanlara dəstək vermək"
        ],
        contributionsToOrganization: [
            "Müsbət iş mühiti yaratmaq",
            "Komandanın əməkdaşlığını artırmaq",
            "Başqalarının ehtiyaclarını qarşılamaq",
            "Etik dəyərləri qorumaq"
        ],
        workingWithTeam: "ESFJ-lər komandada əməkdaşlıq edir və dəstək olurlar. Onlar komanda ruhunu yüksəltməyə və hər kəsin rahat hiss etməsini təmin etməyə çalışırlar.",
        teamHelp: [
            "Əməkdaşlıq ruhunu gücləndirmək",
            "Komanda üzvlərinə dəstək olmaq",
            "Harmoniya yaratmaq"
        ],
        teamIrritate: [
            "Tənqidə həssas olmaq",
            "Münaqişədən qaçmaq",
            "Həddindən artıq təsdiq axtarmaq"
        ],
        teamActionSteps: [
            "Daha qətiyyətli olmaq",
            "Münaqişələri konstruktiv şəkildə həll etməyi öyrənmək",
            "Öz fikirlərini daha açıq ifadə etmək"
        ],
        communicatingWithOthers: "ESFJ-lər ünsiyyətdə sosial, mehriban və ifadəli olurlar. Onlar başqalarının hisslərinə diqqət yetirirlər.",
        communicationStrengths: [
            "Yaxşı dinləyici olmaq",
            "Empatik ünsiyyət",
            "Sosial bacarıqlar"
        ],
        communicationMisunderstanding: [
            "Həddindən artıq şəxsi olmaq",
            "Məntiqi detalları gözardı etmək",
            "Tənqidə həssaslıq"
        ],
        communicationActionSteps: [
            "Daha obyektiv olmağa çalışmaq",
            "Faktlara daha çox diqqət yetirmək",
            "Hissləri ifadə edərkən daha balanslı olmaq"
        ],
        managingConflict: "ESFJ-lər münaqişələri idarə etməkdə harmoniyaya üstünlük verirlər. Onlar gərginlikdən çəkinirlər və tez-tez başqalarını razı salmağa çalışırlar.",
        conflictHelp: [
            "Harmoniya yaratmaq",
            "Empatik yanaşmaq",
            "Başqalarını dinləmək"
        ],
        conflictTriggeredBy: [
            "Dəyərlərin pozulması",
            "Ədalətsizlik",
            "Şəxsi tənqid"
        ],
        conflictIrritate: [
            "Münaqişədən qaçmaq",
            "Özünü qurban vermə meyli",
            "Həddindən artıq həssaslıq"
        ],
        conflictActionSteps: [
            "Daha qətiyyətli olmaq",
            "Problemləri birbaşa həll etməyi öyrənmək",
            "Öz ehtiyaclarınızı ifadə etmək"
        ],
        takingTheLead: "ESFJ-lər liderlikdə qayğıkeş, praktik və məsuliyyətli olurlar. Onlar komandalarına dəstək verir və onların rifahına diqqət yetirirlər.",
        inspireOthers: [
            "Öz fədakarlıqları ilə",
            "Dəstək və qayğı göstərməklə",
            "Komanda ruhunu yüksəltməklə"
        ],
        makeThingsHappen: [
            "Aydın planlar qurmaq",
            "İşləri sistemli şəkildə icra etmək",
            "Komandaya praktik dəstək vermək"
        ],
        leadershipDevelopment: [
            "Daha obyektiv qərarlar qəbul etmək",
            "Daha çevik olmaq",
            "Bəzən təkbaşına qərarlar vermək"
        ],
        makingDecisions: "ESFJ-lər qərarları şəxsi dəyərlərə və başqalarının hisslərinə əsasən verirlər. Onlar kollektivin rifahını nəzərə alırlar.",
        decisionStrengths: [
            "İnsan amilini nəzərə almaq",
            "Harmoniya yaratmaq",
            "Praktik həllər tapmaq"
        ],
        decisionChallenges: [
            "Həddindən artıq həssas olmaq",
            "Məntiqi detalları gözardı etmək",
            "Qərarsızlıq"
        ],
        decisionActionSteps: [
            "Daha çox məntiqi analiz etmək",
            "Qərar qəbul edərkən faktlara fokuslanmaq",
            "Öz hisslərini daha balanslı şəkildə idarə etmək"
        ],
        gettingThingsDone: "ESFJ-lər işləri vicdanlı və məsuliyyətli şəkildə tamamlayırlar. Onlar komanda işinə dəyər verirlər.",
        tasksHelp: [
            "Əməkdaşlığı təşviq etmək",
            "Tapşırıqları dəqiqliklə yerinə yetirmək",
            "Komandanın motivasiyasını yüksəltmək"
        ],
        tasksIrritate: [
            "Dəyişikliyə qarşı müqavimət",
            "Həddindən artıq detallara fokuslanmaq",
            "Bəzən kollektivin xatirinə fərdi məsuliyyəti gözardı etmək"
        ],
        tasksActionSteps: [
            "Daha çevik olmaq",
            "Yeni yanaşmaları sınaqdan keçirmək",
            "Öz hədəflərinə daha çox fokuslanmaq"
        ],
        growthAndDevelopment: "ESFJ-lər təcrübə və sosial qarşılıqlı əlaqə vasitəsilə öyrənirlər. Onlar praktik bilikləri və başqalarına faydalı olan məlumatları mənimsəməyi sevirlər.",
        learningImproved: [
            "Qrup işləri və müzakirələr",
            "Praktik təlimlər",
            "Dəstəkləyici öyrənmə mühiti"
        ],
        learningHindered: [
            "Abstrakt və nəzəri mövzular",
            "Yalnız fərdi öyrənmə",
            "Tənqidi rəyin olmaması"
        ],
        howYouViewChange: [
            "Dəyişikliyə ehtiyatla yanaşmaq",
            "Dəyişikliyin insanlara necə təsir edəcəyini düşünmək",
            "Dəyişikliyin harmoniyanı pozmamasını istəmək"
        ],
        opportunitiesForGrowth: [
            "Daha qətiyyətli olmaq",
            "Məntiqi yanaşmaları inkişaf etdirmək",
            "Öz ehtiyaclarını daha çox nəzərə almaq",
            "Tənqidə daha tolerant olmaq"
        ],
        copingWithStress: "ESFJ-lər stress altında həddindən artıq həssas ola bilər və ya başqalarından təsdiq axtara bilərlər. Onlar harmoniyanı qorumağa çalışırlar.",
        stressTriggers: [
            "Münaqişə və gərginlik",
            "Qəbul edilməmək hissi",
            "Dəyərlərin pozulması",
            "Tənqid"
        ],
        bestStressResponse: [
            "Dostlarla vaxt keçirmək",
            "Hisslərini bölüşmək",
            "Başqalarına kömək etmək",
            "Sosial fəaliyyətlərlə məşğul olmaq"
        ],
        othersHelpStress: [
            "Onlara dəstək və təsdiq vermək",
            "Onların hisslərini dinləmək",
            "Müsbət əhval-ruhiyyə yaratmaq"
        ],
        worstStressResponse: [
            "Problemi içlərində saxlamaq",
            "Həddindən artıq emosional olmaq",
            "Başqalarına həddindən artıq güvənmək"
        ],
        othersWorsenStress: [
            "Onlara lağ etmək",
            "Onların hisslərini gözardı etmək",
            "Münaqişəyə sürükləmək"
        ],
        achievingSuccess: "ESFJ-lər iş yerində sosial və dəstəkləyici əməkdaşlardır. Uğur üçün onların ünsiyyət, empatiya və komanda işi kimi güclü tərəflərini istifadə etməli, daha obyektiv və qətiyyətli olmaq sahələrini inkişaf etdirməlidirlər.",
        potentialProblems: [
            "Tənqidə həssaslıq",
            "Münaqişədən qaçma meyli",
            "Öz ehtiyaclarını gözardı etmək"
        ],
        suggestionsDo: [
            "Daha qətiyyətli olmaq",
            "Məntiqi yanaşmaları inkişaf etdirmək",
            "Öz fikirlərini daha açıq ifadə etmək",
            "Tənqidə daha tolerant olmaq"
        ],
        suggestionsDont: [
            "Həddindən artıq özünü qurban vermək",
            "Münaqişədən tamamilə qaçmaq",
            "Başqalarının təsdiqinə həddindən artıq asılı olmaq"
        ]
    },
    "ISTP": {
        name: "Virtuoz (The Virtuoso)",
        summary: "ISTP-lər praktik, analitik və macəraçı şəxslərdir. Onlar problemləri praktik şəkildə həll etməyi sevir, yeni təcrübələr axtarır və azadlığına dəyər verirlər.",
        workplacePersonality: "ISTP olaraq, siz praktik, məntiqi və çevik bir şəxssiniz. İş yerində problemləri həll etməyi, yeni sistemləri öyrənməyi və praktiki tapşırıqları yerinə yetirməyi xoşlayırsınız. Tez-tez təkbaşına işləməyi üstün tutursunuz və azadlığınıza dəyər verirsiniz. Bəzən qapalı və ya laqeyd görünə bilərsiniz.",
        keyMotivators: [
            "Praktik problemlərin həlli",
            "Müstəqil işləmək",
            "Yeni bacarıqlar öyrənmək",
            "Fiziki fəaliyyətlər və macəra"
        ],
        idealWorkEnvironment: [
            "Müstəqil işləməyə imkan verən mühit",
            "Çevik və adaptiv iş sahəsi",
            "Praktik tapşırıqların bol olduğu yer",
            "Rutin olmayan və müxtəlif işlər"
        ],
        coreValues: [
            "Müstəqillik",
            "Effektivlik",
            "Məntiq",
            "Uyğunlaşma"
        ],
        preferredWorkTasks: [
            "Mexaniki problemlərin həlli",
            "Sistemlərin təmiri və qurulması",
            "Yeni texnologiyaların öyrənilməsi",
            "Təkbaşına layihələr"
        ],
        contributionsToOrganization: [
            "Effektiv və praktik həllər tapmaq",
            "Texniki bacarıqlar təmin etmək",
            "Krizis vəziyyətlərində soyuqqanlı olmaq",
            "Problem həll etmə bacarıqları"
        ],
        workingWithTeam: "ISTP-lər komandada praktik və bacarıqlı üzvlər olurlar. Onlar adətən söhbətlərə qatılmaqdansa, iş görməyi üstün tuturlar. Praktik məsələlərdə dəyərli töhfələr verirlər.",
        teamHelp: [
            "Praktik problemləri həll etmək",
            "Texniki dəstək vermək",
            "Effektiv həllər tapmaq"
        ],
        teamIrritate: [
            "Çox sosial olmağa ehtiyac duymamaq",
            "Duyğusal söhbətlərdən çəkinmək",
            "Planlaşdırmaya az diqqət yetirmək"
        ],
        teamActionSteps: [
            "Daha çox ünsiyyət qurmağa çalışmaq",
            "Hisslərini ifadə etməyi öyrənmək",
            "Komanda planlarına daha çox qatılmaq"
        ],
        communicatingWithOthers: "ISTP-lər ünsiyyətdə qısa, dəqiq və birbaşa olurlar. Onlar faktlara və real məlumatlara fokuslanırlar.",
        communicationStrengths: [
            "Birbaşa və dəqiq ünsiyyət",
            "Məntiqi ifadə",
            "Problemlərə fokuslanma"
        ],
        communicationMisunderstanding: [
            "Hissləri ifadə etməkdə çətinlik",
            "Həddindən artıq birbaşa olmaq",
            "Qeyri-verbal siqnallara az diqqət"
        ],
        communicationActionSteps: [
            "Daha çox empatiya göstərmək",
            "Hisslərini ifadə etməyi öyrənmək",
            "Daha səbirli dinləyici olmaq"
        ],
        managingConflict: "ISTP-lər münaqişələri məntiqi və praktik şəkildə həll etməyə çalışırlar. Onlar emosional partlamalardan xoşlanmırlar.",
        conflictHelp: [
            "Problemlərə məntiqi həllər tapmaq",
            "Vəziyyəti soyuqqanlı təhlil etmək",
            "Praktik addımlar təklif etmək"
        ],
        conflictTriggeredBy: [
            "Məntiqsizlik",
            "Azadlığın məhdudlaşdırılması",
            "Çoxlu qaydalar və bürokratiya"
        ],
        conflictIrritate: [
            "Hissləri gözardı etmək",
            "Münaqişədən qaçmaq",
            "Həddindən artıq təkbaşına hərəkət etmək"
        ],
        conflictActionSteps: [
            "Daha çox empatiya göstərmək",
            "Hissləri nəzərə almağı öyrənmək",
            "Komanda ilə daha çox əməkdaşlıq etmək"
        ],
        takingTheLead: "ISTP-lər liderlikdə praktik və adaptiv olurlar. Onlar adətən formal liderlik rollarını deyil, problem həll edən və ya texniki sahədə ekspert rolunu üstün tuturlar.",
        inspireOthers: [
            "Öz praktik bacarıqları ilə",
            "Səmərəlilik nümayiş etdirməklə",
            "Çevik yanaşmaları ilə"
        ],
        makeThingsHappen: [
            "Praktik həllər tapmaq",
            "Ani qərarlar vermək",
            "Müstəqil işləmək"
        ],
        leadershipDevelopment: [
            "Daha çox planlaşdırma bacarıqları inkişaf etdirmək",
            "Komanda üzvlərini motivasiya etməyi öyrənmək",
            "Daha çox məsuliyyət götürmək"
        ],
        makingDecisions: "ISTP-lər qərarları anında, praktik faktlara əsaslanaraq verirlər. Onlar çevik və ani qərarlar qəbul etməyə meyillidirlər.",
        decisionStrengths: [
            "Praktik və sürətli qərarlar",
            "Çeviklik",
            "Ani problemləri həll etmə bacarığı"
        ],
        decisionChallenges: [
            "Uzunmüddətli planlaşdırmada çətinlik",
            "Hissləri gözardı etmək",
            "Həddindən artıq impulsiv olmaq"
        ],
        decisionActionSteps: [
            "Qərar qəbul edərkən daha çox məlumat toplamaq",
            "Uzunmüddətli nəticələri düşünmək",
            "Başqalarının fikirlərini dinləmək"
        ],
        gettingThingsDone: "ISTP-lər işləri praktik və çevik şəkildə tamamlayırlar. Onlar rutinə dözümsüz olurlar və yeni, maraqlı tapşırıqları üstün tuturlar.",
        tasksHelp: [
            "Praktik tapşırıqları həll etmək",
            "Problemlərə sürətli reaksiya vermək",
            "Səmərəli həllər tapmaq"
        ],
        tasksIrritate: [
            "Rutin işlər",
            "Həddindən artıq planlaşdırma",
            "Bürokratiya"
        ],
        tasksActionSteps: [
            "Planlaşdırma bacarıqlarını inkişaf etdirmək",
            "Daha məsuliyyətli olmaq",
            "Uzunmüddətli hədəflərə fokuslanmaq"
        ],
        growthAndDevelopment: "ISTP-lər təcrübə və praktik öyrənmə yolu ilə inkişaf edirlər. Onlar texniki bacarıqları və fiziki fəaliyyətləri öyrənməyi sevirlər.",
        learningImproved: [
            "Praktik və texniki mövzular",
            "Fərdi təcrübələr",
            "Azad öyrənmə mühiti"
        ],
        learningHindered: [
            "Abstrakt və nəzəri mövzular",
            "Çoxlu qrup işləri",
            "Formal təlimlər"
        ],
        howYouViewChange: [
            "Dəyişikliyə açıq olmaq",
            "Yeni imkanları araşdırmaq",
            "Dəyişikliyin praktik faydalarını görmək"
        ],
        opportunitiesForGrowth: [
            "Hisslərini ifadə etməyi öyrənmək",
            "Sosial bacarıqları inkişaf etdirmək",
            "Daha çox planlaşdırma etmək",
            "Uzunmüddətli məqsədlərə fokuslanmaq"
        ],
        copingWithStress: "ISTP-lər stress altında soyuqqanlı ola bilər, lakin həddindən artıq stress altında özlərini təcrid edə bilər və ya riskli davranışlar sərgiləyə bilərlər.",
        stressTriggers: [
            "Azadlığın məhdudlaşdırılması",
            "Həddindən artıq qaydalar",
            "Emosional təzyiqlər",
            "Rutin və darıxdırıcı işlər"
        ],
        bestStressResponse: [
            "Tək vaxt keçirmək",
            "Fiziki fəaliyyətlə məşğul olmaq",
            "Problemləri praktik həll etmək",
            "Yeni bir hobi ilə məşğul olmaq"
        ],
        othersHelpStress: [
            "Onlara məkan vermək",
            "Onların problemlərini dinləmək (emosional dəstək olmadan)",
            "Praktik həllər təklif etmək"
        ],
        worstStressResponse: [
            "Həddindən artıq risk almaq",
            "Qapalı olmaq və ünsiyyətdən qaçmaq",
            "Başqalarına qarşı sərt olmaq"
        ],
        othersWorsenStress: [
            "Onları sosial fəaliyyətlərə məcbur etmək",
            "Hissləri ilə bağlı suallar vermək",
            "Onlara nəzarət etməyə çalışmaq"
        ],
        achievingSuccess: "ISTP-lər iş yerində bacarıqlı və praktik problemlər həll edənlərdir. Uğur üçün onların müstəqillik, məntiq və çeviklik kimi güclü tərəflərini istifadə etməli, hisslərini ifadə etməyi və uzunmüddətli planlaşdırma bacarıqlarını inkişaf etdirməlidirlər.",
        potentialProblems: [
            "Hissləri gözardı etmək",
            "Uzunmüddətli planlaşdırmada çətinlik",
            "Sosial bacarıqlarda zəiflik"
        ],
        suggestionsDo: [
            "Daha çox ünsiyyət qurmaq",
            "Hisslərini ifadə etməyi öyrənmək",
            "Planlaşdırma bacarıqlarını inkişaf etdirmək",
            "Daha çox məsuliyyət götürmək"
        ],
        suggestionsDont: [
            "Həddindən artıq impulsiv olmaq",
            "Sosiallaşmaqdan tamamilə qaçmaq",
            "Rutin işləri gözardı etmək"
        ]
    },
    "ISFP": {
        name: "Macəraçı (The Adventurer)",
        summary: "ISFP-lər yaradıcı, həssas və spontan şəxslərdir. Onlar incəsənətə, təbiətə və gözəlliyə dəyər verir, azadlığına önəm verir və öz hisslərinə güvənirlər.",
        workplacePersonality: "ISFP olaraq, siz yaradıcı, həssas və spontan bir şəxssiniz. İş yerində azadlığa və özünüifadəyə dəyər verirsiniz. Gözəlliyə və estetikaya diqqət yetirirsiniz, praktik və ya incəsənət sahələrində uğurlu olursunuz. Bəzən qərarsız və ya asanlıqla yorulan görünə bilərsiniz.",
        keyMotivators: [
            "Yaradıcılıq imkanları",
            "Şəxsi azadlıq",
            "Gözəllik və estetika",
            "Duyğusal zənginlik"
        ],
        idealWorkEnvironment: [
            "Yaradıcılığa imkan verən mühit",
            "Azad və çevik iş sahəsi",
            "Gərginliyin az olduğu atmosfer",
            "Hisslərə dəyər verilən yer"
        ],
        coreValues: [
            "Orijinallıq",
            "Gözəllik",
            "Empatiya",
            "Müstəqillik"
        ],
        preferredWorkTasks: [
            "İncəsənət və dizayn işləri",
            "Praktik və əl işləri",
            "Şəxsi məkan tələb edən layihələr",
            "Spontan tapşırıqlar"
        ],
        contributionsToOrganization: [
            "Yaradıcı həllər təklif etmək",
            "Gözəllik və estetika qatqısı",
            "Həssas və empatik yanaşma",
            "Uyğunlaşma bacarığı"
        ],
        workingWithTeam: "ISFP-lər komandada sakit və dəstəkləyici üzvlər olurlar. Onlar harmoniyaya dəyər verirlər və münaqişələrdən çəkinirlər. Bəzən öz fikirlərini ifadə etməkdə çətinlik çəkə bilərlər.",
        teamHelp: [
            "Dəstək və empatiya göstərmək",
            "Yaradıcı perspektiv təmin etmək",
            "Harmoniya yaratmaq"
        ],
        teamIrritate: [
            "Qərarsızlıq",
            "Tənqidə həssaslıq",
            "Həddindən artıq qapalı olmaq"
        ],
        teamActionSteps: [
            "Daha qətiyyətli olmaq",
            "Öz fikirlərini daha açıq ifadə etmək",
            "Komanda ilə daha çox əməkdaşlıq etmək"
        ],
        communicatingWithOthers: "ISFP-lər ünsiyyətdə sakit və həssas olurlar. Onlar adətən qeyri-verbal ünsiyyətə üstünlük verirlər və hisslərini ifadə etməkdə çətinlik çəkə bilərlər.",
        communicationStrengths: [
            "Yaxşı dinləyici olmaq",
            "Empatik yanaşma",
            "Duyğusal dərinlik"
        ],
        communicationMisunderstanding: [
            "Hisslərini ifadə etməkdə çətinlik",
            "Həddindən artıq həssas olmaq",
            "Konkret məlumatları gözardı etmək"
        ],
        communicationActionSteps: [
            "Daha açıq ünsiyyət qurmağı öyrənmək",
            "Öz fikirlərinizi daha qətiyyətlə ifadə etmək",
            "Məntiqi dəlillərə daha çox diqqət yetirmək"
        ],
        managingConflict: "ISFP-lər münaqişələri idarə etməkdə harmoniyaya üstünlük verirlər. Onlar gərginlikdən çəkinirlər və tez-tez öz hisslərini yatırırlar.",
        conflictHelp: [
            "Harmoniya yaratmaq",
            "Empatik yanaşmaq",
            "Başqalarının hisslərini anlamaq"
        ],
        conflictTriggeredBy: [
            "Dəyərlərin pozulması",
            "Şəxsi tənqid",
            "Məhdudlaşdırıcı qaydalar"
        ],
        conflictIrritate: [
            "Münaqişədən qaçmaq",
            "Həddindən artıq həssaslıq",
            "Qərarsızlıq"
        ],
        conflictActionSteps: [
            "Problemləri birbaşa həll etməyi öyrənmək",
            "Öz ehtiyaclarını ifadə etmək",
            "Daha qətiyyətli olmaq"
        ],
        takingTheLead: "ISFP-lər liderlikdə adətən formal rolları deyil, daha çox sənəti, yaradıcılığı və şəxsi azadlığı təmsil edən rolları üstün tuturlar. Onlar öz nümunələri ilə ilham verirlər.",
        inspireOthers: [
            "Öz yaradıcılıqları ilə",
            "Həssas yanaşmaları ilə",
            "Fərdi azadlığı təşviq etməklə"
        ],
        makeThingsHappen: [
            "Spontan şəkildə hərəkət etmək",
            "Yaradıcı həllər tapmaq",
            "Ani imkanları dəyərləndirmək"
        ],
        leadershipDevelopment: [
            "Daha çox planlaşdırma bacarıqları inkişaf etdirmək",
            "Daha qətiyyətli olmaq",
            "Məntiqi yanaşmaları inkişaf etdirmək"
        ],
        makingDecisions: "ISFP-lər qərarları hisslərinə və şəxsi dəyərlərinə əsaslanaraq verirlər. Onlar çevik və spontan olurlar.",
        decisionStrengths: [
            "Duyğusal zəkaya əsaslanan qərarlar",
            "Çeviklik",
            "Yaradıcı həllər"
        ],
        decisionChallenges: [
            "Qərarsızlıq",
            "Məntiqi detalları gözardı etmək",
            "Həddindən artıq subyektiv olmaq"
        ],
        decisionActionSteps: [
            "Qərar qəbul edərkən faktlara daha çox diqqət yetirmək",
            "Uzunmüddətli nəticələri düşünmək",
            "Başqalarının fikirlərini dinləmək"
        ],
        gettingThingsDone: "ISFP-lər işləri spontan və yaradıcı şəkildə tamamlayırlar. Onlar rutinə dözümsüz olurlar və azadlığa dəyər verirlər.",
        tasksHelp: [
            "Yaradıcı həllər təklif etmək",
            "Çevik və adaptiv olmaq",
            "Gözəllik və estetika qatmaq"
        ],
        tasksIrritate: [
            "Rutin və darıxdırıcı işlər",
            "Həddindən artıq planlaşdırma",
            "Məhdudlaşdırıcı qaydalar"
        ],
        tasksActionSteps: [
            "Daha çox planlaşdırma bacarıqları inkişaf etdirmək",
            "Daha məsuliyyətli olmaq",
            "Uzunmüddətli hədəflərə fokuslanmaq"
        ],
        growthAndDevelopment: "ISFP-lər təcrübə və şəxsi kəşf yolu ilə öyrənirlər. Onlar incəsənət, təbiət və duyğusal dərinliklə bağlı mövzuları öyrənməyi sevirlər.",
        learningImproved: [
            "Praktik və yaradıcı tapşırıqlar",
            "Fərdi təcrübələr",
            "Azad öyrənmə mühiti"
        ],
        learningHindered: [
            "Abstrakt və nəzəri mövzular",
            "Çoxlu qrup işləri",
            "Tənqidi rəyin olmaması"
        ],
        howYouViewChange: [
            "Dəyişikliyə açıq olmaq",
            "Yeni imkanları araşdırmaq",
            "Dəyişikliyin şəxsi azadlığına necə təsir edəcəyini düşünmək"
        ],
        opportunitiesForGrowth: [
            "Daha qətiyyətli olmaq",
            "Məntiqi yanaşmaları inkişaf etdirmək",
            "Daha çox məsuliyyət götürmək",
            "Tənqidə daha tolerant olmaq"
        ],
        copingWithStress: "ISFP-lər stress altında həddindən artıq həssas ola bilər və ya özlərini təcrid edə bilərlər. Onlar adətən stressdən qaçmağa çalışırlar.",
        stressTriggers: [
            "Məhdudlaşdırıcı qaydalar",
            "Tənqid",
            "Gərginlik və münaqişə",
            "Yaradıcılığın boğulması"
        ],
        bestStressResponse: [
            "Yaradıcı fəaliyyətlərlə məşğul olmaq",
            "Təbiətdə vaxt keçirmək",
            "Tək vaxt keçirmək",
            "Dəstəkləyici dostlarla danışmaq"
        ],
        othersHelpStress: [
            "Onlara məkan vermək",
            "Onların hisslərini dinləmək",
            "Dəstək və empatiya göstərmək"
        ],
        worstStressResponse: [
            "Özünü təcrid etmək",
            "Həddindən artıq emosional olmaq",
            "Problemi içlərində saxlamaq"
        ],
        othersWorsenStress: [
            "Onları tənqid etmək",
            "Onları sosial fəaliyyətlərə məcbur etmək",
            "Onlara qaydalar tətbiq etmək"
        ],
        achievingSuccess: "ISFP-lər iş yerində yaradıcı və həssas əməkdaşlardır. Uğur üçün onların orijinallıq, empatiya və çeviklik kimi güclü tərəflərini istifadə etməli, daha qətiyyətli və məntiqi olmaq sahələrini inkişaf etdirməlidirlər.",
        potentialProblems: [
            "Qərarsızlıq",
            "Tənqidə həssaslıq",
            "Uzunmüddətli planlaşdırmada çətinlik"
        ],
        suggestionsDo: [
            "Daha qətiyyətli olmaq",
            "Məntiqi yanaşmaları inkişaf etdirmək",
            "Daha çox məsuliyyət götürmək",
            "Tənqidə daha tolerant olmaq"
        ],
        suggestionsDont: [
            "Həddindən artıq emosional olmaq",
            "Münaqişədən tamamilə qaçmaq",
            "Həddindən artıq impulsiv olmaq"
        ]
    },
    "ESTP": {
        name: "Sahibkar (The Entrepreneur)",
        summary: "ESTP-lər enerjili, praktik və spontan şəxslərdir. Onlar macəra axtarır, problemləri praktik şəkildə həll edir və hərəkətə keçməyi sevirlər.",
        workplacePersonality: "ESTP olaraq, siz enerjili, praktik və spontan bir şəxssiniz. İş yerində hərəkətə keçməyi, problemləri həll etməyi və yeni imkanları araşdırmağı xoşlayırsınız. Onlar adaptiv və çevik olurlar, çətinliklərə tez reaksiya verirlər. Bəzən düşüncəsiz və ya impulsiv görünə bilərsiniz.",
        keyMotivators: [
            "Hərəkət və fəaliyyət",
            "Praktik problemlərin həlli",
            "Yeni təcrübələr",
            "Spontanlıq və çeviklik"
        ],
        idealWorkEnvironment: [
            "Dinamik və sürətli iş mühiti",
            "Praktik tapşırıqların bol olduğu yer",
            "Qaydaların az olduğu, azad mühit",
            "Yeni imkanların araşdırılması"
        ],
        coreValues: [
            "Fəaliyyət",
            "Müstəqillik",
            "Praktiklik",
            "Çeviklik"
        ],
        preferredWorkTasks: [
            "Krizis idarəetməsi",
            "Praktik problemlərin həlli",
            "Satış və marketinq fəaliyyətləri",
            "Yeni layihələrin başlanması"
        ],
        contributionsToOrganization: [
            "Sürətli qərarlar qəbul etmək",
            "Hərəkətə keçmək",
            "Problemlərə praktik həllər tapmaq",
            "Enerji və motivasiya gətirmək"
        ],
        workingWithTeam: "ESTP-lər komandada enerjili və praktik üzvlər olurlar. Onlar işləri sürətlə icra etməyi sevirlər və komandaya dinamizm qatırlar.",
        teamHelp: [
            "Sürətli həllər təklif etmək",
            "Hərəkətə keçmək",
            "Praktik dəstək vermək"
        ],
        teamIrritate: [
            "Düşüncəsiz qərarlar",
            "Uzunmüddətli planlaşdırmaya az diqqət",
            "Həddindən artıq risk almaq"
        ],
        teamActionSteps: [
            "Daha çox planlaşdırma etmək",
            "Daha çox məlumat toplamaq",
            "Komanda üzvlərinin fikirlərini dinləmək"
        ],
        communicatingWithOthers: "ESTP-lər ünsiyyətdə birbaşa, enerjili və praktik olurlar. Onlar məqsədəuyğun və effektiv ünsiyyətə üstünlük verirlər.",
        communicationStrengths: [
            "Birbaşa və aydın ünsiyyət",
            "Məqsədəuyğun ifadə",
            "Dinamik danışıq tərzi"
        ],
        communicationMisunderstanding: [
            "Hissləri gözardı etmək",
            "Həddindən artıq birbaşa olmaq",
            "Abstrakt ideyaları başa düşməkdə çətinlik"
        ],
        communicationActionSteps: [
            "Daha çox empatiya göstərmək",
            "Hissləri nəzərə almağı öyrənmək",
            "Daha səbirli dinləyici olmaq"
        ],
        managingConflict: "ESTP-lər münaqişələri praktik və birbaşa şəkildə həll etməyə çalışırlar. Onlar gərginliyi dərhal aradan qaldırmağa meyillidirlər.",
        conflictHelp: [
            "Problemləri sürətli həll etmək",
            "Praktik həllər təklif etmək",
            "Dinamik yanaşma"
        ],
        conflictTriggeredBy: [
            "Hərəkətsizlik və qərarsızlıq",
            "Bürokratiya və məhdudiyyətlər",
            "Şəxsi azadlığın məhdudlaşdırılması"
        ],
        conflictIrritate: [
            "Hissləri gözardı etmək",
            "Həddindən artıq impulsiv olmaq",
            "Riskli davranışlar"
        ],
        conflictActionSteps: [
            "Daha çox empatiya göstərmək",
            "Qərar qəbul edərkən başqalarının fikirlərini dinləmək",
            "Daha diqqətli olmaq"
        ],
        takingTheLead: "ESTP-lər liderlikdə enerjili və praktik olurlar. Onlar ani qərarlar qəbul edir və yeni imkanları dəyərləndirməyi bacarırlar.",
        inspireOthers: [
            "Enerjiləri və dinamiklikləri ilə",
            "Sürətli qərarlar qəbul etməklə",
            "Yeni imkanları görməklə"
        ],
        makeThingsHappen: [
            "Ani qərarlar vermək",
            "Riskləri idarə etmək",
            "Hərəkətə keçmək"
        ],
        leadershipDevelopment: [
            "Daha çox planlaşdırma bacarıqları inkişaf etdirmək",
            "Daha məsuliyyətli olmaq",
            "Uzunmüddətli hədəflərə fokuslanmaq"
        ],
        makingDecisions: "ESTP-lər qərarları anında, praktik faktlara əsaslanaraq verirlər. Onlar çevik və ani qərarlar qəbul etməyə meyillidirlər.",
        decisionStrengths: [
            "Sürətli və praktik qərarlar",
            "Çeviklik",
            "Ani problemləri həll etmə bacarığı"
        ],
        decisionChallenges: [
            "Uzunmüddətli planlaşdırmada çətinlik",
            "Hissləri gözardı etmək",
            "Həddindən artıq impulsiv olmaq"
        ],
        decisionActionSteps: [
            "Qərar qəbul edərkən daha çox məlumat toplamaq",
            "Uzunmüddətli nəticələri düşünmək",
            "Başqalarının fikirlərini dinləmək"
        ],
        gettingThingsDone: "ESTP-lər işləri sürətli və effektiv şəkildə tamamlayırlar. Onlar rutinə dözümsüz olurlar və yeni, maraqlı tapşırıqları üstün tuturlar.",
        tasksHelp: [
            "Sürətli həllər təklif etmək",
            "Ani qərarlar vermək",
            "Hərəkətə keçmək"
        ],
        tasksIrritate: [
            "Rutin işlər",
            "Həddindən artıq planlaşdırma",
            "Bürokratiya"
        ],
        tasksActionSteps: [
            "Planlaşdırma bacarıqlarını inkişaf etdirmək",
            "Daha məsuliyyətli olmaq",
            "Uzunmüddətli hədəflərə fokuslanmaq"
        ],
        growthAndDevelopment: "ESTP-lər təcrübə və praktik öyrənmə yolu ilə inkişaf edirlər. Onlar texniki bacarıqları və fiziki fəaliyyətləri öyrənməyi sevirlər.",
        learningImproved: [
            "Praktik və texniki mövzular",
            "Fərdi təcrübələr",
            "Azad öyrənmə mühiti"
        ],
        learningHindered: [
            "Abstrakt və nəzəri mövzular",
            "Çoxlu qrup işləri",
            "Formal təlimlər"
        ],
        howYouViewChange: [
            "Dəyişikliyə açıq olmaq",
            "Yeni imkanları araşdırmaq",
            "Dəyişikliyin praktik faydalarını görmək"
        ],
        opportunitiesForGrowth: [
            "Hisslərini ifadə etməyi öyrənmək",
            "Sosial bacarıqları inkişaf etdirmək",
            "Daha çox planlaşdırma etmək",
            "Uzunmüddətli məqsədlərə fokuslanmaq"
        ],
        copingWithStress: "ESTP-lər stress altında soyuqqanlı ola bilər, lakin həddindən artıq stress altında özlərini təcrid edə bilər və ya riskli davranışlar sərgiləyə bilərlər.",
        stressTriggers: [
            "Azadlığın məhdudlaşdırılması",
            "Həddindən artıq qaydalar",
            "Emosional təzyiqlər",
            "Rutin və darıxdırıcı işlər"
        ],
        bestStressResponse: [
            "Tək vaxt keçirmək",
            "Fiziki fəaliyyətlə məşğul olmaq",
            "Problemləri praktik həll etmək",
            "Yeni bir hobi ilə məşğul olmaq"
        ],
        othersHelpStress: [
            "Onlara məkan vermək",
            "Onların problemlərini dinləmək (emosional dəstək olmadan)",
            "Praktik həllər təklif etmək"
        ],
        worstStressResponse: [
            "Həddindən artıq risk almaq",
            "Qapalı olmaq və ünsiyyətdən qaçmaq",
            "Başqalarına qarşı sərt olmaq"
        ],
        othersWorsenStress: [
            "Onları sosial fəaliyyətlərə məcbur etmək",
            "Hissləri ilə bağlı suallar vermək",
            "Onlara nəzarət etməyə çalışmaq"
        ],
        achievingSuccess: "ESTP-lər iş yerində bacarıqlı və praktik problemlər həll edənlərdir. Uğur üçün onların müstəqillik, məntiq və çeviklik kimi güclü tərəflərini istifadə etməli, hisslərini ifadə etməyi və uzunmüddətli planlaşdırma bacarıqlarını inkişaf etdirməlidirlər.",
        potentialProblems: [
            "Hissləri gözardı etmək",
            "Uzunmüddətli planlaşdırmada çətinlik",
            "Sosial bacarıqlarda zəiflik"
        ],
        suggestionsDo: [
            "Daha çox ünsiyyət qurmaq",
            "Hisslərini ifadə etməyi öyrənmək",
            "Planlaşdırma bacarıqlarını inkişaf etdirmək",
            "Daha çox məsuliyyət götürmək"
        ],
        suggestionsDont: [
            "Həddindən artıq impulsiv olmaq",
            "Sosiallaşmaqdan tamamilə qaçmaq",
            "Rutin işləri gözardı etmək"
        ]
    },
    "ESFP": {
        name: "Əyləndirici (The Entertainer)",
        summary: "ESFP-lər enerjili, sosial və spontan şəxslərdir. Onlar həyatı dolu-dolu yaşayır, insanları əyləndirməyi sevir və hazırki anda fokuslanırlar.",
        workplacePersonality: "ESFP olaraq, siz enerjili, sosial və spontan bir şəxssiniz. İş yerində canlı və dinamik bir atmosfer yaradırsınız. İnsanlarla əlaqə qurmağı, onlara kömək etməyi və hər kəsin əyləncəli vaxt keçirməsini təmin etməyi xoşlayırsınız. Ani qərarlar qəbul edə və dəyişikliklərə asanlıqla adaptasiya ola bilirsiniz. Bəzən səthi və ya məsuliyyətsiz görünə bilərsiniz.",
        keyMotivators: [
            "Sosial əlaqələr",
            "Hərəkət və fəaliyyət",
            "Yeni təcrübələr",
            "İnsanları əyləndirmək"
        ],
        idealWorkEnvironment: [
            "Dinamik və sosial mühit",
            "İnsanlarla əlaqə qurmaq imkanları",
            "Rutin olmayan və müxtəlif işlər",
            "Yaradıcılığa yer verilən sahələr"
        ],
        coreValues: [
            "Spontanlıq",
            "Həzz",
            "Empatiya",
            "Sosiallıq"
        ],
        preferredWorkTasks: [
            "Sosial tədbirlərin təşkili",
            "Müştərilərlə birbaşa işləmək",
            "Komanda motivasiyasını artırmaq",
            "Ani problemlərin həlli"
        ],
        contributionsToOrganization: [
            "Müsbət iş mühiti yaratmaq",
            "Komandanın əhval-ruhiyyəsini yüksəltmək",
            "İnsanlarla effektiv əlaqə qurmaq",
            "Çevik və uyğunlaşa bilən olmaq"
        ],
        workingWithTeam: "ESFP-lər komandada sosial və enerjili üzvlər olurlar. Onlar komanda ruhunu yüksəltməyə və hər kəsin rahat hiss etməsini təmin etməyə çalışırlar. Dəstəkləyici və mehribandırlar.",
        teamHelp: [
            "Əməkdaşlığı təşviq etmək",
            "Müsbət atmosfer yaratmaq",
            "Hər kəsin rahat hiss etməsini təmin etmək"
        ],
        teamIrritate: [
            "Uzunmüddətli planlaşdırmaya az diqqət",
            "Həddindən artıq spontan olmaq",
            "Bəzən səthi görünmək"
        ],
        teamActionSteps: [
            "Daha çox planlaşdırma etmək",
            "Daha çox məlumat toplamaq",
            "Daha ciddi yanaşma tətbiq etmək"
        ],
        communicatingWithOthers: "ESFP-lər ünsiyyətdə canlı, ifadəli və sosial olurlar. Onlar başqaları ilə asanlıqla əlaqə qurur və hər kəsin diqqətini çəkirlər.",
        communicationStrengths: [
            "Yaxşı ünsiyyət bacarıqları",
            "Empatik dinləmə",
            "Hissləri asanlıqla ifadə etmək"
        ],
        communicationMisunderstanding: [
            "Həddindən artıq şəxsi olmaq",
            "Məntiqi detalları gözardı etmək",
            "Həddindən artıq spontan olmaq"
        ],
        communicationActionSteps: [
            "Daha obyektiv olmağa çalışmaq",
            "Faktlara daha çox diqqət yetirmək",
            "Uzunmüddətli planlaşdırmanı nəzərə almaq"
        ],
        managingConflict: "ESFP-lər münaqişələri idarə etməkdə harmoniyaya üstünlük verirlər. Onlar gərginlikdən çəkinirlər və tez-tez başqalarını razı salmağa çalışırlar.",
        conflictHelp: [
            "Harmoniya yaratmaq",
            "Empatik yanaşmaq",
            "Başqalarını dinləmək"
        ],
        conflictTriggeredBy: [
            "Münaqişə və gərginlik",
            "Rutin və darıxdırıcılıq",
            "Şəxsi azadlığın məhdudlaşdırılması"
        ],
        conflictIrritate: [
            "Münaqişədən qaçmaq",
            "Həddindən artıq emosional olmaq",
            "Qərarsızlıq"
        ],
        conflictActionSteps: [
            "Daha qətiyyətli olmaq",
            "Problemləri birbaşa həll etməyi öyrənmək",
            "Öz ehtiyaclarınızı ifadə etmək"
        ],
        takingTheLead: "ESFP-lər liderlikdə enerjili və sosial olurlar. Onlar komandalarına motivasiya verməyi və müsbət əhval-ruhiyyə yaratmağı bacarırlar.",
        inspireOthers: [
            "Enerjiləri və entuziazmları ilə",
            "Sosial bacarıqları ilə",
            "Müsbət atmosfer yaratmaqla"
        ],
        makeThingsHappen: [
            "Ani qərarlar vermək",
            "Spontan şəkildə hərəkət etmək",
            "İnsanları motivasiya etmək"
        ],
        leadershipDevelopment: [
            "Daha çox planlaşdırma bacarıqları inkişaf etdirmək",
            "Daha məsuliyyətli olmaq",
            "Uzunmüddətli hədəflərə fokuslanmaq"
        ],
        makingDecisions: "ESFP-lər qərarları hisslərinə və hazırki anda olan imkanlara əsaslanaraq verirlər. Onlar çevik və spontan olurlar.",
        decisionStrengths: [
            "Sürətli və çevik qərarlar",
            "İnsan amilini nəzərə almaq",
            "Yaradıcı həllər"
        ],
        decisionChallenges: [
            "Uzunmüddətli planlaşdırmada çətinlik",
            "Məntiqi detalları gözardı etmək",
            "Həddindən artıq impulsiv olmaq"
        ],
        decisionActionSteps: [
            "Qərar qəbul edərkən daha çox məlumat toplamaq",
            "Uzunmüddətli nəticələri düşünmək",
            "Başqalarının fikirlərini dinləmək"
        ],
        gettingThingsDone: "ESFP-lər işləri sürətli və enerjili şəkildə tamamlayırlar. Onlar rutinə dözümsüz olurlar və yeni, maraqlı tapşırıqları üstün tuturlar.",
        tasksHelp: [
            "Hərəkətə keçmək",
            "Müsbət atmosfer yaratmaq",
            "Komandanın motivasiyasını yüksəltmək"
        ],
        tasksIrritate: [
            "Rutin işlər",
            "Həddindən artıq planlaşdırma",
            "Məsuliyyətsizlik"
        ],
        tasksActionSteps: [
            "Planlaşdırma bacarıqlarını inkişaf etdirmək",
            "Daha məsuliyyətli olmaq",
            "Uzunmüddətli hədəflərə fokuslanmaq"
        ],
        growthAndDevelopment: "ESFP-lər təcrübə və sosial qarşılıqlı əlaqə vasitəsilə öyrənirlər. Onlar praktik bilikləri və başqalarına faydalı olan məlumatları mənimsəməyi sevirlər.",
        learningImproved: [
            "Qrup işləri və müzakirələr",
            "Praktik təlimlər",
            "Dəstəkləyici öyrənmə mühiti"
        ],
        learningHindered: [
            "Abstrakt və nəzəri mövzular",
            "Yalnız fərdi öyrənmə",
            "Tənqidi rəyin olmaması"
        ],
        howYouViewChange: [
            "Dəyişikliyə açıq olmaq",
            "Yeni imkanları araşdırmaq",
            "Dəyişikliyin həzz gətirəcəyini düşünmək"
        ],
        opportunitiesForGrowth: [
            "Daha çox planlaşdırma etmək",
            "Daha məsuliyyətli olmaq",
            "Məntiqi yanaşmaları inkişaf etdirmək",
            "Tənqidə daha tolerant olmaq"
        ],
        copingWithStress: "ESFP-lər stress altında həddindən artıq emosional ola bilər və ya impulsiv davranışlar sərgiləyə bilərlər. Onlar stressdən qaçmağa çalışırlar.",
        stressTriggers: [
            "Rutin və darıxdırıcılıq",
            "Məhdudlaşdırıcı qaydalar",
            "Münaqişə və gərginlik",
            "Qəbul edilməmək hissi"
        ],
        bestStressResponse: [
            "Sosial fəaliyyətlərlə məşğul olmaq",
            "Hisslərini bölüşmək",
            "Spontan fəaliyyətlər",
            "Yeni təcrübələr axtarmaq"
        ],
        othersHelpStress: [
            "Onlara dəstək və təsdiq vermək",
            "Onların hisslərini dinləmək",
            "Müsbət əhval-ruhiyyə yaratmaq"
        ],
        worstStressResponse: [
            "Həddindən artıq impulsiv olmaq",
            "Məsuliyyətsiz davranışlar",
            "Problemi içlərində saxlamaq"
        ],
        othersWorsenStress: [
            "Onları tənqid etmək",
            "Onları rutinə məcbur etmək",
            "Onların hisslərini gözardı etmək"
        ],
        achievingSuccess: "ESFP-lər iş yerində canlı və enerjili əməkdaşlardır. Uğur üçün onların sosiallıq, empatiya və çeviklik kimi güclü tərəflərini istifadə etməli, daha planlı və məsuliyyətli olmaq sahələrini inkişaf etdirməlidirlər.",
        potentialProblems: [
            "Uzunmüddətli planlaşdırmada çətinlik",
            "Məsuliyyətsizlik",
            "Həddindən artıq impulsiv olmaq"
        ],
        suggestionsDo: [
            "Daha çox planlaşdırma etmək",
            "Daha məsuliyyətli olmaq",
            "Məntiqi yanaşmaları inkişaf etdirmək",
            "Tənqidə daha tolerant olmaq"
        ],
        suggestionsDont: [
            "Həddindən artıq emosional olmaq",
            "Rutin işləri gözardı etmək",
            "Problemlərdən qaçmaq"
        ]
    }
}

export {
    personalityTypes
};