import { Link } from "react-router-dom";

const blogs = [
    {
        id: 1,
        img: "https://pagedone.io/asset/uploads/1696244059.png",
        title: "Portfelinizi təşkil etmək üçün məhsula ağıllı investisiya yolları",
        desc:
            "Portfelinizi səmərəli və nizama salmaq üçün ağıllı investisiya strategiyalarını kəşf edin. Optimizasiya üçün innovativ yanaşmaları araşdırın...",
    },
    {
        id: 2,
        img: "https://pagedone.io/asset/uploads/1696244074.png",
        title: "Bizimlə sistemli investisiya vasitəsilə gəlirinizi necə artırmaq olar",
        desc:
            "Bizimlə sistemli investisiyanın gücünü açın və gəlirlərinizin artmasını izləyin. Peşəkar komandamız sizi maliyyə yolunda yönləndirəcək..",
    },
    {
        id: 3,
        img: "https://pagedone.io/asset/uploads/1696244059.png",
        title: "Portfelinizi təşkil etmək üçün məhsula ağıllı investisiya yolları",
        desc:
            "Portfelinizi səmərəli və nizama salmaq üçün ağıllı investisiya strategiyalarını kəşf edin. Optimizasiya üçün innovativ yanaşmaları araşdırın...",
    },
    {
        id: 4,
        img: "https://pagedone.io/asset/uploads/1696244074.png",
        title: "Bizimlə sistemli investisiya vasitəsilə gəlirinizi necə artırmaq olar",
        desc:
            "Bizimlə sistemli investisiyanın gücünü açın və gəlirlərinizin artmasını izləyin. Peşəkar komandamız sizi maliyyə yolunda yönləndirəcək..",
    },
    {
        id: 5,
        img: "https://pagedone.io/asset/uploads/1696244074.png",
        title: "Bizimlə sistemli investisiya vasitəsilə gəlirinizi necə artırmaq olar",
        desc:
            "Bizimlə sistemli investisiyanın gücünü açın və gəlirlərinizin artmasını izləyin. Peşəkar komandamız sizi maliyyə yolunda yönləndirəcək..",
    },
    {
        id: 6,
        img: "https://pagedone.io/asset/uploads/1696244074.png",
        title: "Bizimlə sistemli investisiya vasitəsilə gəlirinizi necə artırmaq olar",
        desc:
            "Bizimlə sistemli investisiyanın gücünü açın və gəlirlərinizin artmasını izləyin. Peşəkar komandamız sizi maliyyə yolunda yönləndirəcək..",
    },
];


const Index = () => {
    return (
        <section className="py-24">
            <div className="mx-auto container">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 leading-[3.25rem] mb-5">
                        Ən son <span className="text-indigo-600">bloqlarımız</span>
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto">
                        Bloq bölməmizə xoş gəlmisiniz, burada bilik ilhamla görüşür. Mütəxəssis məqalələr, faydalı tövsiyələr və sahəmizdəki ən son tendensiyalarla tanış olun.
                    </p>
                </div>

                <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    {blogs.map(({ id, img, title, desc }) => (
                        <div
                            key={id}
                            className="bg-white rounded-2xl shadow-md p-6 flex flex-col hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="overflow-hidden rounded-xl h-48 mb-6">
                                <img
                                    src={img}
                                    alt={title}
                                    className="object-cover w-full h-full rounded-xl"
                                />
                            </div>
                            <h3 className="text-xl text-gray-900 font-semibold leading-8 mb-4 hover:text-indigo-600 cursor-pointer">
                                {title}
                            </h3>
                            <p className="text-gray-500 flex-grow">{desc}</p>
                            <Link
                                to={`/blog-detail/${id}`}
                                className="mt-6 flex items-center gap-2 text-lg text-indigo-700 font-semibold cursor-pointer group"
                            >
                                Daha çox oxu
                                <svg
                                    width="15"
                                    height="12"
                                    viewBox="0 0 15 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="transition-transform duration-300 ease-in-out group-hover:translate-x-2"
                                >
                                    <path
                                        d="M1.25 6L13.25 6M9.5 10.5L13.4697 6.53033C13.7197 6.28033 13.8447 6.15533 13.8447 6C13.8447 5.84467 13.7197 5.71967 13.4697 5.46967L9.5 1.5"
                                        stroke="#4338CA"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Index;
