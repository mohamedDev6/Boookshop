import { Form, Formik } from "formik";
import { FaUser } from "react-icons/fa";
import { FiEdit3, FiMail } from "react-icons/fi";
import { MdSubject } from "react-icons/md";
import FormInput from "../ui/FormInput";
import FormButton from "../ui/FormButton";
import * as yup from "yup";
import axios from "axios";
import toast from "react-hot-toast";
import FormTextarea from "../ui/FormTextarea";

export default function ContactForm() {
    async function handleSubmit(values) {
        const { name, email, subject, message } = values;
        try {
            const response = await axios.post("https://bookstore.eraasoft.pro/api/contacts/store", {
                name,
                email,
                subject,
                message,
            });
            console.log("Contact response:", response.data.data);
            toast.success("Message sent successfully");
            values.name = "";
            values.email = "";
            values.subject = "";
            values.message = "";
        } catch (error) {
            console.error("Error during contact submission:", error);
            toast.error("Failed to send message.");
        }
    }

    const contactFormSchema = yup.object({
        name: yup.string().required("Name is required"),
        email: yup.string().email("Invalid email address").required("Email is required"),
        subject: yup.string().required("Subject is required"),
        message: yup.string().required("Message is required"),
    });

    return (
        <Formik
            initialValues={{
                name: "",
                email: "",
                subject: "",
                message: "",
            }}
            validationSchema={contactFormSchema}
            onSubmit={(values) => handleSubmit(values)}>
            <Form className="flex flex-col gap-6 text-white">
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

                <div className="flex h-14 flex-1 items-center gap-3 rounded-lg border border-white/20 px-4">
                    <MdSubject className="mt-1 text-white/50" />

                    <FormInput type={"text"} placeholder={"Subject"} name={"subject"} placeholderColor="white/50" />
                </div>

                {/* Message */}
                <div className="flex min-h-37.5 items-start gap-3 rounded-lg border border-white/20 px-4 py-5">
                    <FiEdit3 className="mt-1 text-white/50" />

                    <FormTextarea
                        name="message"
                        placeholder="Your Message"
                        placeholderColor="white/50"
                        className="h-full min-h-27.5 w-full resize-none bg-transparent text-white outline-none"
                    />
                </div>

                {/* Button */}
                <FormButton btnMsg={"Send Message"} />
            </Form>
        </Formik>
    );
}
