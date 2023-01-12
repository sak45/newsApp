
import Login from "./Login";
import BtnPage from "./BtnPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import react, { useState } from "react";

function App() {
  const [text, SetText] = useState("");

  const handleChange = (event) => {
    SetText(event.target.value);
    console.log("value is:", event.target.value);
  };

  const handleClick = () => {
    SetText("");
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Login handleChange={handleChange} text={text} />}
        />
        <Route
          path="HomePage"
          element={<HomePage text={text} handleChange={handleChange} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
