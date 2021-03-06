import { ChangeEvent } from "react";
import MemoList from "./MemoList";

import { useStore } from "./memo-store";
import { HomeStoreProvider, createHomeStore, useHomeStore } from "./home-store";

const Home = () => {
  const [addMemo, modifyMemo] = useStore((state) => [
    state.addMemo,
    state.modifyMemo,
  ]);
  const [editingId, setEditingId, editingInput, setEditingInput] = useHomeStore(
    (state) => [
      state.editingId,
      state.setEditingId,
      state.editingInput,
      state.setEditingInput,
    ]
  );

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setEditingInput(e.target.value);
  };

  const onClickAddButton = () => {
    if (editingId === null) {
      addMemo(editingInput);
    } else {
      modifyMemo(editingId, editingInput);
    }
    setEditingId(null);
    setEditingInput("");
  };

  return (
    <div className="App py-2 px-2">
      <div className="py-3 px-6">
        <div className="flex">
          <input
            className="form-input border-2 rounded-md"
            onChange={onChangeInput}
            type="text"
            value={editingInput}
          />
          <button
            className="py-2 px-6 bg-indigo-100 text-indigo-700 font-semibold mx-2 rounded-md"
            onClick={onClickAddButton}>
            {editingId ? "編集" : "追加"}
          </button>
        </div>
      </div>
      <div className="my-6 mx-6">
        <MemoList />
      </div>
    </div>
  );
};

export default () => {
  return (
    <HomeStoreProvider createStore={createHomeStore}>
      <Home />
    </HomeStoreProvider>
  );
};
