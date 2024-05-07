import { useState } from "react";
import Card from "./Card";
import Button from "./Button";

const Form = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [task, setTask] = useState("");
  const [day, setDay] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      title,
      task,
      day,
    };

    addTodo(newTodo);
    console.log(newTodo);
    setTitle("");
    setTask("");
    setDay("");
  };

  return (
    <Card create={true}>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center ">
          <h1 className="text-3xl mb-4 font-semibold">Add a new ToDo</h1>
          <label htmlFor="title">
            <p>Title</p>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              className="w-44 border-b-2 text-white bg-transparent"
            />
          </label>

          <label htmlFor="task">
            <p>Task</p>
            <input
              value={task}
              onChange={(e) => setTask(e.target.value)}
              type="text"
              className="w-44 border-b-2 text-white bg-transparent"
            />
          </label>

          <label htmlFor="" className="w-44">
            <p>Day</p>
            <select
              value={day}
              onChange={(e) => setDay(e.target.value)}
              name=""
              id=""
              className="w-44  text-white  bg-transparent "
            >
              <option
                value=""
                disabled={true}
                className="text-black font-normal"
              >
                Select day
              </option>
              <option value="Monday" className="text-black font-normal">
                Monday
              </option>
              <option value="Tuesday" className="text-black font-normal">
                Tuesday
              </option>
              <option value="Wednesday" className="text-black font-normal">
                Wednesday
              </option>
              <option value="Thursday" className="text-black font-normal">
                Thursday
              </option>
              <option value="Friday" className="text-black font-normal">
                Friday
              </option>
              <option value="Saturday" className="text-black font-normal">
                Saturday
              </option>
              <option value="Sunday" className="text-black font-normal">
                Sunday
              </option>
            </select>
          </label>
          <Button type="submit">
            <p>Add ToDo</p>
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Form;
