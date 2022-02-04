import create from "zustand";

export const useStore = create((set) => ({
	id: "3AUY6xLFgkg",
	isOpen: false,
	toggle: () => set((state) => ({ isOpen: !state.isOpen })),
	addID: (id) => set((state) => ({ id: id })),
}));

export const useEventPopup = create((set) => ({
	name: "",
	title: "",
	description: "",
	list: [],
	image: "",
	isOpen: false,
	toggle: () => set((state) => ({ isOpen: !state.isOpen })),
	setName: (name) => set(() => ({ name: name })),
	setTitle: (title) => set(() => ({ title: title })),
	setDescription: (description) => set(() => ({ description: description })),
	setList: (list) => set(() => ({ list: list })),
	setImage: (image) => set(() => ({ image: image })),
}));
