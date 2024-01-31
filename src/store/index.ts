import { create } from "zustand";

type User = {
  username: string;
  id: string;
  email: string | undefined;
};

type Menu = "close" | "member" | "free" | "category";

type Store = {
  user: User | null;
  setUser: (user: User) => void;
  logout: () => void;
  menu: Menu;
  setMenu: (menu: Menu) => void;
};

export const useStore = create<Store>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
  menu: "close",
  setMenu: (menu) => set({ menu }),
}));
