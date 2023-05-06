"use client";
import { BsPencilSquare, BsTrash } from "react-icons/bs";
import {useState} from "react";

const TodoItem = ({ todo, index, todos, setTodos }) => {
  const [isEdit, setIsEdit] = useState(false)
  const handleDelete = () => {
    const newTodos = todos.filter((item) => {
      if (todo.id === item.id) {
        return false;
      } else {
        return true;
      }
    });
     setTodos(newTodos)
  };
  // const handleEdit = () => {
  //   setIsEdit(!isEdit);
  // }
  return (
    <div className="flex justify-between p-[15px] items-center bg-[#f1f5f9] mt-[15px] rounded-[10px]">
      <div className="flex gap-[10px] ">
        <div>{index}.</div>
        <div className="font-bold text-2xl">{todo.name}</div> 
        {/* {isEdit ? <input type="text"/> : <div>{todo.name}</div>}
        <div className="font-bold text-2xl">{todo.name}</div> */}
      </div>
      <div className="flex gap-[10px]">
        <button 
        // onClick={handleEdit}
        className="p-[5px] text-[#0ea59e] border-[0ea59e] ">
          <BsPencilSquare width={20} height={20} />
        </button>
        <button onClick={handleDelete} className="text-[#f43f5e]">
          <BsTrash width={20} height={20} />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
