import { create } from "zustand";

export type User = {
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
  modal: string[];
  setModal: (modal: string[]) => void;
  clearModal: () => void;
  image_src: string | null;
  setImage_src: (image_src: string) => void;
  clearImage_src: () => void;
};

export const useStore = create<Store>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
  menu: "close",
  setMenu: (menu) => set({ menu }),
  modal: [],
  setModal: (modal) => set({ modal }),
  clearModal: () => set({ modal: [] }),
  image_src: null,
  setImage_src: (image_src) => set({ image_src }),
  clearImage_src: () => set({ image_src: null }),
}));
