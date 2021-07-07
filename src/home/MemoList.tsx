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
    <ul className="list-none grid grid-cols-12 gap-4 items-center place-items-start">
      {memoList.map((memo) => (
        <>
          <button
            className="form-input rounded-full border-2 bg-red-50"
            onClick={onClickDeleteButton(memo.id)}>
            del
          </button>
          <li className="col-span-10 mx-5">
            <span className="text-2xl font-sans">{memo.content}</span>
          </li>
          <button
            className="form-input rounded-full border-2"
            onClick={onClickEditButton(memo)}>
            Edit
          </button>
        </>
      ))}
    </ul>
  );
};

export default MemoList;
