import React from "react";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";

const NameFilterStyled = styled.label`
  display: grid;
  grid-template: 1fr / 80px 1fr;
  color: var(--grey-dark);
  background-color: #fff;
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  position: relative;
  .clean {
    position: absolute;
    font-size: 18px;
    right: 15px;
    top: 10px;
    cursor: pointer;
    :hover {
      color: var(--black);
    }
  }
  input {
    -webkit-appearance: none;
    appearance: none;
    border: none;
    font-size: 1em;
    height: 48px;
    color: var(--grey-dark);
    padding-right: 40px;
    box-sizing: border-box;
    ::placeholder {
      opacity: 1;
      color: var(--grey-placeholder);
    }
    :focus {
      border: none;
      outline: none;
    }
  }
  i {
    color: var(--grey-placeholder);
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

function NameFilter() {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.name);

  function handleChange(event) {
    dispatch({
      type: "SET_NAME",
      payload: event.target.value,
    });
  }
  function cleanInput(event) {
    dispatch({
      type: "SET_NAME",
      payload: "",
    });
  }

  return (
    <NameFilterStyled>
      <i className="fp-search"></i>
      <input
        name="search"
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Search for a country..."
      />
      {name.length > 0 && (
        <span onClick={cleanInput} className="clean">
          x
        </span>
      )}
    </NameFilterStyled>
  );
}

export default NameFilter;
