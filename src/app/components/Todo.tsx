import { Task } from "@/type";
import React from "react";

interface TodoProps {
  todo: Task;
}
const Todo = ({ todo }: TodoProps) => {
  return (
    <li
      key={todo.id}
      className="flex justify-between p-4 bg-white border-l-4 border-blue-500 shadow rounded"
    >
      <span>{todo.text}</span>
      <div>
        <button className="text-green-500 px-2">Edit</button>
        <button className="text-orange-400 px-2">Delete</button>
      </div>
    </li>
  );
};

export default Todo;
