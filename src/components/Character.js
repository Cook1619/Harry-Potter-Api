import React from "react";
import styled from "styled-components";

const Character = ({ details }) => {
  return (
    <CharacterCard>
      <img src={details.image} alt="Self Portrait" />
      <section>
        <p>Name: {details.name}</p>
        <p>House: {details.house}</p>
        <p>Wand: {details.wand.wood}</p>
      </section>
    </CharacterCard>
  );
};

export default Character;

const CharacterCard = styled.div`
  width: 320px;
  padding: 20px;
  border: 1px solid #c9c9c9;
  display: flex;
  img {
    border-radius: 25px 25px;
    width: 120px;
    height: 160px;
  }
`;
