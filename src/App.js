import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Character from "./Character";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios("http://hp-api.herokuapp.com/api/characters");
      setData(result.data);
    }
    fetchData();
  });
  return (
    <div className="App">
      <h1>Test</h1>
      {data.map((character) => (
        <Character details={character} />
      ))}
    </div>
  );
}

export default App;
