import LoginForm from "../../components/forms/LoginForm";
import HeroAuthSection from "../../components/ui/HeroAuthSection";
import RegisterwithGoogleOrFacebook from "../../components/ui/RegisterwithGoogleOrFacebook";

export default function LogIn() {
    return (
        <>
            <HeroAuthSection />

            <main className="flex items-center justify-center flex-col gap-10 mt-15">
                <LoginForm />
                <RegisterwithGoogleOrFacebook />
            </main>
        </>
    );
}
