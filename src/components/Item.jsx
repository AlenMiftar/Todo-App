import { useState } from "react";

const Item = ({ todo }) => {
  //const [title, setTitle] = useState("Title");
  //const [task, setTask] = useState("Task");
  return (
    <div className="bg-gray-900 rounded-xl flex flex-col items-center p-2 m-12">
      <div className="text-5xl p-2">{todo.title}</div>
      <div className=" rounded p-2 ">{todo.task}</div>
    </div>
  );
};

export default Item;
