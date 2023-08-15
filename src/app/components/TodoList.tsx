import React from "react";

const TodoList = () => {
  return (
    <ul className="space-y-3">
      <li className="flex justify-between p-4 bg-white border-l-4 border-blue-500 shadow rounded">
        <span>散歩</span>
        <div>
          <button className="text-green-500 px-2">Edit</button>
          <button className="text-orange-400 px-2">Delete</button>
        </div>
      </li>
    </ul>
  );
};

export default TodoList;
