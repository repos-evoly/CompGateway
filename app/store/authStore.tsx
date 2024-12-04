import { create } from "zustand";
import { useRouter } from "@/navigation";

interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  checkAuth: () => void;
  login: (token: string) => void;
  logout: () => void;
}
// In your authStore
export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  isAuthenticated: false,

  checkAuth: () => {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="))
      ?.split("=")[1];

    set({
      token,
      isAuthenticated: !!token,
    });
  },

  login: (token: string) => {
    document.cookie = `token=${token}; path=/`;
    set({ token, isAuthenticated: true });
  },

  logout: () => {
    console.log("Logout function in store called");
    document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    set({ token: null, isAuthenticated: false });
  },
}));
