import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import FormLabelInput from "../ui/FormLabelInput";
import FormInput from "../ui/FormInput";
import FormErrorMsg from "../ui/FormErrorMsg";
import PasswordVisiabilityToggle from "../ui/PasswordVisiabilityToggle";
import CheckboxBtn from "../ui/CheckboxBtn";
import FormButton from "../ui/FormButton";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import * as yup from "yup";
import usePasswordResetStore from "../../stores/usePasswordResetStore";

export default function ResetPasswordForm() {
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const { email, otp, clearResetData } = usePasswordResetStore();
    const navigate = useNavigate();

    async function handleSubmit(values) {
        const { password, password_confirmation } = values;

        try {
            const response = await axios.post("https://bookstore.eraasoft.pro/api/reset-password", {
                email,
                password,
                password_confirmation,
                otp,
            });
            console.log("Reset password response:", response.data.data);
            toast.success("Password reset successfully");
            clearResetData();
            navigate("/login");
        } catch (error) {
            console.error("Error during reset password:", error);
            if (error.response && error.response.data && error.response.data.message) {
                toast.error(`Reset password failed: ${error.response.data.message}`);
            } else {
                toast.error("Reset password failed: An unexpected error occurred.");
            }
        }
    }

    const resetPasswordSchema = yup.object({
        password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
        password_confirmation: yup
            .string()
            .oneOf([yup.ref("password"), null], "Passwords must match")
            .required("Confirm password is required"),
        rememberMe: yup.boolean().oneOf([true], "You must accept the terms"),
    });

    return (
        <Formik
            validationSchema={resetPasswordSchema}
            onSubmit={handleSubmit}
            initialValues={{ password: "", password_confirmation: "", rememberMe: false }}>
            <Form className="w-[90%] lg:w-[36%] md:w-[50%] flex items-center justify-center flex-col gap-10">
                <div className="text-center">
                    <h3 className="text-[#D9176C] font-semibold text-[16px] leading-5.5">Reset your password!</h3>
                    <p className="text-[#22222280] font-semibold text-[14px] leading-5.5 mt-4">
                        Create a strong password <br /> Your new password must be different from previous one
                    </p>
                </div>

                <div className="inputs w-full">
                    {/* Password Input */}
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

                    {/* Confirm Password Input */}
                    <div className="input-confirm-password flex items-center flex-col gap-2 mt-6 relative">
                        <FormLabelInput htmlLabelFor={"password_confirmation"} labelFor={"Confirm password"} />

                        <FormInput
                            type={isConfirmPasswordVisible ? "text" : "password"}
                            name={"password_confirmation"}
                            id={"password_confirmation"}
                            placeholder={"Enter your password"}
                        />

                        <button
                            type="button"
                            className={`absolute right-4 top-11 text-[20px] cursor-pointer ${isConfirmPasswordVisible ? "text-[#D9176C]" : "text-[#22222280]"}`}
                            onClick={() => setConfirmPasswordVisible(!isConfirmPasswordVisible)}>
                            {isConfirmPasswordVisible ? <IoEyeSharp /> : <FaRegEyeSlash />}
                        </button>

                        <FormErrorMsg name="password_confirmation" />
                    </div>

                    {/* Remember Me */}
                    <div className="remember flex flex-col items-start gap-2 mt-4">
                        <div className="remember-checkbox flex items-center justify-center gap-2">
                            <CheckboxBtn name={"rememberMe"} id={"rememberMe"} />

                            <FormLabelInput htmlLabelFor={"rememberMe"} labelFor={"Remember Me"} />
                        </div>
                        <FormErrorMsg name="rememberMe" />
                    </div>
                </div>

                <FormButton btnMsg="Reset Password" />
            </Form>
        </Formik>
    );
}
