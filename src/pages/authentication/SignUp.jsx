import { Link, useNavigate } from "react-router-dom";
import HeroAuthSection from "../../components/HeroAuthSection";
import RegisterwithGoogleOrFacebook from "../../components/RegisterwithGoogleOrFacebook";
import BtnAuth from "../../components/BtnAuth";
import { useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useAuth } from "../../context/useAuth";

export default function SignUp() {
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const navigate = useNavigate();
    const { setToken } = useAuth();

    async function handleSubmit(values) {
        const { first_name, last_name, email, password, password_confirmation } = values;
        try {
            const response = await axios.post("https://bookstore.eraasoft.pro/api/register", {
                first_name: first_name,
                last_name: last_name,
                email: email,
                password: password,
                password_confirmation: password_confirmation,
            });
            console.log("Registration response:", response.data.data);
            setToken(response.data.data.token);
            navigate("/login");
        } catch (error) {
            console.error("Error during registration:", error);
        }
    }

    const loginSchema = Yup.object({
        first_name: Yup.string().required("First name is required"),
        last_name: Yup.string().required("Last name is required"),
        email: Yup.string().email("Invalid email address").required("Email is required"),
        password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
        password_confirmation: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required("Confirm Password is required"),
        terms: Yup.boolean().oneOf([true], "You must agree to the terms"),
    });

    return (
        <>
            <HeroAuthSection />

            <main className="flex items-center justify-center flex-col gap-10 mt-15">
                <Formik
                    initialValues={{
                        first_name: "",
                        last_name: "",
                        email: "",
                        password: "",
                        password_confirmation: "",
                        terms: false,
                    }}
                    validationSchema={loginSchema}
                    onSubmit={(values) => handleSubmit(values)}>
                    <Form className="w-[90%] lg:w-[36%] md:w-[50%] flex items-center justify-center flex-col gap-10">
                        <div className="inputs w-full">
                            <div className="name-inputs w-full flex items-center justify-center gap-4 mb-4">
                                <div className="first-name flex items-center flex-col gap-2 w-full">
                                    <label
                                        htmlFor="first-name"
                                        className="text-start w-full font-semibold text-[18px] leading-[100%]">
                                        First Name
                                    </label>
                                    <Field
                                        type="text"
                                        id="first-name"
                                        name="first_name"
                                        placeholder="Mohamed"
                                        className="w-full placeholder:text-[#22222280] p-4 rounded-lg border border-solid border-[#22222233] outline-0 font-normal text-[16px] leading-5.5"
                                    />
                                    <ErrorMessage
                                        name="first_name"
                                        component="div"
                                        className="text-red-500 text-[14px] text-start font-normal w-full"
                                    />
                                </div>

                                <div className="last-name flex items-center flex-col gap-2 w-full">
                                    <label
                                        htmlFor="last-name"
                                        className="text-start w-full font-semibold text-[18px] leading-[100%]">
                                        Last Name
                                    </label>
                                    <Field
                                        type="text"
                                        id="last-name"
                                        name="last_name"
                                        placeholder="Eslam"
                                        className="w-full placeholder:text-[#22222280] p-4 rounded-lg border border-solid border-[#22222233] outline-0 font-normal text-[16px] leading-5.5"
                                    />
                                    <ErrorMessage
                                        name="last_name"
                                        component="div"
                                        className="text-red-500 text-[14px] text-start font-normal w-full"
                                    />
                                </div>
                            </div>

                            <div className="input-email flex items-center flex-col gap-2 w-full">
                                <label
                                    htmlFor="email"
                                    className="text-start w-full font-semibold text-[18px] leading-[100%]">
                                    Email
                                </label>
                                <Field
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="example@gmail.com"
                                    className="w-full placeholder:text-[#22222280] p-4 rounded-lg border border-solid border-[#22222233] outline-0 font-normal text-[16px] leading-5.5"
                                />
                                <ErrorMessage
                                    name="email"
                                    component="div"
                                    className="text-red-500 text-[14px] text-start font-normal w-full"
                                />
                            </div>

                            <div className="input-password flex items-center flex-col gap-2 mt-6 relative">
                                <label
                                    htmlFor="password"
                                    className="text-start w-full font-semibold text-[18px] leading-[100%]">
                                    Password
                                </label>
                                <Field
                                    type={isPasswordVisible ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    placeholder="Enter Password"
                                    className="w-full placeholder:text-[#22222280] p-4 rounded-lg border border-solid border-[#22222233] outline-0 font-normal text-[16px] leading-5.5"
                                    required
                                />
                                <ErrorMessage
                                    name="password"
                                    component="div"
                                    className="text-red-500 text-[14px] text-start font-normal w-full"
                                />
                                <button
                                    type="button"
                                    className={`absolute right-4 top-11 text-[20px] cursor-pointer ${isPasswordVisible ? "text-[#D9176C]" : "text-[#22222280]"}`}
                                    onClick={() => setPasswordVisible(!isPasswordVisible)}>
                                    {isPasswordVisible ? <IoEyeSharp /> : <FaRegEyeSlash />}
                                </button>
                            </div>

                            <div className="input-confirm-password flex items-center flex-col gap-2 mt-6 relative">
                                <label
                                    htmlFor="confirm-password"
                                    className="text-start w-full font-semibold text-[18px] leading-[100%]">
                                    Confirm password
                                </label>
                                <Field
                                    type={isConfirmPasswordVisible ? "text" : "password"}
                                    id="confirm-password"
                                    name="password_confirmation"
                                    placeholder="Confirm Password"
                                    className="w-full placeholder:text-[#22222280] p-4 rounded-lg border border-solid border-[#22222233] outline-0 font-normal text-[16px] leading-5.5"
                                    required
                                />
                                <ErrorMessage
                                    name="password_confirmation"
                                    component="div"
                                    className="text-red-500 text-[14px] text-start font-normal w-full"
                                />
                                <button
                                    type="button"
                                    className={`absolute right-4 top-11 text-[20px] cursor-pointer ${isConfirmPasswordVisible ? "text-[#D9176C]" : "text-[#22222280]"}`}
                                    onClick={() => setConfirmPasswordVisible(!isConfirmPasswordVisible)}>
                                    {isConfirmPasswordVisible ? <IoEyeSharp /> : <FaRegEyeSlash />}
                                </button>
                            </div>

                            <div className="terms flex items-center justify-between mt-4">
                                <div className="terms flex flex-col items-start gap-2">
                                    <div className="terms-checkbox flex items-center justify-center gap-2">
                                        <Field
                                            type="checkbox"
                                            id="terms"
                                            name="terms"
                                            className="checkbox text-[#D9176C] border border-solid border-[#22222233] rounded-lg"
                                        />
                                        <label htmlFor="terms" className="font-normal text-[12px] leading-5">
                                            Agree with <span className="text-[#D9176C]">Terms & Conditions</span>
                                        </label>
                                    </div>

                                    <ErrorMessage
                                        name="terms"
                                        component="div"
                                        className="text-red-500 text-[14px] text-start font-normal w-full"
                                    />
                                </div>
                            </div>
                        </div>

                        <BtnAuth btnMsg="Sign Up" />

                        <h4 className="font-normal text-[16px] leading-5.5">
                            Already have an account?{" "}
                            <Link to="/login" className="text-[#D9176C] font-semibold">
                                Log In
                            </Link>
                        </h4>
                    </Form>
                </Formik>

                <RegisterwithGoogleOrFacebook />
            </main>
        </>
    );
}
