"use client";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/Ai";
import { v4 } from "uuid";

const TodoInput = ({ todos, setTodos }) => {
  const [todo, setTodo] = useState("");
  const handleClick = () => {
    const newTodo = {
      id: v4(),
      name: todo,
      isCompleted: false,
    };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    setTodo("")
  };
  return (
    <div className="flex gap-[15px] items-center justify-center pb-[10px] border-b-black">
      <div className="flex items-center gap-1">
      <input 
        placeholder="Enter Your Todo"
        className="text-black bg-[#e2e8f0] border-0 p-[10px] rounded-lg mt-10 w-[300px] "
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        type="text"
        value={todo}
      
      />
      <button 
       className="bg-[#d1fae5] mt-10 text-[#659669] b-0 p-[10px] rounded-[5px]"
      onClick={handleClick}>
        <AiOutlinePlus
        width={18} height={18} />
      </button>
      </div>
    </div>
  );
};

export default TodoInput;
