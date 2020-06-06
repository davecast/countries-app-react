import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import Wrapper from "./wrapper";

const HeaderStyled = styled.header`
  color: var(--black);
  background-color: var(--white);
  box-shadow: 0 2px 4px 0px rgba(0,0,0,0.06);
  margin-bottom: 1.5em;
  .row {
    height: 80px;
    display flex;
    justify-content: space-between;
    align-items: center;
  }
  h1 {
    font-size: 0.9em;
    a {
      text-decoration: none;
      color: var(--black);
    }
  }
  .darkmode {
    font-weight: 600;
    p {
      display: flex;
      align-items: center;
      font-size: 14px;
      cursor: pointer;
    }
    .darkmode__icon {
      transform: rotate(-25deg);
      margin-right: 10px;
      width: 15px;
      height: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 3em;
    h1 {
      font-size: 1.5em;
    }
    .darkmode {
      p {
        font-size: 16px;
      }
    }
  }
`;

function Header({ setDarkMode, darkMode }) {
  function handleClick() {
    setDarkMode(!darkMode);
  }
  return (
    <HeaderStyled>
      <Wrapper>
        <div className="row">
          <h1>
            <Link to="/">Where in the world?</Link>
          </h1>
          <div className="darkmode">
            <p onClick={handleClick}>
              <span className="darkmode__icon">
                <i className={ `fp-moon-${ darkMode ? "dark" : "light" }`}></i>
              </span>
              Dark Mode
            </p>
          </div>
        </div>
      </Wrapper>
    </HeaderStyled>
  );
}

export default Header;
