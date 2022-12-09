import React, { useState } from "react";
import styled from "styled-components";

const Button = () => {
  const [isClick, setIsClick] = useState(false);
  return (
    <StyledButton
      isClick={isClick}
      onClick={() => setIsClick(!isClick)}
    ></StyledButton>
  );
};

const StyledButton = styled.button`
  border: blue;
  background-color: ${(props) => (props.isClick ? "blue" : "red")};
  border-radius: 0.5rem;
  min-width: 4rem;
  min-height: 2rem;
`;

export default Button;
