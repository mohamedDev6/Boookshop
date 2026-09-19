import { create } from "zustand";

const usePasswordResetStore = create((set) => ({
    email: "",
    otp: "",

    setEmail: (email) => set({ email }),

    setOtp: (otp) => set({ otp }),

    clearResetData: () =>
        set({
            email: "",
            otp: "",
        }),
}));

export default usePasswordResetStore;
