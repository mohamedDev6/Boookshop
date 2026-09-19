export default function RegisterwithGoogleOrFacebook() {
    return (
        <div className="w-[90%] lg:w-[36%] md:w-[50%] flex items-center justify-center flex-col gap-6">
            <p className="text-[#00000080] font-normal text-[14px] leading-5">or</p>

            <div className="login-btns w-full flex items-center justify-center flex-col gap-3">
                <button className="py-3 px-4 w-full flex items-center justify-center gap-2.5 shadow-elevated-button bg-white rounded-lg font-normal text-[14px] leading-5.5 cursor-pointer">
                    <img src="../../src/assets/Icons/logos_google-icon.png" alt="google icon" />
                    Login with Google
                </button>

                <button className="py-3 px-4 w-full flex items-center justify-center gap-2.5 shadow-elevated-button bg-white rounded-lg font-normal text-[14px] leading-5.5 cursor-pointer">
                    <img src="../../src/assets/Icons/facebook-icon.png" alt="facebook icon" />
                    Login with Facebook
                </button>
            </div>
        </div>
    );
}
