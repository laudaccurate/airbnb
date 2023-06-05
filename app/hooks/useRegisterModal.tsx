import { create } from "zustand";

interface RegisterModalStore {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
}

const useRegiterModal = create<RegisterModalStore>((set) => ({
	isOpen: false,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false }),
}));

export default useRegiterModal;
