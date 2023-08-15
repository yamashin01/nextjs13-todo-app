import { Task } from "./type";

export const getAllTodos = async (): Promise<Task[]> => {
  const res = await fetch(`http://localhost:3001/tasks`, { cache: "no-store" }); // SSR
  //   const res = await fetch(`http://localhost:3001/tasks`, {cache: "force-cache"}); // SSG
  const todos = res.json();

  return todos;
};
