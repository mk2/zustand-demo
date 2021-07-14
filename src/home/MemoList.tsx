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
            className="form-input border-2 bg-black text-white rounded-md"
            onClick={onClickDeleteButton(memo.id)}>
            del
          </button>
          <button
            className="form-input border-2 rounded-md bg-white"
            onClick={onClickEditButton(memo)}>
            Edit
          </button>
          <li className="col-span-9 mx-5">
            <span className="text-2xl font-sans">{memo.content}</span>
          </li>
          <input
            type="checkbox"
            className="form-checkbox checked:bg-indigo-600 checked:border-transparent h-5 w-5 text-gray-600 rounded-md"></input>
        </>
      ))}
    </ul>
  );
};

export default MemoList;
