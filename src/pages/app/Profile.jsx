import FormInputReadOnly from "../../components/ui/FormInputReadOnly";
import HeroAuthSection from "../../components/ui/HeroAuthSection";
import FormLabelInput from "../../components/ui/FormLabelInput";
import FormButton from "../../components/ui/FormButton";
import { useAuthStore } from "../../stores/useAuthStore";

export default function Profile() {
    const { user } = useAuthStore();

    return (
        <>
            <HeroAuthSection />

            <main className="flex items-center justify-center flex-col gap-10 py-55 px-88">
                <section className="profile-section p-10 flex flex-col items-center justify-center gap-10 border border-[#22222233] rounded-3xl">
                    <h2 className="text-[20px] font-semibold leading-7">General information</h2>
                    {/* Name Inputs */}
                    <div className="name-inputs w-full flex items-center justify-center gap-4 mb-4">
                        <div className="first-name flex items-center flex-col gap-2 w-full">
                            <FormLabelInput htmlLabelFor={"first-name"} labelFor={"First Name"} />

                            <FormInputReadOnly
                                type={"text"}
                                value={user?.first_name || ""}
                                name={"first_name"}
                                id={"first-name"}
                            />
                        </div>

                        <div className="last-name flex items-center flex-col gap-2 w-full">
                            <FormLabelInput htmlLabelFor={"last-name"} labelFor={"Last Name"} />

                            <FormInputReadOnly
                                type={"text"}
                                value={user?.last_name || ""}
                                name={"last_name"}
                                id={"last-name"}
                            />
                        </div>
                    </div>

                    {/* Email Input */}
                    <div className="input-email flex items-center flex-col gap-2 w-full">
                        <FormLabelInput htmlLabelFor={"email"} labelFor={"Email"} />
                        <FormInputReadOnly type={"email"} value={user?.email || ""} name={"email"} id={"email"} />
                    </div>

                    {/* Phone Input */}
                    <div className="input-phone flex items-center flex-col gap-2 w-full">
                        <FormLabelInput htmlLabelFor={"phone"} labelFor={"Phone number"} />
                        <FormInputReadOnly
                            type={"tel"}
                            value={user?.phone || "01272620207"}
                            name={"phone"}
                            id={"phone"}
                        />
                    </div>

                    {/* Address Input */}
                    <div className="address-input flex items-center flex-col gap-2 w-full">
                        <FormLabelInput htmlLabelFor={"address"} labelFor={"Address"} />
                        <FormInputReadOnly
                            type={"text"}
                            value={user?.address || "egypt"}
                            name={"address"}
                            id={"address"}
                        />
                    </div>

                    {/* Update Button */}
                    <div className="update-btn w-full">
                        <FormButton btnMsg={"Update information"} />
                    </div>
                </section>
            </main>
        </>
    );
}
