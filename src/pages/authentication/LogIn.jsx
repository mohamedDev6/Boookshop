import { Link, useNavigate } from "react-router-dom";
import HeroAuthSection from "../../components/HeroAuthSection";
import RegisterwithGoogleOrFacebook from "../../components/RegisterwithGoogleOrFacebook";
import BtnAuth from "../../components/BtnAuth";
import { IoEyeSharp } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useAuth } from "../../context/useAuth";

export default function LogIn() {
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate();
    const { setToken } = useAuth();

    async function handleSubmit(values) {
        const { email, password, rememberMe } = values;

        try {
            const response = await axios.post("https://bookstore.eraasoft.pro/api/login", {
                email: email,
                password: password,
                rememberMe: rememberMe,
            });
            console.log("Login response:", response.data.data);
            setToken(response.data.data.token);
            navigate("/");
        } catch (error) {
            console.error("Error during login:", error);
        }
    }

    const loginSchema = Yup.object({
        email: Yup.string().email("Invalid email address").required("Email is required"),
        password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
        rememberMe: Yup.boolean().oneOf([true], "You must accept the terms"),
    });

    return (
        <>
            <HeroAuthSection />

            <main className="flex items-center justify-center flex-col gap-10 mt-15">
                <Formik
                    initialValues={{ email: "", password: "", rememberMe: false }}
                    validationSchema={loginSchema}
                    onSubmit={(values) => handleSubmit(values)}>
                    <Form className="w-[90%] lg:w-[36%] md:w-[50%] flex items-center justify-center flex-col gap-10">
                        <h3 className="text-[#D9176C] font-semibold text-[16px] leading-5.5">Welcome Back!</h3>

                        <div className="inputs w-full">
                            <div className="input-email flex items-center flex-col gap-2 w-full">
                                <label
                                    htmlFor="email"
                                    className="text-start w-full font-semibold text-[18px] leading-[100%]">
                                    Email
                                </label>
                                <Field
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="example@gmail.com"
                                    className="w-full placeholder:text-[#22222280] p-4 rounded-lg border border-solid border-[#22222233] outline-0 font-normal text-[16px] leading-5.5"
                                />
                                <ErrorMessage name="email">
                                    {(message) => (
                                        <div className="text-red-500 text-[14px] text-start font-normal w-full">
                                            {message}
                                        </div>
                                    )}
                                </ErrorMessage>
                            </div>

                            <div className="input-password flex items-center flex-col gap-2 mt-6 relative">
                                <label
                                    htmlFor="password"
                                    className="text-start w-full font-semibold text-[18px] leading-[100%]">
                                    Password
                                </label>
                                <Field
                                    type={isPasswordVisible ? "text" : "password"}
                                    name="password"
                                    id="password"
                                    placeholder="Enter Password"
                                    className="w-full placeholder:text-[#22222280] p-4 rounded-lg border border-solid border-[#22222233] outline-0 font-normal text-[16px] leading-5.5"
                                />
                                <button
                                    type="button"
                                    className={`absolute right-4 top-11 text-[20px] cursor-pointer ${isPasswordVisible ? "text-[#D9176C]" : "text-[#22222280]"}`}
                                    onClick={() => setPasswordVisible(!isPasswordVisible)}>
                                    {isPasswordVisible ? <IoEyeSharp /> : <FaRegEyeSlash />}
                                </button>
                                <ErrorMessage
                                    name="password"
                                    component="div"
                                    className="text-red-500 text-[14px] text-start font-normal w-full"
                                />
                            </div>

                            <div className="remember-forget flex items-center justify-between mt-4">
                                <div className="remember-me flex flex-col items-start gap-2">
                                    <div className="remember-checkbox flex items-center justify-center gap-2">
                                        <Field
                                            type="checkbox"
                                            name="rememberMe"
                                            id="rememberMe"
                                            className="checkbox text-[#D9176C] border border-solid border-[#22222233] rounded-lg"
                                        />
                                        <label htmlFor="rememberMe" className="font-normal text-[16px] leading-5.5">
                                            Remember Me
                                        </label>
                                    </div>

                                    <ErrorMessage
                                        name="rememberMe"
                                        component="div"
                                        className="text-red-500 text-[14px] text-start font-normal w-full"
                                    />
                                </div>

                                <Link
                                    to="/forget-password"
                                    className="text-[#D9176C] font-normal text-[16px] leading-5.5">
                                    Forget Password?
                                </Link>
                            </div>
                        </div>

                        <BtnAuth btnMsg="Log In" />

                        <h4 className="font-normal text-[16px] leading-5.5">
                            Don’t have an account?{" "}
                            <Link to="/signup" className="text-[#D9176C] font-semibold">
                                Sign Up
                            </Link>
                        </h4>
                    </Form>
                </Formik>
                <RegisterwithGoogleOrFacebook />
            </main>
        </>
    );
}
