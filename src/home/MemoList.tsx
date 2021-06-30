import { useStore } from "./memo-store";
import { useHomeStore } from "./home-store";

const MemoList = () => {
  const [memoList, deleteMemo] = useStore((state) => [
    state.memoList,
    state.deleteMemo,
  ]);
  const [setEditingId, setEditingInput] = useHomeStore((state) => [
    state.setEditingId,
    state.setEditingInput,
  ]);

  const onClickDeleteButton = (id: string) => () => {
    deleteMemo(id);
  };

  const onClickEditButton = (memo: { id: string; content: string }) => () => {
    setEditingId(memo.id);
    setEditingInput(memo.content);
  };

  return (
    <ul style={{ listStyle: "none" }}>
      {memoList.map((memo) => (
        <div
          style={{
            display: "flex",
            width: "500px",
            justifyContent: "flex-start",
          }}>
          <button onClick={onClickDeleteButton(memo.id)}>-</button>
          <li style={{ textAlign: "start", marginLeft: 10 }}>{memo.content}</li>
          <span style={{ flexGrow: 2 }} />
          <button onClick={onClickEditButton(memo)}>Edit</button>
        </div>
      ))}
    </ul>
  );
};

export default MemoList;
