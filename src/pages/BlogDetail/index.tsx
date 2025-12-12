import { FaUser, FaCalendarAlt, FaShareAlt } from "react-icons/fa";
import dayjs from "dayjs";
import "dayjs/locale/az";
dayjs.locale("az");
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "@/api";

interface Tag {
  name: string;
}

interface BlogDetailType {
  id: number;
  title: string;
  content: string;
  author: string;
  created_at: string;
  image?: string;
  tags: Tag[];
}

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [blogDetail, setBlogDetail] = useState<BlogDetailType | null>(null);
  const [loading, setLoading] = useState(true);

  const getBlog = async () => {
    try {
      const response = await API.Auth.blogSingle(id);
      if (response.status === 200) {
        setBlogDetail(response.data);
      } else {
        throw new Error("Failed to fetch blog");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) getBlog();
  }, [id]);

  if (loading) return <p className="text-center py-10">Yüklənir...</p>;
  if (!blogDetail) return <p className="text-center py-10">Blog tapılmadı</p>;

  return (
    <section className="max-w-6xl mx-auto py-16 px-6 grid grid-cols-1 gap-12">
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
            <time dateTime={blogDetail.created_at}>
              {dayjs(blogDetail.created_at).format("D MMMM YYYY")}
            </time>
          </div>
          {/* <div className="flex items-center space-x-2 cursor-pointer hover:text-indigo-600 transition-colors">
            <FaShareAlt />
            <span>Paylaş</span>
          </div> */}
        </div>

        {blogDetail.image && (
          <div className="overflow-hidden rounded-3xl shadow-lg">
            <img
              src={blogDetail.image}
              alt={blogDetail.title}
              className="w-full object-cover object-center max-h-[450px]"
            />
          </div>
        )}

        <article className="prose prose-indigo max-w-none text-gray-700 mt-6 leading-relaxed">
          {blogDetail.content.split("\n").map((para, idx) =>
            para.trim() ? <p key={idx}>{para}</p> : null
          )}
        </article>

        <div className="flex flex-wrap gap-3 mt-4">
          {blogDetail.tags.map((tag, idx) => (
            <span
              key={idx}
              className="border border-indigo-300 text-indigo-600 rounded-full px-3 py-1 text-xs cursor-pointer hover:bg-indigo-100 transition"
            >
              #{tag.name}
            </span>
          ))}
        </div>
      </article>
    </section>
  );
};

export default BlogDetail;
