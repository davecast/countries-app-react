import React from "react";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";

const RegionFilterStyled = styled.select`
  height: 48px;
  padding: 0 1em;
  border: none;
  border-radius: 5px;
  box-shadow: 0 2px 9px 0px rgba(0,0,0,0.05);
  background-color: var(--white);
  color: var(--black);
`;

function RegionFilter() {
  const dispatch = useDispatch();
  const region = useSelector((state) => state.region );

  function handleChange(event) {
    dispatch({
      type: 'SET_REGION',
      payload: event.target.value
    })
  }
  
  return <RegionFilterStyled value={region} onChange={handleChange}>
      <option value="none">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europa</option>
      <option value="Oceania">Oceania</option>
  </RegionFilterStyled>;
}

export default RegionFilter;
