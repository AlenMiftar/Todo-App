import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
