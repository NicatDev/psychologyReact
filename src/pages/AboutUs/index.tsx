import ab01 from "../../shared/media/ab01.jpg";

const Index = () => {
  return (
    <div className="container mx-auto flex justify-between items-center py-3 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Solda yazılar */}
        <div>
          <h1 className="text-5xl font-extrabold mb-8 text-primary-blue">
            Potensialınızı üzə çıxarın
          </h1>

          <p className="text-lg mb-6 text-slate-500 leading-relaxed">
            Fərdi və komanda şəxsiyyət testləri
          </p>

          <p className="text-lg mb-12 font-[600] leading-relaxed">
            Octopus şəxsiyyət testləri təşkilatlara daha güclü və məhsuldar
            komandalar qurmağa kömək edir. Bu testlər sayəsində ünsiyyət
            yaxşılaşır, münaqişələr azalır və əməkdaşlar bir-birini daha yaxşı
            anlayır. Amma bu imkanlar yalnız şirkətlər üçün deyil. Octopus
            fərdlərə də özlərini daha dərindən tanımağa, güclü və zəif
            tərəflərini anlamağa, özlərinə uyğun iş mühiti və karyera seçimləri
            etməyə dəstək olur. Testlərimiz məşhur psixoloq Karl Yungun
            psixoloji nəzəriyyəsinə və dünya miqyasında geniş tətbiq olunan MBTI
            modelinə əsaslanır. Bu yanaşma həm şəxsi, həm də peşəkar inkişaf
            üçün dərin və praktik baxış bucağı təqdim edir. İstər komanda idarə
            edirsiniz, istərsə də şəxsi inkişaf yolundasınız, Octopus şəxsiyyət
            testləri sizə uğur üçün düzgün istiqamət göstərir.
          </p>
        </div>

        {/* Sağda şəkil */}
        <div className="flex justify-center md:justify-center">
          <img
            src={ab01}
            alt="Octopus personality test"
            className="rounded-xl shadow-lg max-h-[700px] w-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
