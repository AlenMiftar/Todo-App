import { useState } from "react";
import axios from "axios";
import Card from "./Card";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const checkEmail = (users) => {
    const user = users.find((user) => user.email === email);
    if (user) return user;
  };

  const handleSubmit = async () => {
    const user = await axios
      .get("http://localhost:6001/users")
      .then((res) => checkEmail(res.data, email));

    if (user) {
      alert("User already exists!");
    } else {
      const user = { username, email, password };
      axios
        .post("http://localhost:6001/users", user)
        .then(alert("User created!"));
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <Card>
        <form className="flex flex-col justify-center items-center w-full h-52 p-8">
          <h1 className="text-2xl font-semibold my-5 w-full">Register User</h1>
          <label>
            <input
              className="bg-transparent  "
              type="text"
              placeholder="Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
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
            <p>Register</p>
          </button>
        </form>
      </Card>
    </div>
  );
};

export default Register;
