import AddCodeForm from "../../components/forms/AddCodeForm";
import HeroAuthSection from "../../components/ui/HeroAuthSection";

export default function AddCode() {
    return (
        <>
            <HeroAuthSection />

            <main className="w-full flex items-center justify-center flex-col gap-10 mt-15">
                <AddCodeForm />
            </main>
        </>
    );
}
