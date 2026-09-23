import { Form, Formik } from "formik";
import { FaUser } from "react-icons/fa";
import { FiEdit3, FiMail } from "react-icons/fi";
import FormInput from "../ui/FormInput";
import FormButton from "../ui/FormButton";

export default function ContactForm() {
    return (
        <Formik
            initialValues={{
                name: "",
                email: "",
                message: "",
            }}>
            <Form className="flex flex-col gap-6">
                {/* Name + Email */}
                <div className="flex flex-col gap-6 md:flex-row">
                    <div className="flex h-14 flex-1 items-center gap-3 rounded-lg border border-white/20 px-4">
                        <FaUser className="text-white/50" />

                        <FormInput type={"text"} placeholder={"Name"} name={"name"} placeholderColor="white/50" />
                    </div>

                    <div className="flex h-14 flex-1 items-center gap-3 rounded-lg border border-white/20 px-4">
                        <FiMail className="text-white/50" />

                        <FormInput
                            type={"email"}
                            placeholder={"Email Address"}
                            name={"email"}
                            placeholderColor="white/50"
                        />
                    </div>
                </div>

                {/* Message */}
                <div className="flex min-h-37.5 items-start gap-3 rounded-lg border border-white/20 px-4 py-5">
                    <FiEdit3 className="mt-1 text-white/50" />

                    <textarea
                        placeholder="Your Message"
                        className="h-full min-h-27.5 w-full resize-none bg-transparent text-white outline-none placeholder:text-white/50"
                    />
                </div>

                {/* Button */}
                <FormButton btnMsg={"Send Message"} />
            </Form>
        </Formik>
    );
}
