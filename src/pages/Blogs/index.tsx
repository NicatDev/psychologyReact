import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "@/api";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

interface Tag {
  name: string;
}

interface Blog {
  id: number;
  title: string;
  content: string;
  image?: string;
  tags: Tag[];
  author: string;
  created_at: string;
}

interface BlogResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Blog[];
}

const Blogs = () => {
  const { t } = useTranslation();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [prevPage, setPrevPage] = useState<string | null>(null);

  const fetchBlogs = async (url?: string) => {
    try {
      const response = url ? await API.Auth.custom(url) : await API.Auth.blog();

      if (response.status === 200) {
        const data: BlogResponse = response.data;
        setBlogs(data.results);
        setNextPage(data.next);
        setPrevPage(data.previous);
      } else {
        throw new Error(t("common.error"));
      }
    } catch (error: any) {
      console.error(error?.response?.data?.message || error.message);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <>
      <Helmet>
        <title>{t("blogs.title_latest_blogs")} | Octopus</title>
        <meta
          name="description"
          content="Octopus bloqlarını kəşf edin, psixologiya testləri və fərdi inkişaf haqqında ən son məlumatları oxuyun."
        />
        <meta property="og:title" content={`${t("blogs.title_latest_blogs")} | Octopus`} />
        <meta
          property="og:description"
          content="Octopus bloqlarını kəşf edin, psixologiya testləri və fərdi inkişaf haqqında ən son məlumatları oxuyun."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <section className="py-24">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            {t("blogs.title_latest_blogs")}
          </h2>

          <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {blogs.map(({ id, title, content, image }) => (
              <div
                key={id}
                className="bg-white rounded-2xl shadow-md p-6 flex flex-col hover:shadow-lg transition-shadow duration-300"
              >
                {image && (
                  <div className="overflow-hidden rounded-xl h-48 mb-6">
                    <img
                      src={image}
                      alt={title}
                      className="object-cover w-full h-full rounded-xl"
                    />
                  </div>
                )}
                <h3 className="text-xl text-gray-900 font-semibold mb-4 hover:text-indigo-600">
                  {title}
                </h3>
                <p className="text-gray-500 flex-grow">{content?.length>300?content?.slice(0, 300):content}</p>
                <Link
                  to={`/blog-detail/${id}`}
                  className="mt-6 flex items-center gap-2 text-indigo-700 font-semibold cursor-pointer group"
                >
                  {t("blogs.read_more")}
                </Link>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-10">
            <button
              disabled={!prevPage}
              onClick={() => prevPage && fetchBlogs(prevPage)}
              className={`px-4 py-2 rounded ${prevPage
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-300 text-gray-500"
                }`}
            >
              {t("blogs.prev")}
            </button>
            <button
              disabled={!nextPage}
              onClick={() => nextPage && fetchBlogs(nextPage)}
              className={`px-4 py-2 rounded ${nextPage
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-300 text-gray-500"
                }`}
            >
              {t("blogs.next")}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
