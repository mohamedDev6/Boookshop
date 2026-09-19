import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
import toast from "react-hot-toast";
import { Form, Formik } from "formik";

import FormInput from "../ui/FormInput";
import FormButton from "../ui/FormButton";
import FormLabelInput from "../ui/FormLabelInput";
import FormErrorMsg from "../ui/FormErrorMsg";
import CheckboxBtn from "../ui/CheckboxBtn";
import PasswordVisiabilityToggle from "../ui/PasswordVisiabilityToggle";
import { useAuthStore } from "../../stores/useAuthStore";
import FormTitle from "../ui/FormTitle";
import FormQLinkMsg from "../ui/FormQLinkMsg";

export default function LoginForm() {
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate();
    const { login } = useAuthStore();

    async function handleSubmit(values) {
        const { email, password, rememberMe } = values;

        try {
            const response = await axios.post("https://bookstore.eraasoft.pro/api/login", {
                email: email,
                password: password,
                rememberMe: rememberMe,
            });
            console.log("Login response:", response.data.data);
            toast.success("Logged in Successfully");
            login(response.data.data.token, response.data.data.userInfo);
            navigate("/");
        } catch (error) {
            console.error("Error during login:", error);
            if (error.response && error.response.data && error.response.data.message) {
                toast.error(`Login failed: ${error.response.data.message}`);
            } else {
                toast.error("Login failed: An unexpected error occurred.");
            }
        }
    }

    const loginSchema = yup.object({
        email: yup.string().email("Invalid email address").required("Email is required"),
        password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
        rememberMe: yup.boolean().oneOf([true], "You must accept the terms"),
    });
    return (
        <>
            <Formik
                initialValues={{ email: "", password: "", rememberMe: false }}
                validationSchema={loginSchema}
                onSubmit={(values) => handleSubmit(values)}>
                <Form className="w-[90%] lg:w-[36%] md:w-[50%] flex items-center justify-center flex-col gap-10">
                    <FormTitle title={"Welcome Back!"} />

                    <div className="inputs w-full">
                        {/* Email Input Field */}
                        <div className="input-email flex items-center flex-col gap-2 w-full">
                            <FormLabelInput htmlLabelFor={"email"} labelFor={"Email"} />
                            <FormInput type={"email"} placeholder={"example@gmail.com"} name={"email"} id={"email"} />

                            <FormErrorMsg name="email" />
                        </div>

                        {/* Password Input Field with Visibility Toggle */}
                        <div className="input-password flex items-center flex-col gap-2 mt-6 relative">
                            <FormLabelInput htmlLabelFor={"password"} labelFor={"Password"} />

                            <FormInput
                                type={isPasswordVisible ? "text" : "password"}
                                name={"password"}
                                id={"password"}
                                placeholder={"Enter your password"}
                            />

                            <PasswordVisiabilityToggle
                                isPasswordVisible={isPasswordVisible}
                                setPasswordVisible={setPasswordVisible}
                            />
                            <FormErrorMsg name="password" />
                        </div>

                        {/* Remember Me Checkbox and Forget Password Link */}
                        <div className="remember-forget flex items-center justify-between mt-4">
                            <div className="remember-me flex flex-col items-start gap-2">
                                <div className="remember-checkbox flex items-center justify-center gap-2">
                                    <CheckboxBtn name={"rememberMe"} id={"rememberMe"} />

                                    <FormLabelInput htmlLabelFor={"rememberMe"} labelFor={"Remember Me"} />
                                </div>

                                <FormErrorMsg name="rememberMe" />
                            </div>

                            <Link to="/forget-password" className="text-[#D9176C] font-normal text-[16px] leading-5.5">
                                Forget Password?
                            </Link>
                        </div>
                    </div>
                    <FormButton btnMsg={"Log In"} />

                    <FormQLinkMsg Q={"Don’t have an account?"} url={"/signup"} Msg={"Sign Up"} />
                </Form>
            </Formik>
        </>
    );
}
