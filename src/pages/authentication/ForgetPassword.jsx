import HeroAuthSection from "../../components/HeroAuthSection";
import BtnAuth from "../../components/BtnAuth";

export default function ForgetPassword() {
    return (
        <>
            <HeroAuthSection />

            <main className="flex items-center justify-center flex-col gap-10 mt-15">
                <div className="text-center">
                    <h3 className="text-[#D9176C] font-semibold text-[16px] leading-5.5">Forget Password?</h3>
                    <p className="text-[#22222280] font-semibold text-[14px] leading-5.5 mt-4">
                        Enter your email to reset your password
                    </p>
                </div>

                <form className="w-[90%] lg:w-[36%] md:w-[50%] flex items-center justify-center flex-col gap-10">
                    <div className="input-email flex items-center flex-col gap-2 w-full">
                        <label htmlFor="email" className="text-start w-full font-semibold text-[18px] leading-[100%]">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="example@gmail.com"
                            className="w-full text-[#22222280] p-4 rounded-lg border border-solid border-[#22222233] outline-0 font-normal text-[16px] leading-5.5"
                            required
                        />
                    </div>

                    <BtnAuth btnMsg="Send reset code" />
                </form>
            </main>
        </>
    );
}
