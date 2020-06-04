import React from "react";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";

const RegionFilterStyled = styled.div`

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
  
  return <RegionFilterStyled>
    <select value={region} onChange={handleChange}>
      <option value="none">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europa</option>
      <option value="Oceania">Oceania</option>
    </select>
  </RegionFilterStyled>;
}

export default RegionFilter;
