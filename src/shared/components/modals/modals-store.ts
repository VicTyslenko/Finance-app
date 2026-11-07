import { create } from "zustand";

export type FormMode = "new" | "edit" | "add money" | "withdraw";

interface ModalProps {
  isOpen: boolean;
  openModal: (mode?: FormMode) => void;
  closeModal: () => void;
  formMode: FormMode;
}

export const useModalStore = create<ModalProps>((set) => ({
  isOpen: false,
  openModal: (mode) => set({ isOpen: true, formMode: mode }),
  closeModal: () => set({ isOpen: false }),
  formMode: "new",
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
