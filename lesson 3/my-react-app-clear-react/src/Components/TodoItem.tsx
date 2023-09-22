import React, { FC } from "react";
import { Task } from "../todoSlice";

interface TodoItemProps {
  todo: Task;
  onDelete: (id: number) => void;
}

// interface ITodoItemProps {}

const TodoItem: FC<TodoItemProps> = ({ todo, onDelete }) => {
  return (
    <li>
      <p>{todo.text}</p>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
