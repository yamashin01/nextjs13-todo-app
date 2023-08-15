"use client";
import { editTodo } from "@/api";
import { Task } from "@/type";
import React, { useEffect, useRef, useState } from "react";

interface TodoProps {
  todo: Task;
}
const Todo = ({ todo }: TodoProps) => {
  const [isEditting, setIsEditting] = useState(false);
  const [editingTaskTitle, setEditingTaskTitle] = useState(todo.text);

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditting) {
      ref.current?.focus();
    }
  }, [isEditting]);

  const handleEditTodo = async () => {
    setIsEditting(true);
  };
  const handleSaveTodo = async () => {
    await editTodo(todo.id, editingTaskTitle);
    setIsEditting(false);
  };

  return (
    <li
      key={todo.id}
      className="flex justify-between p-4 bg-white border-l-4 border-blue-500 shadow rounded"
    >
      {isEditting ? (
        <input
          ref={ref}
          type="text"
          className="mr-2 py-1 px-2 rounded border-gray-400 border"
          value={editingTaskTitle}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEditingTaskTitle(e.target.value)
          }
        />
      ) : (
        <span>{todo.text}</span>
      )}

      <div>
        {isEditting ? (
          <button className="text-blue-500 px-2" onClick={handleSaveTodo}>
            Save
          </button>
        ) : (
          <button className="text-green-500 px-2" onClick={handleEditTodo}>
            Edit
          </button>
        )}
        <button className="text-orange-400 px-2">Delete</button>
      </div>
    </li>
  );
};

export default Todo;
