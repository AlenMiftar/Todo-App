import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Card from "./Card";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // we need to check the input data against our database
  // to see if we can find a user with matching email and password

  const checkUser = (users) => {
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user.email === email && user.password === password) return user;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // error handling if email and password ...
    if (email === "" || password === "") {
      alert("Fill in your email and password!");
      Login();
    }

    const user = await axios
      .get("http://localhost:6001/users")
      .then((res) => checkUser(res.data, email, password))
      .catch((error) => {
        console.log(error);
      });

    if (!user) {
      alert(
        "Oops could not find user, make sure that email and password is correct!"
      );
      Login();
    } else if (user.email === email && user.password === password) {
      navigate("/");
      alert(`Welcome ${user.username}`);
      // set item in localstorage if login is successful
      // this item will be used for private route, we will check if there
      // is a user id in localstorage or not
      localStorage.setItem("user", JSON.stringify(user.id));
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex flex-col m-auto">
      <Card>
        <form className="flex flex-col justify-center items-center w-full h-52 p-4">
          <label>
            <h1 className=" text-3xl font-extrabold text-center mb-5">
              Sign in
            </h1>
            <input
              className="text-white bg-transparent mt-3 "
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            <input
              className="text-white bg-transparent mt-3"
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button
            className="flex justify-center bg-lime-900 focus:bg-teal-800 hover:bg-green-400 rounded-lg mt-3 w-full p-2"
            type="submit"
            onClick={handleSubmit}
          >
            <p>Log in</p>
          </button>
        </form>
      </Card>
    </div>
  );
};

export default Login;
