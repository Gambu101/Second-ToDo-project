import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false }); 
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }

  

  return (
    <>
    {/* this is the main form that accepts the input of the tasks */}
      <form className={styles.todoform} onSubmit={handleSubmit}>
        <input
          className={styles.moderInput}
          value={todo.name}
          onChange={(e) => {
            setTodo({ name: e.target.value, done: false });
          }}
          type="text"
          placeholder="Enter todo item..."
        />
        <button className={styles.modernButton} type="submit">
          Add{" "}
        </button>
      </form>
    </>
  );
}
