import { useState } from "react";
import Card from "./Card";
import Button from "./Button";

const Form = () => {
  return (
    <Card>
      <form className=" ">
        <div className="flex flex-col  items-center ">
          <h1 className="text-3xl mb-4 font-semibold">Add a new ToDo</h1>
          <label htmlFor="title">
            <p>Title</p>
            <input
              type="text"
              className="w-44 border-b-2 text-white bg-transparent"
            />
          </label>

          <label htmlFor="task">
            <p>Task</p>
            <input
              type="text"
              className="w-44 border-b-2 text-white bg-transparent"
            />
          </label>

          <label htmlFor="" className="w-44">
            <p>Day</p>
            <select name="" id="" className="w-44  text-white  bg-transparent ">
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
