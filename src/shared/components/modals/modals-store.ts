import { create } from "zustand";

type Props = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

export const useModalStore = create<Props>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));

type WarnModalProps = {
  isOpen: boolean;
  openWarnModal: () => void;
  closeWarnModal: () => void;
};
export const useWarnModalStore = create<WarnModalProps>((set) => ({
  isOpen: false,
  openWarnModal: () => set({ isOpen: true }),
  closeWarnModal: () => set({ isOpen: false }),
}));
