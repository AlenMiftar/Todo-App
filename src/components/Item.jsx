import { useEffect, useState } from "react";
import {
  MdDeleteForever,
  MdEdit,
  MdOutlineCalendarToday,
} from "react-icons/md";
import Card from "./Card";
import Checkbox from "./Checkbox";
import Form from "./Form";
import axios from "axios";

const Item = ({ todo, handleDelete, fetchTodos }) => {
  const [done, setDone] = useState(todo.isDone);
  const [edit, setEdit] = useState(false);
  const [todos, setTodos] = useState();

  const [updatedTodo, setUpdatedTodo] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("todos");
    if (data) {
      const parsedata = JSON.parse(data);
      setTodos(parsedata);
    }
  }, []);
  useEffect(() => {
    if (updatedTodo) {
      editTodo(updatedTodo, true);
    }
  }, [updatedTodo]);

  const handleChange = (e) => {
    const isChecked = e.target.checked;
    setDone(isChecked);
    const checkedTodo = { ...todo, isDone: isChecked };
    setUpdatedTodo(checkedTodo);
  };

  const editTodo = (updatedTodo, isChecked) => {
    let confirm = false;
    if (!isChecked) {
      confirm = window.confirm("Are you sure you want to edit the ToDo?");
    } else {
      confirm = true;
    }
    if (confirm) {
      const changedTodo = { ...todo, ...updatedTodo };
      const updatedlist = todos.filter((item) => item.id !== changedTodo.id);

      localStorage.setItem(
        "todos",
        JSON.stringify([...updatedlist, changedTodo])
      );
      fetchTodos();

      // axios
      //   .put(`http://localhost:6001/todos/${todo.id}`, changedTodo)
      //   .then((response) => {
      //     if (!isChecked) alert("Todo updated successfully:");
      //     fetchTodos();
      //   })
      //   .catch((error) => {
      //     console.error("Error updating todo:", error);
      //   });
    }
    setEdit(false);
    setUpdatedTodo(null);
  };

  return (
    <>
      {edit ? (
        <Form action={editTodo} todo={todo}></Form>
      ) : (
        <Card>
          <div className="card-container flex flex-col gap-5 p-2 ">
            <div className="flex-container flex  items-center gap-8 ">
              <div className="title text-3xl ">{todo.title}</div>
              <div className="btns flex  gap-3">
                <MdEdit
                  style={{
                    color: "#f7cd62",
                    marginRight: ".5rem",
                    cursor: "pointer",
                  }}
                  onClick={() => setEdit(true)}
                />
                <MdDeleteForever
                  style={{ color: "#ed844f", cursor: "pointer" }}
                  onClick={() => handleDelete(todo.id)}
                />
              </div>
            </div>

            <div className="task ">{todo.task}</div>
            <div className="flex-container flex justify-between">
              <div className=" day flex items-center">
                <MdOutlineCalendarToday className="calendar" />
                <p>{todo.day}</p>
              </div>

              <Checkbox
                label={done === true ? "Done" : "Mark as done"}
                value={todo.isDone}
                onChange={handleChange}
              />
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

export default Item;
