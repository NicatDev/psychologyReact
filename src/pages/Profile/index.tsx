import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FiUser, FiMail, FiEye, FiEyeOff } from "react-icons/fi";
import UserImg from "../../shared/media/imgs/userImg.jpg";
import ProfileTestResults from "../../shared/components/ProfileTestResults"
interface ProfileFormValues {
    name: string;
    email: string;
    avatar?: File | null;
}

interface PasswordFormValues {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
}

const tabs = [
    { id: "info", label: "Məlumatlar" },
    { id: "update", label: "Məlumatları Yenilə" },
    { id: "password", label: "Şifrəni Dəyiş" },
];

const InputField = ({
    id,
    name,
    type = "text",
    placeholder,
    formik,
    isPassword = false,
}: {
    id: string;
    name: keyof ProfileFormValues | keyof PasswordFormValues;
    type?: string;
    placeholder?: string;
    formik: any;
    isPassword?: boolean;
}) => {
    const [showPassword, setShowPassword] = useState(false);
    const inputType = isPassword ? (showPassword ? "text" : "password") : type;

    const hasError = formik.touched[name] && formik.errors[name];

    return (
        <div className="relative mb-4">
            <label
                htmlFor={id}
                className="block text-sm font-medium text-gray-900 mb-1"
            >
                {id === "name"
                    ? "Ad və Soyad"
                    : id === "email"
                        ? "Email ünvanı"
                        : id === "currentPassword"
                            ? "Cari Şifrə"
                            : id === "newPassword"
                                ? "Yeni Şifrə"
                                : id === "confirmPassword"
                                    ? "Yeni Şifrəni Təsdiqlə"
                                    : id}
            </label>

            <div className="relative">
                <input
                    id={id}
                    name={name as string}
                    type={inputType}
                    placeholder={placeholder || "Daxil edin"}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values[name as string] || ""}
                    className={`block w-full rounded-md bg-white px-3 pr-10 py-1.5 text-base text-gray-900 border ${hasError ? "border-red-500" : "border-blue-500"
                        } focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder:text-gray-400 sm:text-sm`}
                    autoComplete={
                        isPassword
                            ? "current-password"
                            : id.toLowerCase() === "email"
                                ? "email"
                                : undefined
                    }
                />

                {isPassword && (
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500"
                        tabIndex={-1}
                    >
                        {showPassword ? <FiEyeOff /> : <FiEye />}
                    </button>
                )}
            </div>

            {hasError && (
                <p className="mt-1 text-sm text-red-500">{formik.errors[name as string]}</p>
            )}
        </div>
    );
};

