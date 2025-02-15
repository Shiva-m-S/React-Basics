import { memo } from "react";

const Todos1 = ({ todos, addTodo }) => {
  console.log("child render");
  return (
    <>
      <h2>Using Callback</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
};

export default memo(Todos1);