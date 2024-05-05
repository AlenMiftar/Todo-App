import { useState } from "react";
import List from "./List";
import todoData from "../data/Todo.jsx";
import Form from "./Form.jsx";

const Home = () => {
  const [todo, setTodo] = useState(todoData);

  return (
    <div className="flex flex-col my-5 items-center bg-black ">
      <Form></Form>
      <List todo={todo} />
    </div>
  );
};

export default Home;
