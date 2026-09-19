import ForgetPasswordForm from "../../components/forms/ForgetPasswordForm";
import HeroAuthSection from "../../components/ui/HeroAuthSection";

export default function ForgetPassword() {
    return (
        <>
            <HeroAuthSection />

            <main className="flex items-center justify-center flex-col gap-10 mt-15">
                <ForgetPasswordForm />
            </main>
        </>
    );
}
