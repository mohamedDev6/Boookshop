import BtnAuth from "../../components/BtnAuth";
import HeroAuthSection from "../../components/HeroAuthSection";

export default function AddCode() {
    return (
        <>
            <HeroAuthSection />

            <main className="flex items-center justify-center flex-col gap-10 mt-15">
                <div className="text-center">
                    <h3 className="text-[#D9176C] font-semibold text-[16px] leading-5.5">Reset your password!</h3>
                    <p className="text-[#22222280] font-semibold text-[14px] leading-5.5 mt-4">
                        Enter the 4 dights code that you received on your email
                    </p>
                </div>

                <form className="w-[90%] lg:w-[30%] md:w-[50%] flex items-center justify-center flex-col gap-10">
                    <div className="code-inputs flex items-center gap-6 w-full">
                        <input
                            type="text"
                            className="w-full text-[#000000] py-4 px-6 rounded-xl border border-solid border-[#22222233] focus:border-[#222222] outline-0 font-semibold text-[22px] leading-[100%]"
                            maxLength="1"
                            required
                        />
                        <input
                            type="text"
                            className="w-full text-[#000000] py-4 px-6 rounded-xl border border-solid border-[#22222233] focus:border-[#222222] outline-0 font-semibold text-[22px] leading-[100%]"
                            maxLength="1"
                            required
                        />

                        <input
                            type="text"
                            className="w-full text-[#000000] py-4 px-6 rounded-xl border border-solid border-[#22222233] focus:border-[#222222] outline-0 font-semibold text-[22px] leading-[100%]"
                            maxLength="1"
                            required
                        />

                        <input
                            type="text"
                            className="w-full text-[#000000] py-4 px-6 rounded-xl border border-solid border-[#22222233] focus:border-[#222222] outline-0 font-semibold text-[22px] leading-[100%]"
                            maxLength="1"
                            required
                        />
                    </div>

                    <BtnAuth btnMsg="Send reset code" />

                    <h4 className="font-normal text-[16px] leading-5.5">
                        Already have an account?{" "}
                        <span className="text-[#D9176C] font-semibold cursor-pointer">Send again</span>
                    </h4>
                </form>
            </main>
        </>
    );
}
