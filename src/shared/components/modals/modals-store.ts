import { create } from "zustand";

type Props = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

export const useModalStore = create<Props>((set) => ({
  isOpen: false,
  openModal: () => set((state) => ({ isOpen: (state.isOpen = true) })),
  closeModal: () => set((state) => ({ isOpen: (state.isOpen = false) })),
}));
