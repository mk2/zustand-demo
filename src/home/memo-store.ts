import { nanoid } from "nanoid";
import create from "zustand";
import produce from "immer";

interface MemoStoreData {
  memoList: { id: string; content: string }[];
}

interface MemoStore extends MemoStoreData {
  set: (cb: (state: MemoStoreData) => void) => void;
  addMemo: (memo: string) => void;
  modifyMemo: (id: string, memo: string) => void;
  deleteMemo: (id: string) => void;
}

export const useStore = create<MemoStore>((set) => ({
  editingId: null,
  editingInput: "",
  memoList: [],
  set: (fn) => {
    set(produce(fn));
  },
  addMemo: (content: string) => {
    set((state) => {
      return {
        memoList: [
          ...state.memoList,
          {
            id: nanoid(),
            content,
          },
        ],
      };
    });
  },
  modifyMemo: (id: string, content: string) => {
    set((state) => {
      return {
        memoList: [
          ...state.memoList.filter((memo) => memo.id !== id),
          { id, content },
        ],
      };
    });
  },
  deleteMemo: (id: string) => {
    set((state) => {
      return {
        memoList: state.memoList.filter((memo) => memo.id !== id),
      };
    });
  },
}));
