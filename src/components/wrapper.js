import React from "react";
import styled from "styled-components";

const WrapperStyled = styled.div`
  padding: 0 1.5em;
`;

function Wrapper({ children }) {
  return <WrapperStyled>{children}</WrapperStyled>;
}

export default Wrapper;
