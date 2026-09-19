import ResetPasswordForm from "../../components/forms/ResetPasswordForm";
import HeroAuthSection from "../../components/ui/HeroAuthSection";

export default function ResetPassword() {
    return (
        <>
            <HeroAuthSection />

            <main className="flex items-center justify-center flex-col gap-10 mt-15">
                <ResetPasswordForm />
            </main>
        </>
    );
}
