import { Form, Formik } from "formik";
import FormButton from "../ui/FormButton";
import * as yup from "yup";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import FormLabelInput from "../ui/FormLabelInput";
import FormInput from "../ui/FormInput";
import FormErrorMsg from "../ui/FormErrorMsg";
import usePasswordResetStore from "../../stores/usePasswordResetStore";

export default function ForgetPasswordForm() {
    const navigate = useNavigate();
    const { setEmail } = usePasswordResetStore();

    async function handleSubmit(values) {
        const { email } = values;
        setEmail(email);

        try {
            const response = await axios.post("https://bookstore.eraasoft.pro/api/forget-password", {
                email: email,
            });
            console.log("Forget password response:", response.data.data);
            toast.success("Reset code sent successfully");
            navigate("/add-code");
        } catch (error) {
            console.error("Error during forget password:", error);
            if (error.response && error.response.data && error.response.data.message) {
                toast.error(`Forget password failed: ${error.response.data.message}`);
            } else {
                toast.error("Forget password failed: An unexpected error occurred.");
            }
        }
    }
    const forgetPasswordSchema = yup.object({
        email: yup.string().email("Invalid email address").required("Email is required"),
    });

    return (
        <>
            <div className="text-center">
                <h3 className="text-[#D9176C] font-semibold text-[16px] leading-5.5">Forget Password?</h3>
                <p className="text-[#22222280] font-semibold text-[14px] leading-5.5 mt-4">
                    Enter your email to reset your password
                </p>
            </div>

            <Formik
                validationSchema={forgetPasswordSchema}
                initialValues={{ email: "" }}
                onSubmit={(values) => handleSubmit(values)}>
                <Form className="w-[90%] lg:w-[36%] md:w-[50%] flex items-center justify-center flex-col gap-10">
                    <div className="input-email flex items-center flex-col gap-2 w-full">
                        <FormLabelInput htmlLabelFor={"email"} labelFor={"Email"} />
                        <FormInput type={"email"} placeholder={"example@gmail.com"} name={"email"} id={"email"} />

                        <FormErrorMsg name="email" />
                    </div>

                    <FormButton btnMsg="Send reset code" />
                </Form>
            </Formik>
        </>
    );
}
