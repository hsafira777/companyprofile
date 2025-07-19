import { create } from "zustand";

export interface User {
  email: string;
  firstname: string;
  lastname: string;
}

type AuthState = {
  user: User | null;
};

type AuthActions = {
    onLoginSuccess: (User: User | null) => void;
    clearAuth: () => void;
}

type AuthStore = AuthState & AuthActions;

const useAuthStore = create<AuthStore>((set) => ({
    user: null,
    onLoginSuccess: (payload) => set(() => ({ user: payload })),
    clearAuth: () => set(() => ({ user: null })),
}));

export default useAuthStore