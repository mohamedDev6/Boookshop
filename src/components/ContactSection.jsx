import { FaPhoneAlt, FaRegCommentDots, FaMapMarkerAlt } from "react-icons/fa";
import ContactForm from "./forms/ContactForm";
import ContactInfo from "./ui/contactInfo";

export default function ContactSection() {
    return (
        <section className="bg-[#3B2F4A] px-43 py-32 flex items-center justify-between">
            <div className="relative z-10 mx-auto flex w-[90%] max-w-275 flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
                {/* Left Side */}
                <div className="w-full lg:w-[58%]">
                    <div className="mb-14">
                        <h2 className="text-4xl font-bold leading-[1.3] text-white">
                            Have a Questions?
                            <br />
                            Get in Touch
                        </h2>

                        <p className="mt-5 max-w-150 text-[16px] leading-6 text-white/50">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in
                            justo varius, sagittis neque ut, malesuada leo.
                        </p>
                    </div>

                    <ContactForm />
                </div>

                {/* Right Side */}
                <div className="flex w-full flex-col gap-6 lg:w-[35%] lg:pt-0">
                    <ContactInfo icon={<FaPhoneAlt />} text="01123456789" />

                    <ContactInfo icon={<FaRegCommentDots />} text="Example@gmail.com" />

                    <ContactInfo
                        icon={<FaMapMarkerAlt />}
                        text="adipiscing elit. Mauris et ultricies est. Aliquam in justo varius,"
                    />
                </div>
            </div>
        </section>
    );
}
