import React, { useState } from "react";

const AddTodoForm = ({ onAdd }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(newTodo);
    setNewTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="New todo" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodoForm;
