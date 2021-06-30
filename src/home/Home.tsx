import { ChangeEvent } from "react";
import MemoList from "./MemoList";

import { useStore } from "./memo-store";
import { HomeStoreProvider, createHomeStore, useHomeStore } from "./home-store";

const Home = () => {
  const [addMemo, modifyMemo] = useStore((state) => [
    state.addMemo,
    state.modifyMemo,
  ]);
  const [
    editingId,
    setEditingId,
    editingInput,
    setEditingInput,
  ] = useHomeStore((state) => [
    state.editingId,
    state.setEditingId,
    state.editingInput,
    state.setEditingInput,
  ]);

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
    <div className="App">
      <div style={{ display: "flex" }}>
        <button className="rounded-full py-3 px-6 bg-gray-50" onClick={onClickAddButton}>
          {editingId ? "編集" : "追加"}
        </button>
        <input onChange={onChangeInput} type="text" value={editingInput} />
      </div>
      <MemoList />
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
