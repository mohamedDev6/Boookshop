import { useState } from "react";
import BtnAuth from "../../components/BtnAuth";
import HeroAuthSection from "../../components/HeroAuthSection";
import { IoEyeSharp } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";

export default function ResetPassword() {
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    return (
        <>
            <HeroAuthSection />

            <main className="flex items-center justify-center flex-col gap-10 mt-15">
                <form className="w-[90%] lg:w-[36%] md:w-[50%] flex items-center justify-center flex-col gap-10">
                    <div className="text-center">
                        <h3 className="text-[#D9176C] font-semibold text-[16px] leading-5.5">Reset your password!</h3>
                        <p className="text-[#22222280] font-semibold text-[14px] leading-5.5 mt-4">
                            Create a strong password <br /> Your new password must be different from previous one
                        </p>
                    </div>

                    <div className="inputs w-full">
                        <div className="input-password flex items-center flex-col gap-2 relative">
                            <label
                                htmlFor="password"
                                className="text-start w-full font-semibold text-[18px] leading-[100%]">
                                Password
                            </label>
                            <input
                                type={isPasswordVisible ? "text" : "password"}
                                id="password"
                                placeholder="Enter Password"
                                className="w-full placeholder:text-[#22222280] p-4 rounded-lg border border-solid border-[#22222233] outline-0 font-normal text-[16px] leading-5.5"
                                required
                            />
                            <button
                                type="button"
                                className={`absolute right-4 top-11 text-[20px] cursor-pointer ${isPasswordVisible ? "text-[#D9176C]" : "text-[#22222280]"}`}
                                onClick={() => setPasswordVisible(!isPasswordVisible)}>
                                {isPasswordVisible ? <IoEyeSharp /> : <FaRegEyeSlash />}
                            </button>
                            <p className="placeholder:text-[#22222280] font-normal text-[14px] leading-5.5 self-start">
                                Must be at least 8 characterss
                            </p>
                        </div>

                        <div className="input-confirm-password flex items-center flex-col gap-2 mt-6 relative">
                            <label
                                htmlFor="confirm-password"
                                className="text-start w-full font-semibold text-[18px] leading-[100%]">
                                Confirm password
                            </label>
                            <input
                                type={isConfirmPasswordVisible ? "text" : "password"}
                                id="confirm-password"
                                placeholder="Confirm Password"
                                className="w-full placeholder:text-[#22222280] p-4 rounded-lg border border-solid border-[#22222233] outline-0 font-normal text-[16px] leading-5.5"
                                required
                            />
                            <button
                                type="button"
                                className={`absolute right-4 top-11 text-[20px] cursor-pointer ${isConfirmPasswordVisible ? "text-[#D9176C]" : "text-[#22222280]"}`}
                                onClick={() => setConfirmPasswordVisible(!isConfirmPasswordVisible)}>
                                {isConfirmPasswordVisible ? <IoEyeSharp /> : <FaRegEyeSlash />}
                            </button>
                        </div>

                        <div className="remember flex items-center justify-between mt-4">
                            <div className="remember-checkbox flex items-center justify-center gap-2">
                                <input
                                    type="checkbox"
                                    id="checkbox"
                                    className="checkbox text-[#D9176C] border border-solid border-[#22222233] rounded-lg"
                                    required
                                />
                                <label htmlFor="checkbox" className="font-normal text-[16px] leading-5.5">
                                    Remember Me
                                </label>
                            </div>
                        </div>
                    </div>

                    <BtnAuth btnMsg="Reset Password" />
                </form>
            </main>
        </>
    );
}
