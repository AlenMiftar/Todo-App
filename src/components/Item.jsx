import { useState } from "react";
import {
  MdDeleteForever,
  MdEdit,
  MdOutlineCalendarToday,
} from "react-icons/md";
import Card from "./Card";
import Checkbox from "./Checkbox";
import Form from "./Form";
import axios from "axios";

const Item = ({ todo, handleDelete, markTodo, fetchTodos }) => {
  const [done, setDone] = useState(todo.done);
  const [edit, setEdit] = useState(false);

  const handleChange = (e) => {
    e.target.checked;
  };

  const editTodo = (updatedTodo) => {
    if (window.confirm("Are you sure you want to edit the ToDo?")) {
      axios
        .put(`http://localhost:6001/todos/${todo.id}`, updatedTodo)
        .then((response) => {
          alert("Todo updated successfully:");
          fetchTodos();
        })
        .catch((error) => {
          console.error("Error updating todo:", error);
        });
    }
    setEdit(false);
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
                label={done === true ? "Done" : "Doing"}
                value={done}
                onChange={handleChange}
                onClick={() => markTodo(todo.id)}
              />
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

export default Item;
