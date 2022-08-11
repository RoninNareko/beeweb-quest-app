import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

import "./App.scss";

function App() {
  return (
    <Routes>
      <Route path="/login" index element={<Login />} />
      <Route path="/signup" index element={<Signup />} />
    </Routes>
  );
}

export default App;
