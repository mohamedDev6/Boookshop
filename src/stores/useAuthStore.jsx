import { create } from "zustand";

export const useAuthStore = create((set) => ({
    token: null,
    userInfo: null,
    isAuthenticated: false,

    login: (token, userInfo) => set(() => ({ token, userInfo, isAuthenticated: true })),
    logout: () => set(() => ({ token: null, userInfo: null, isAuthenticated: false })),
}));
