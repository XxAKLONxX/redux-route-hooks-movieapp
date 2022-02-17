import "./App.css";
import MouvieList from "./Component/MouvieList";
import NavBar from "./Component/NavBar";
import moviesData from "./Data/data";
import { useState } from "react";
import StarRating from "./Component/StarRating";
import Add from "./Component/Add";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home";

function App() {
  const [movie, setmovie] = useState(moviesData);
  const [input, setInput] = useState("");
  const [starSearch, setStarSearch] = useState(0);
  return (
    <div className="App">
      <>
        <NavBar inputSearch={input} setInputSearch={setInput} />
      </>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/Home/MouvieList"
          element={
            <MouvieList
              STE={setStarSearch}
              starSearch={starSearch}
              mouvies={movie}
              inputSearch={input}
              setInputSearch={setInput}
            />
          }
        />

        <Route path={"/Home/Add"} element={<Add />} />
      </Routes>
    </div>
  );
}

export default App;
