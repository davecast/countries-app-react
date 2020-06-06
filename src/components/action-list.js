import React from "react";
import styled from "styled-components";

import RegionFilter from "./regionFilter";
import NameFilter from "./nameFilter";
import Wrapper from "./wrapper";

const ActionListStyled = styled.div`
  .row {
    display: grid;
    grid-gap: 2.5em 0;
    margin-bottom: 2.5em;
  }
`;

function ActionList() {
  return (
    <ActionListStyled>
      <Wrapper>
        <div className="row">
          <NameFilter />
          <RegionFilter />
        </div>
      </Wrapper>
    </ActionListStyled>
  );
}

export default ActionList;
