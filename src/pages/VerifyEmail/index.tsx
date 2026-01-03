import { useFormik } from "formik";
import * as Yup from "yup";
import logo from "../../shared/media/imgs/logo.png";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useState } from "react";
import API from "@/api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import LanguageSwitcher from "@/shared/components/LanguageSwitcher";

const VerifyEmail = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { t } = useTranslation();
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [resendLoading, setResendLoading] = useState(false);

    useEffect(() => {
        if (location.state?.email) {
            setEmail(location.state.email);
        }
    }, [location.state]);

    const handleResendCode = async () => {
        setResendLoading(true);
        try {
            const response = await API.Auth.resendCode({ email });
            if (response.status === 200) {
                toast.success(response.data.message || "Kod yenidən göndərildi");
            }
        } catch (error: any) {
            toast.error(error?.response?.data?.message || "Xəta baş verdi");
        } finally {
            setResendLoading(false);
        }
    }

    const formik = useFormik({
        initialValues: {
            code: "",
        },
        validationSchema: Yup.object({
            code: Yup.string().required(t("auth.verification_code") + " " + t("common.error")),
        }),
        onSubmit: async (values) => {
            setLoading(true);
            try {
                const response = await API.Auth.verifyEmail({
                    email: email,
                    code: values.code,
                });

                if (response.status === 200) {
                    toast.success(t("common.success"));
                    setTimeout(() => {
                        navigate("/login");
                    }, 1500)
                } else {
                    console.log(response)
                    throw new Error(response.data.message || t("common.error"));
                }
            } catch (error: any) {
                toast.error(
                    error?.response?.data?.error || t("common.error")
                );
            } finally {
                setLoading(false);
            }
        },
    });


    return (
        <>
            <Helmet>
                <title>{t("auth.verify_email")} | Octopus</title>
            </Helmet>

            <div className="flex h-dvh flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <Link to="/">
                        <img
                            alt="Logo"
                            src={logo}
                            className="mx-auto h-[90px] w-auto"
                        />
                    </Link>
                    <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
                        {t("auth.verify_email")}
                    </h2>
                    {email && <p className="text-center text-gray-600 mt-2">{email}</p>}
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={formik.handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="code" className="block text-sm font-medium text-gray-900">
                                {t("auth.verification_code")}
                            </label>
                            <div className="mt-2">
                                <input
                                    id="code"
                                    name="code"
                                    type="text"
                                    placeholder={t("auth.verification_code")}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.code}
                                    className={`block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border ${formik.touched.code && formik.errors.code
                                        ? "border-red-500"
                                        : "border-indigo-600"
                                        } focus:outline-none focus:ring-1 focus:ring-indigo-400 placeholder:text-gray-400 sm:text-sm`}
                                />
                                {formik.touched.code && formik.errors.code && (
                                    <p className="mt-1 text-sm text-red-500">{formik.errors.code}</p>
                                )}
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                className={`flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                            >
                                {loading ? "Loading..." : t("auth.verify")}
                            </button>
                        </div>
                    </form>

                    <div className="mt-4 text-center">
                        <button
                            onClick={handleResendCode}
                            disabled={resendLoading}
                            className={`text-sm text-indigo-600 hover:text-indigo-500 font-medium ${resendLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                        >
                            {resendLoading ? "Loading..." : t("auth.resend_code")}
                        </button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default VerifyEmail;
