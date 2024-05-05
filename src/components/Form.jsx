import { useState } from "react";
import Card from "./Card";
import Button from "./Button";

const Form = () => {
  return (
    <Card>
      <form className="">
        <div className="flex flex-col">
          <h1 className="text-4xl">Add a new ToDo</h1>
          <label htmlFor="">
            <p>Title</p>
            <input type="text" />
          </label>

          <label htmlFor="">
            <p>Task</p>
            <input type="text" />
          </label>

          <label htmlFor="">
            <p>Day</p>
            <select name="" id="">
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
