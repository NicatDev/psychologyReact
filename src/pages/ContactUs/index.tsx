import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  HiOutlineUser,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import API from "@/api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";

interface ContactInfo {
  id: number;
  location: string;
  location_url: string;
  phone: string;
  email: string;
}

const ContactPage = () => {
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);

  const getContactInfo = async () => {
    try {
      const response = await API.Auth.contactInfo();
      if (response.status === 200) {
        setContactInfo(response.data);
      } else {
        throw new Error("Contact məlumatını yükləmək alınmadı");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getContactInfo();
  }, []);

  const formik = useFormik({
    initialValues: {
      full_name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      full_name: Yup.string().required("Ad tələb olunur"),
      email: Yup.string()
        .email("Düzgün email daxil edin")
        .required("Email tələb olunur"),
      subject: Yup.string().required("Mövzu tələb olunur"),
      message: Yup.string().required("Mesaj tələb olunur"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await API.Auth.contact(values);
        if (response.status === 201) {
          toast.success("Müraciətiniz qəbul edildi!", {
            position: "top-right",
            autoClose: 3000,
          });
          resetForm();
        } else {
          toast.error(
            "Xəta baş verdi, zəhmət olmasa yenidən cəhd edin.",
            { position: "top-right", autoClose: 3000 }
          );
        }
      } catch (error) {
        console.error(error);
        toast.error("Xəta baş verdi, zəhmət olmasa yenidən cəhd edin.", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    },
  });

  return (
    <>
      <Helmet>
        <title>Bizimlə əlaqə | Octopus</title>
        <meta
          name="description"
          content="Suallarınız və təklifləriniz üçün Octopus ilə əlaqə saxlayın. Əlaqə məlumatlarımız və mesaj göndərmə formumuz buradadır."
        />
        <meta property="og:title" content="Bizimlə əlaqə | Octopus" />
        <meta
          property="og:description"
          content="Suallarınız və təklifləriniz üçün Octopus ilə əlaqə saxlayın. Əlaqə məlumatlarımız və mesaj göndərmə formumuz buradadır."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h2 className="text-4xl font-extrabold text-primary-blue mb-6">
              Bizimlə əlaqə
            </h2>
            <p className="text-gray-700 max-w-lg">
              Suallarınız və ya təklifləriniz üçün bizimlə əlaqə saxlaya
              bilərsiniz.
            </p>

            {contactInfo && (
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <HiOutlineLocationMarker className="text-primary-blue w-6 h-6" />
                  <a
                    href={contactInfo.location_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:underline"
                  >
                    {contactInfo.location}
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <HiOutlinePhone className="text-primary-blue w-6 h-6" />
                  <p className="text-gray-800">{contactInfo.phone}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <HiOutlineMail className="text-primary-blue w-6 h-6" />
                  <p className="text-gray-800">{contactInfo.email}</p>
                </div>
              </div>
            )}

            <div className="mt-10 rounded-lg overflow-hidden shadow-lg h-64">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.466143234497!2d49.8503481151945!3d40.38313297936948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d9a1f4cc407%3A0x9d4b1c0680c3b3d9!2sBaku%2C%20Azerbaijan!5e0!3m2!1sen!2sus!4v1690000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <form
            onSubmit={formik.handleSubmit}
            className="bg-white p-8 rounded-lg shadow-lg space-y-6"
            noValidate
          >
            <div>
              <label
                htmlFor="full_name"
                className="block text-sm font-medium text-gray-700"
              >
                Ad
              </label>
              <input
                id="full_name"
                name="full_name"
                type="text"
                placeholder="Adınızı daxil edin"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.full_name}
                className={`block w-full rounded-md border px-3 py-2 ${
                  formik.touched.full_name && formik.errors.full_name
                    ? "border-red-500"
                    : "border-gray-300"
                } focus:outline-none focus:ring-1 focus:ring-primary-blue text-gray-900`}
              />
              {formik.touched.full_name && formik.errors.full_name && (
                <p className="mt-1 text-sm text-red-600">
                  {formik.errors.full_name}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email ünvanı
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email ünvanınızı daxil edin"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className={`block w-full rounded-md border px-3 py-2 ${
                  formik.touched.email && formik.errors.email
                    ? "border-red-500"
                    : "border-gray-300"
                } focus:outline-none focus:ring-1 focus:ring-primary-blue text-gray-900`}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="mt-1 text-sm text-red-600">
                  {formik.errors.email}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Mövzu
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Mövzunu daxil edin"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.subject}
                className={`block w-full rounded-md border px-3 py-2 ${
                  formik.touched.subject && formik.errors.subject
                    ? "border-red-500"
                    : "border-gray-300"
                } focus:outline-none focus:ring-1 focus:ring-primary-blue text-gray-900`}
              />
              {formik.touched.subject && formik.errors.subject && (
                <p className="mt-1 text-sm text-red-600">
                  {formik.errors.subject}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Mesaj
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Mesajınızı yazın"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                className={`block w-full rounded-md border px-3 py-2 ${
                  formik.touched.message && formik.errors.message
                    ? "border-red-500"
                    : "border-gray-300"
                } focus:outline-none focus:ring-1 focus:ring-primary-blue text-gray-900`}
              />
              {formik.touched.message && formik.errors.message && (
                <p className="mt-1 text-sm text-red-600">
                  {formik.errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-md font-semibold hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:indigo-600"
            >
              Göndər
            </button>
          </form>
        </div>

        <ToastContainer />
      </div>
    </>
  );
};

export default ContactPage;
