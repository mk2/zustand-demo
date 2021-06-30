import create from "zustand";
import createContext from "zustand/context";

interface HomeStoreData {
  editingId: string | null;
  editingInput: string;
}

interface HomeStore extends HomeStoreData {
  setEditingId: (id: string | null) => void;
  setEditingInput: (input: string) => void;
}

export const {
  Provider: HomeStoreProvider,
  useStore: useHomeStore,
} = createContext<HomeStore>();

export const createHomeStore = () =>
  create<HomeStore>((set) => ({
    editingId: null,
    setEditingId: (id: string | null) =>
      set((state) => ({ ...state, editingId: id })),
    editingInput: "",
    setEditingInput: (input: string) =>
      set((state) => ({ ...state, editingInput: input })),
  }));
