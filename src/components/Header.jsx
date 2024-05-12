import Button from "./Button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex flex-col justify-center items-center">
      <div className=" text-white flex justify-center text-5xl font-bold text-center my-5">
        <h1 className="hover:text-indigo-700">
          <Link to="/">ToDo App</Link>
        </h1>
      </div>
      <div className="flex gap-2 justify-center">
        <button className="bg-lime-600 hover:bg-teal-800 p-2 rounded-xl">
          <Link to="/login">Sign in</Link>
        </button>
        <button className="bg-green-600 hover:bg-teal-800 p-2 rounded-xl">
          <Link to="/register">Sign up</Link>
        </button>
      </div>
    </header>
  );
};

export default Header;
