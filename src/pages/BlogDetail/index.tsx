import { FaUser, FaCalendarAlt, FaShareAlt } from "react-icons/fa";
import dayjs from "dayjs";
import "dayjs/locale/az";
dayjs.locale("az");


const blogDetail = {
    title: "Portfelinizi təşkil etmək üçün məhsula ağıllı investisiya yolları",
    img: "https://pagedone.io/asset/uploads/1696244059.png",
    author: "Admin",
    date: "2024-07-20",
    content: `
Portfelinizi səmərəli və nizama salmaq üçün ağıllı investisiya strategiyalarını kəşf edin. Optimizasiya üçün innovativ yanaşmaları araşdırın...

Bu məqalədə investisiya üçün ən yaxşı praktikaları və bazar tendensiyalarını ətraflı izah edəcəyik.
  `,
    categories: ["Investisiya", "Maliyyə", "Portfel"],
    tags: ["strategiya", "investisiya", "maliyyə planlaması"],
};

const BlogDetail = () => {
    return (
        <section className="max-w-6xl mx-auto py-16 px-6 grid grid-cols-1  gap-12">
            {/* Main Content */}
            <article className="lg:col-span-2 space-y-8">
                <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-primary-blue leading-tight">
                    {blogDetail.title}
                </h1>

                <div className="flex items-center space-x-6 my-4 text-gray-500 text-sm">
                    <div className="flex items-center space-x-2">
                        <FaUser />
                        <span>{blogDetail.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaCalendarAlt />
                        <time dateTime={blogDetail.date}>
                            {dayjs(blogDetail.date).format("D MMMM YYYY")}
                        </time>
                    </div>
                    <div className="flex items-center space-x-2 cursor-pointer hover:text-indigo-600 transition-colors">
                        <FaShareAlt />
                        <span>Paylaş</span>
                    </div>
                </div>

                <div className="overflow-hidden rounded-3xl shadow-lg">
                    <img
                        src={blogDetail.img}
                        alt={blogDetail.title}
                        className="w-full object-cover object-center max-h-[450px]"
                    />
                </div>

                <article className="prose prose-indigo max-w-none text-gray-700 mt-6 leading-relaxed">
                    {blogDetail.content.split("\n").map((para, idx) =>
                        para.trim() ? (
                            <p key={idx}>{para}</p>
                        ) : null
                    )}
                </article>

                <div className="flex flex-wrap gap-3 mt-6">
                    {blogDetail.categories.map((cat, idx) => (
                        <span
                            key={idx}
                            className="bg-indigo-100 text-indigo-700 rounded-full px-4 py-1 text-sm font-semibold"
                        >
                            {cat}
                        </span>
                    ))}
                </div>

                <div className="flex flex-wrap gap-3 mt-4">
                    {blogDetail.tags.map((tag, idx) => (
                        <span
                            key={idx}
                            className="border border-indigo-300 text-indigo-600 rounded-full px-3 py-1 text-xs cursor-pointer hover:bg-indigo-100 transition"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>
            </article>
        </section>
    );
};

export default BlogDetail;