const ProfilePage: React.FC = () => {
    const [activeTab, setActiveTab] = useState("info");
    const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
    const [avatarFile, setAvatarFile] = useState<File | null>(null);
    const [userData, setUserData] = useState<{
        id?: string | number;
        name: string;
        email: string;
        avatarUrl: string | null;
    }>({
        id: "",
        name: "",
        email: "",
        avatarUrl: null,
    });

    // Sessiyadan user-u götür və state-ə set et
    useEffect(() => {
        const storedUserString = localStorage.getItem("user");
        if (storedUserString) {
            try {
                const storedUser = JSON.parse(storedUserString);
                if (storedUser) {
                    setUserData({
                        id: storedUser.id,
                        name: storedUser.name || "",
                        email: storedUser.email || "",
                        avatarUrl: storedUser.avatarUrl || null,
                    });
                    setAvatarPreview(storedUser.avatarUrl || null);
                }
            } catch (e) {
                console.error("User JSON parse error", e);
            }
        }
    }, []);

    const profileFormik = useFormik<ProfileFormValues>({
        enableReinitialize: true, // Çox önəmli! userData dəyişdikcə form yenilənəcək
        initialValues: {
            name: userData.name || "",
            email: userData.email || "",
            avatar: null,
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Ad və soyad daxil edin"),
            email: Yup.string()
                .email("Doğru email daxil edin")
                .required("Email tələb olunur"),
        }),
        onSubmit: (values, { setSubmitting, setStatus }) => {
            console.log(values);

            setTimeout(() => {
                setStatus({ success: "Profil məlumatları uğurla yeniləndi!" });
                setSubmitting(false);
                if (avatarFile) {
                    const url = URL.createObjectURL(avatarFile);
                    setAvatarPreview(url);
                }
            }, 500);
        },
    });

    const passwordFormik = useFormik<PasswordFormValues>({
        initialValues: {
            currentPassword: "",
            newPassword: "",
            confirmPassword: "",
        },
        validationSchema: Yup.object({
            currentPassword: Yup.string().required("Cari şifrə tələb olunur"),
            newPassword: Yup.string()
                .min(6, "Şifrə ən az 6 simvol olmalıdır")
                .required("Yeni şifrə tələb olunur"),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref("newPassword")], "Şifrələr uyğun gəlmir")
                .required("Yeni şifrəni təsdiqləyin"),
        }),
        onSubmit: (values, { setSubmitting, resetForm, setStatus }) => {
            console.log(values);

            setTimeout(() => {
                setStatus({ success: "Şifrə uğurla yeniləndi!" });
                setSubmitting(false);
                resetForm();
            }, 500);
        },
    });

    return (
        <>

            <div className="container mx-auto mt-10 mb-11 bg-white p-8 rounded shadow">
                <h1 className="text-3xl font-semibold mb-6">Profilim</h1>

                <div className="flex border-b border-gray-300 mb-6">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            className={`px-4 py-2 -mb-px border-b-2 font-medium text-sm ${activeTab === tab.id
                                ? "border-blue-500 text-blue-600"
                                : "border-transparent text-gray-600 hover:text-blue-600"
                                }`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div>
                    {activeTab === "info" && (
                        <div>
                            {avatarPreview && (
                                <div className="flex justify-center mb-6">
                                    <img
                                        src={avatarPreview}
                                        alt={`${userData.name} avatar`}
                                        className="w-24 h-24 rounded-full object-cover border-2 border-blue-500"
                                    />
                                </div>
                            )}

                            <div className="flex items-center mb-5">
                                <div className="flex-shrink-0 bg-blue-100 text-blue-600 rounded-full p-3 mr-4">
                                    <FiUser size={24} />
                                </div>
                                <div>
                                    <p className="text-gray-500 text-sm">Ad və Soyad</p>
                                    <p className="text-lg font-medium text-gray-900">
                                        {userData.name || "-"}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <div className="flex-shrink-0 bg-green-100 text-green-600 rounded-full p-3 mr-4">
                                    <FiMail size={24} />
                                </div>
                                <div>
                                    <p className="text-gray-500 text-sm">Email Ünvanı</p>
                                    <p className="text-lg font-medium text-gray-900">
                                        {userData.email || "-"}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "update" && (
                        <form
                            onSubmit={profileFormik.handleSubmit}
                            noValidate
                            className="space-y-6"
                        >
                            <div>
                                <label className="block text-sm font-medium text-gray-900 mb-2">
                                    Profil Şəkli
                                </label>
                                <div className="flex items-center gap-6">
                                    <div className="relative w-24 h-24">
                                        <img
                                            src={avatarPreview || userData.avatarUrl || UserImg}
                                            alt="Profil Şəkli"
                                            className="w-24 h-24 rounded-full object-cover border-2 border-blue-500"
                                        />
                                        <label
                                            htmlFor="avatar"
                                            className="absolute inset-0 bg-black bg-opacity-40 rounded-full flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
                                            title="Profil şəklini dəyiş"
                                        >
                                            <span className="text-sm">✎</span>
                                        </label>
                                        <input
                                            id="avatar"
                                            name="avatar"
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => {
                                                const file = e.currentTarget.files?.[0] ?? null;
                                                setAvatarFile(file);
                                                profileFormik.setFieldValue("avatar", file);

                                                if (file) {
                                                    const reader = new FileReader();
                                                    reader.onloadend = () => {
                                                        setAvatarPreview(reader.result as string);
                                                    };
                                                    reader.readAsDataURL(file);
                                                } else {
                                                    setAvatarPreview(null);
                                                }
                                            }}
                                            className="hidden"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">
                                            JPEG, PNG və ya JPG faylları
                                        </p>
                                        <p className="text-xs text-gray-400">Maksimum ölçü: 2MB</p>
                                    </div>
                                </div>
                            </div>

                            <InputField id="name" name="name" formik={profileFormik} />
                            <InputField id="email" name="email" type="email" formik={profileFormik} />

                            {profileFormik.status?.success && (
                                <p className="text-green-600 font-medium">
                                    {profileFormik.status.success}
                                </p>
                            )}

                            <button
                                type="submit"
                                disabled={profileFormik.isSubmitting}
                                className="bg-blue-500 disabled:bg-blue-300 text-white px-5 py-2 rounded hover:bg-blue-600 transition"
                            >
                                Yenilə
                            </button>
                        </form>
                    )}

                    {activeTab === "password" && (
                        <form
                            onSubmit={passwordFormik.handleSubmit}
                            noValidate
                            className="space-y-6"
                        >
                            <InputField
                                id="currentPassword"
                                name="currentPassword"
                                isPassword
                                formik={passwordFormik}
                            />
                            <InputField
                                id="newPassword"
                                name="newPassword"
                                isPassword
                                formik={passwordFormik}
                            />
                            <InputField
                                id="confirmPassword"
                                name="confirmPassword"
                                isPassword
                                formik={passwordFormik}
                            />

                            {passwordFormik.status?.success && (
                                <p className="text-green-600 font-medium">
                                    {passwordFormik.status.success}
                                </p>
                            )}

                            <button
                                type="submit"
                                disabled={passwordFormik.isSubmitting}
                                className="bg-blue-500 disabled:bg-blue-300 text-white px-5 py-2 rounded hover:bg-blue-600 transition"
                            >
                                Şifrəni Dəyiş
                            </button>
                        </form>
                    )}
                </div>


            </div>

            <ProfileTestResults />
        </>
    );
};

export default ProfilePage;
