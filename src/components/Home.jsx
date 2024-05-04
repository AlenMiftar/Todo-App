import { useState } from "react";
import List from "./List";
import todoData from "../data/Todo.jsx";

const Home = () => {
  const [todo, setTodo] = useState(todoData);

  return (
    <div>
      <List todo={todo} />
    </div>
  );
};

export default Home;
