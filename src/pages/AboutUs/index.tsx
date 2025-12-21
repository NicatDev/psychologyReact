import { useEffect, useState } from "react";
import ab01 from "../../shared/media/ab01.jpg";
import API from "@/api";
import { Helmet } from "react-helmet-async";

const Index = () => {
  const [about, setAbout] = useState<{
    title?: string;
    miniTitle?: string;
    content?: string;
  }>({});

  const getAbout = async () => {
    try {
      const response = await API.Auth.about();
      if (response.status === 200) {
        setAbout(response.data);
      } else {
        throw new Error(response.data);
      }
    } catch (err) {
      console.error("Error fetching About data:", err);
    }
  };

  useEffect(() => {
    getAbout();
  }, []);

  return (
    <>
      <Helmet>
        <title>
          {about.title ? `${about.title} | Octopus` : "About Us | Octopus"}
        </title>
        <meta
          name="description"
          content={
            about.miniTitle
              ? about.miniTitle
              : "Learn more about Octopus and our mission."
          }
        />
        <meta
          property="og:title"
          content={about.title || "About Us | Octopus"}
        />
        <meta
          property="og:description"
          content={
            about.miniTitle || "Learn more about Octopus and our mission."
          }
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl font-extrabold mb-8 text-primary-blue">
              {about.title}
            </h1>

            <p className="text-lg mb-6 text-slate-500 leading-relaxed">
              {about.miniTitle}
            </p>

            <p className="text-lg mb-12 font-[600] leading-relaxed">
              {about.content}
            </p>
          </div>

          <div className="flex justify-center md:justify-center">
            <img
              src={ab01}
              alt="Octopus personality test"
              className="rounded-xl shadow-lg max-h-[700px] w-auto object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
