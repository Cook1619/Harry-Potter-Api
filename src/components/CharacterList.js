import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Character from "./Character";

const CharacterList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios("http://hp-api.herokuapp.com/api/characters");
      setData(result.data);
      console.log(data);
    }
    fetchData();
  });
  console.log(data);
  return (
    <CharacterGrid>
      {data.map((character) => (
        <Character details={character} />
      ))}
    </CharacterGrid>
  );
};

export default CharacterList;

const CharacterGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(5, 1fr);
  grid-row-gap: 1rem;
`;
