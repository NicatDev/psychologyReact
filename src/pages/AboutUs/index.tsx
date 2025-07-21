const Index = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 bg-white text-gray-900">
      {/* Başlıq */}
      <h1 className="text-5xl font-extrabold mb-8 text-primary-blue">
        Biz Kimik?
      </h1>

      {/* Ümumi təsvir */}
      <p className="text-lg max-w-3xl mb-12 leading-relaxed">
        Şirkətimiz müştərilərinə yüksək keyfiyyətli və innovativ texnoloji həllər təqdim edir. 
        Məqsədimiz biznesinizin inkişafına dəstək olmaqdır.
      </p>

      {/* Bölmələr */}

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4 text-primary-blue">Missiyamız</h2>
        <p className="text-base max-w-3xl leading-relaxed">
          Biz müştərilərimizin ehtiyaclarını anlamaq və onlara ən effektiv həllər təqdim etmək üçün çalışırıq. Dayanıqlı və uzunmüddətli tərəfdaşlıq yaratmaq əsas prioritetimizdir.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4 text-primary-blue">Dəyərlərimiz</h2>
        <ul className="list-disc list-inside max-w-3xl space-y-2 text-base leading-relaxed">
          <li>Etibar və şəffaflıq</li>
          <li>İnnovasiya və kreativlik</li>
          <li>Müştəri məmnuniyyəti</li>
          <li>Komanda işi və əməkdaşlıq</li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4 text-primary-blue">Təcrübəmiz</h2>
        <p className="text-base max-w-3xl leading-relaxed">
          10 ildən çox sahədə təcrübəmizlə proqram təminatı, data analitikası və sistem inteqrasiyası kimi müxtəlif xidmətlər göstəririk.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4 text-primary-blue">Komandamız</h2>
        <p className="text-base max-w-3xl leading-relaxed">
          Peşəkar və yaradıcı komandamız sizin layihənizi uğurla həyata keçirmək üçün həmişə hazırdır.
        </p>
      </section>
    </div>
  );
};

export default Index;
