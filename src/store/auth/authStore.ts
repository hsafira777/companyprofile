"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface User {
  email: string;
  firstname: string;
  lastname: string;
}

type AuthState = {
  user: User | null;
  isLogin: boolean;
};

type AuthActions = {
  onLoginSuccess: (user: User) => void;
  clearAuth: () => void;
};

type AuthStore = AuthState & AuthActions;

const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      isLogin: false,
      onLoginSuccess: (user) => set(() => ({ user: user, isLogin: true })),
      clearAuth: () => set(() => ({ user: null, isLogin: false })),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({
        user: state.user,
        isLogin: state.isLogin,
      }),
    }
  )
);

export default useAuthStore;