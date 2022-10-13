import React, { useRef } from "react";
import "./InputFeild.scss";

interface Props {
  todo: string;
  setToDo: React.Dispatch<React.SetStateAction<string>>;
  handelAdd: (e: React.FormEvent) => void;
}
const InputFeild: React.FC<Props> = ({ todo, setToDo, handelAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handelAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        className="input_box"
        type="input"
        placeholder="enter a task"
        value={todo}
        onChange={(e) => {
          return setToDo(e.target.value);
        }}
      />
      <button
        className="input_submit"
        type="submit"
        onClick={() => {
          return console.log(todo);
        }}
      >
        Go
      </button>
    </form>
  );
};

export default InputFeild;
