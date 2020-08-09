import React from "react";

const Character = ({ details }) => {
  return (
    <div>
      <img src={details.image} alt="Self Portrait" />
    </div>
  );
};

export default Character;
