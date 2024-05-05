import { useState } from "react";
import Card from "./Card";
import Button from "./Button";

const Form = () => {
  return (
    <Card>
      <form className="bg-black ">
        <div className="flex flex-col items-center ">
          <h1 className="text-4xl font-semibold p-2">Add a new ToDo</h1>
          <label htmlFor="title">
            <p>Title</p>
            <input
              type="text"
              className="w-44 border-b-2 text-white bg-black"
            />
          </label>

          <label htmlFor="task">
            <p>Task</p>
            <input
              type="text"
              className="w-44 border-b-2 text-white bg-black"
            />
          </label>

          <label htmlFor="" className="w-44">
            <p>Day</p>
            <select name="" id="" className="w-44  text-white bg-black">
              <option value="" disabled={true}>
                Select day
              </option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday<">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
              <option value="Sunday">Sunday</option>
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
