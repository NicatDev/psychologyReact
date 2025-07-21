import { useFormik } from "formik";
import * as Yup from "yup";
import {
  HiOutlineUser,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";

const Index = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Ad tələb olunur"),
      email: Yup.string()
        .email("Düzgün email daxil edin")
        .required("Email tələb olunur"),
      subject: Yup.string().required("Mövzu tələb olunur"),
      message: Yup.string().required("Mesaj tələb olunur"),
    }),
    onSubmit: (values, { resetForm }) => {
      alert("Müraciətiniz qəbul edildi!");
      resetForm();
    },
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Contact Info */}
        <div className="space-y-8">
          <h2 className="text-4xl font-extrabold text-primary-blue mb-6">
            Bizimlə əlaqə
          </h2>
          <p className="text-gray-700 max-w-lg">
            Suallarınız və ya təklifləriniz üçün bizimlə əlaqə saxlaya bilərsiniz.
          </p>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <HiOutlineLocationMarker className="text-secondary-blue w-6 h-6" />
              <p className="text-gray-800">
                Bakı şəhəri, Nizami küçəsi 100, Azərbaycan
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <HiOutlinePhone className="text-secondary-blue w-6 h-6" />
              <p className="text-gray-800">+994 12 345 67 89</p>
            </div>
            <div className="flex items-center space-x-4">
              <HiOutlineMail className="text-secondary-blue w-6 h-6" />
              <p className="text-gray-800">info@yourcompany.az</p>
            </div>
          </div>

          {/* Google Map */}
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

        {/* Right Contact Form */}
        <form
          onSubmit={formik.handleSubmit}
          className="bg-white p-8 rounded-lg shadow-lg space-y-6"
          noValidate
        >
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Ad
            </label>
            <div className="relative mt-1">
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Adınızı daxil edin"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                className={`block w-full rounded-md border px-3 py-2 pr-10 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-secondary-blue ${
                  formik.touched.name && formik.errors.name
                    ? "border-red-500"
                    : "border-gray-300"
                } text-gray-900`}
              />
              <HiOutlineUser className="absolute right-3 top-2.5 text-gray-400 w-5 h-5" />
            </div>
            {formik.touched.name && formik.errors.name && (
              <p className="mt-1 text-sm text-red-600">{formik.errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email ünvanı
            </label>
            <div className="relative mt-1">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email ünvanınızı daxil edin"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className={`block w-full rounded-md border px-3 py-2 pr-10 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-secondary-blue ${
                  formik.touched.email && formik.errors.email
                    ? "border-red-500"
                    : "border-gray-300"
                } text-gray-900`}
              />
              <HiOutlineMail className="absolute right-3 top-2.5 text-gray-400 w-5 h-5" />
            </div>
            {formik.touched.email && formik.errors.email && (
              <p className="mt-1 text-sm text-red-600">{formik.errors.email}</p>
            )}
          </div>

          {/* Subject */}
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
              className={`block w-full rounded-md border px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-secondary-blue ${
                formik.touched.subject && formik.errors.subject
                  ? "border-red-500"
                  : "border-gray-300"
              } text-gray-900`}
            />
            {formik.touched.subject && formik.errors.subject && (
              <p className="mt-1 text-sm text-red-600">{formik.errors.subject}</p>
            )}
          </div>

          {/* Message */}
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
              className={`block w-full rounded-md border px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-secondary-blue ${
                formik.touched.message && formik.errors.message
                  ? "border-red-500"
                  : "border-gray-300"
              } text-gray-900`}
            />
            {formik.touched.message && formik.errors.message && (
              <p className="mt-1 text-sm text-red-600">{formik.errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-secondary-blue text-white py-3 rounded-md font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-blue"
          >
            Göndər
          </button>
        </form>
      </div>
    </div>
  );
};

export default Index;
