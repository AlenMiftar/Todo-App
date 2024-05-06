import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import List from "./List";
import todoData from "../data/Todo.jsx";
import Form from "./Form.jsx";

const Home = () => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await fetch("http://localhost:6001/todos");
    const data = await response.json();

    setTodo(data);
  };

  const addTodo = (newTodo) => {
    newTodo.id = uuidv4();
    setTodo([newTodo, ...todo]);
  };

  const deleteTodo = (id) => {
    if (window.confirm("Are you sure you want to delete the ToDo?")) {
      setTodo(todo.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="flex flex-col my-5 items-center ">
      <Form addTodo={addTodo} />
      <List todo={todo} handleDelete={deleteTodo} />
    </div>
  );
};

export default Home;
