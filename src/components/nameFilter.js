import React from "react";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";

const NameFilterStyled = styled.div``;

function NameFilter() {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.name );

  function handleChange(event) {
    dispatch({
      type: 'SET_NAME',
      payload: event.target.value
    })
  }

  return <NameFilterStyled>
    <input type="text" value={name} onChange={handleChange} />
  </NameFilterStyled>;
}

export default NameFilter;
