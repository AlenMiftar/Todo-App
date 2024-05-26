import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import List from "./List";
import Form from "./Form.jsx";
import axios from "axios";

const Home = () => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  // built in fetch request
  // const fetchTodos = async () => {
  //   const response = await fetch("http://localhost:6001/todos");
  //   const data = await response.json();

  //   setTodo(data);
  // };

  const fetchTodos = async () => {
    const { data } = await axios.get("http://localhost:6001/todos");
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

  const addTodo = (newTodo, updatedTodo) => {
    newTodo.id = uuidv4();
    newTodo.isDone = false;
    setTodo([newTodo, ...todo, updatedTodo]);
    axios
      .post("http://localhost:6001/todos", newTodo)
      .then(alert("Todo added successfully!"));
  };

  // const checkedTodo = (doneTodo) => {
  //   if (window.confirm("Are you sure you want to mark the ToDo as done?")) {
  //     newtodo.isDone = true;
  //     console.log(todo);
  //     axios
  //       .put(`http://localhost:6001/todos/${newTodo.isDone}`, doneTodo)
  //       .then((response) => {
  //         alert("Todo marked as done and updated successfully:");
  //         fetchTodos();
  //       })
  //       .catch((error) => {
  //         console.error("Error updating todo:", error);
  //       });

  //   }
  // };

  const deleteTodo = (id) => {
    if (window.confirm("Are you sure you want to delete the ToDo?")) {
      setTodo(todo.filter((item) => item.id !== id));
      axios
        .delete(`http://localhost:6001/todos/${id}`)
        .then((response) => {
          alert("Todo deleted successfully:", response.data);
          console.log("Todo deleted successfully:", response.data);
        })
        .catch((error) => {
          console.error("Error deleting user:", error);
        });
    }
  };

  // const markTodo = (doneTodo) => {
  //   if (newTodo.isDone === true) {
  //     console.log(`Todo with id:${doneTodo} is marked as done!`);
  //   } else {
  //     console.log(`Todo is not done yet`);
  //   }
  // };

  return (
    <div className="flex flex-col items-center m-auto">
      <Form action={addTodo} />
      <List
        todo={todo}
        handleDelete={deleteTodo}
        onChange={onchange}
        fetchTodos={fetchTodos}
      />
    </div>
  );
};

export default Home;
