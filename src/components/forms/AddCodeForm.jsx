import { useNavigate } from "react-router-dom";
import FormButton from "../ui/FormButton";
import FormDesc from "../ui/FormDesc";
import FormQLinkMsg from "../ui/FormQLinkMsg";
import FormTitle from "../ui/FormTitle";
import usePasswordResetStore from "../../stores/usePasswordResetStore";
import { useState } from "react";

export default function AddCodeForm() {
    const navigate = useNavigate();
    const [otpInputs, setOtpInputs] = useState(["", "", "", ""]);
    const { setOtp } = usePasswordResetStore();

    const handleSubmit = () => {
        const otp = otpInputs.join("");

        setOtp(otp);
        navigate("/reset-password");
    };

    return (
        <>
            <div className="text-center">
                <FormTitle title={"Reset your password!"} />
                <FormDesc description={"Enter the 4 dights code that you received on your email"} />
            </div>

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                }}
                className="w-[90%] lg:w-[30%] md:w-[50%] flex items-center justify-center flex-col gap-10">
                <div className="code-inputs flex items-center gap-6 w-full">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <input
                            key={index}
                            type="text"
                            inputMode="numeric"
                            maxLength={1}
                            pattern="[0-9]"
                            onChange={(e) => {
                                e.target.value = e.target.value.replace(/\D/g, "");
                                const value = e.target.value;

                                setOtpInputs((prev) => {
                                    const newOtp = [...prev];
                                    newOtp[index] = value;
                                    return newOtp;
                                });
                            }}
                            className="min-w-15 text-[#000000] py-4 px-2 rounded-xl border border-solid border-[#22222233] focus:border-[#222222] outline-0 font-semibold text-[22px] leading-[100%] text-center"
                            required
                        />
                    ))}
                </div>

                <FormButton btnMsg={"Reset password"} />

                <FormQLinkMsg Q={"Didn’t receive a code?"} url={""} Msg={"Send again"} />
            </form>
        </>
    );
}
