import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import List from "./List";
import todoData from "../data/Todo.jsx";
import Form from "./Form.jsx";
import axios from "axios";

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

  // const addTodo = async (newTodo) => {
  //   newTodo.id = uuidv4();
  //   setTodo([newTodo, ...todo]);
  //   await fetch("http://localhost:6001/todos", {
  //     method: "POST",
  //     body: JSON.stringify(newTodo),
  //   });
  //   alert("Todo added successfully!");
  // };

  const addTodo = (newTodo) => {
    newTodo.id = uuidv4();
    setTodo([newTodo, ...todo]);
    axios
      .post("http://localhost:6001/todos", newTodo)
      .then(alert("Todo added successfully!"));
  };

  const deleteTodo = (id) => {
    if (window.confirm("Are you sure you want to delete the ToDo?")) {
      setTodo(todo.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="flex flex-col items-center m-auto">
      <Form addTodo={addTodo} />
      <List todo={todo} handleDelete={deleteTodo} />
    </div>
  );
};

export default Home;
