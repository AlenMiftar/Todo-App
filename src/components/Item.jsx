import { useState } from "react";
import {
  MdDeleteForever,
  MdEdit,
  MdOutlineCalendarToday,
} from "react-icons/md";
import Card from "./Card";
import Checkbox from "./Checkbox";

const Item = ({ todo }) => {
  //const [title, setTitle] = useState("Title");
  //const [task, setTask] = useState("Task");
  const [done, setDone] = useState(todo.done);
  const handleChange = (e) => {
    setDone(e.target.checked);
  };

  return (
    <Card>
      <div className="card-container flex flex-col gap-2 ">
        <div className="flex-container flex  items-center gap-8 ">
          <div className="title text-3xl">{todo.title}</div>
          <div className="btns flex gap-3">
            <MdEdit style={{ color: "#f7cd62", marginRight: ".5rem" }} />
            <MdDeleteForever style={{ color: "#ed844f" }} />
          </div>
        </div>

        <div className="task flex flex-col">{todo.task}</div>
        <div className="flex-container flex justify-between">
          <div className=" day flex items-center">
            <MdOutlineCalendarToday className="calendar" />
            <p>{todo.day}</p>
          </div>

          <Checkbox
            label={done === true ? "Done" : "Doing"}
            value={done}
            onChange={handleChange}
          />
        </div>
      </div>
    </Card>
  );
};

export default Item;