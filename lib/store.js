import create from "zustand";

export const useStore = create((set) => ({
	id: "3AUY6xLFgkg",
  isOpen: false,
  toggle:()=>set((state) =>({isOpen:!state.isOpen})),
	addID: (id) =>set((state) => ({			id: id,})),

}));
