import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useAuthStore } from "../../stores/useAuthStore";
import { Form, Formik } from "formik";
import FormButton from "../ui/FormButton";
import FormLabelInput from "../ui/FormLabelInput";
import FormInput from "../ui/FormInput";
import FormErrorMsg from "../ui/FormErrorMsg";
import { IoEyeSharp } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import PasswordVisiabilityToggle from "../ui/PasswordVisiabilityToggle";
import CheckboxBtn from "../ui/CheckboxBtn";
import FormQLinkMsg from "../ui/FormQLinkMsg";

export default function SignUpForm() {
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const navigate = useNavigate();
    const { login } = useAuthStore();

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
            login(response.data.data.token);
            navigate("/");
        } catch (error) {
            console.error("Error during registration:", error);
        }
    }

    const loginSchema = yup.object({
        first_name: yup.string().required("First name is required"),
        last_name: yup.string().required("Last name is required"),
        email: yup.string().email("Invalid email address").required("Email is required"),
        password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
        password_confirmation: yup
            .string()
            .oneOf([yup.ref("password"), null], "Passwords must match")
            .required("Confirm Password is required"),
        terms: yup.boolean().oneOf([true], "You must agree to the terms"),
    });
    return (
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
                    {/* Name Inputs */}
                    <div className="name-inputs w-full flex items-center justify-center gap-4 mb-4">
                        <div className="first-name flex items-center flex-col gap-2 w-full">
                            <FormLabelInput htmlLabelFor={"first-name"} labelFor={"First Name"} />

                            <FormInput type={"text"} placeholder={"Mohamed"} name={"first_name"} id={"first-name"} />

                            <FormErrorMsg name="first_name" />
                        </div>

                        <div className="last-name flex items-center flex-col gap-2 w-full">
                            <FormLabelInput htmlLabelFor={"last-name"} labelFor={"Last Name"} />

                            <FormInput type={"text"} placeholder={"Eslam"} name={"last_name"} id={"last-name"} />

                            <FormErrorMsg name="last_name" />
                        </div>
                    </div>

                    {/* Email Input */}
                    <div className="input-email flex items-center flex-col gap-2 w-full">
                        <FormLabelInput htmlLabelFor={"email"} labelFor={"Email"} />
                        <FormInput type={"email"} placeholder={"example@gmail.com"} name={"email"} id={"email"} />

                        <FormErrorMsg name="email" />
                    </div>

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

                    {/* Terms and Conditions Checkbox */}
                    <div className="terms flex items-center justify-between mt-4">
                        <div className="terms flex flex-col items-start gap-2">
                            <div className="terms-checkbox flex items-center justify-center gap-2">
                                <CheckboxBtn name={"terms"} id={"terms"} />

                                <label htmlFor="terms" className="font-normal text-[12px] leading-5">
                                    Agree with <span className="text-[#D9176C]">Terms & Conditions</span>
                                </label>
                            </div>

                            <FormErrorMsg name="terms" />
                        </div>
                    </div>
                </div>

                <FormButton btnMsg={"Sign Up"} />

                <FormQLinkMsg Q={"Already have an account?"} url={"/login"} Msg={"Login"} />
            </Form>
        </Formik>
    );
}
