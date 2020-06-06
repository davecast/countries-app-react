import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import slugify from "slugify";

const CountryStyled = styled.div`
  text-align: left;
  border-radius: 5px;
  background-color: var(--white);
  overflow: hidden;
  box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.03);
  cursor: pointer;
  box-sizing: border-box;
  border: 0.1px solid transparent;
  transition: all .3s ease-in-out;
  :hover {
    border: 1px solid var(--grey-dark);
    box-shadow: 0 7px 7px 2px rgba(0, 0, 0, 0.1);
    transform: translateY(-5px)
  }
  h2 {
    margin: 0 0 1rem;
    font-size: 1.1em;
  }
  p {
    font-size: 0.9em;
    margin: 0 0 0.5rem;
  }
  img {
    width: 100%;
    height: 160px;
    object-fit: cover;
  }
  .details {
    padding: 1.5em 1.5em 2em;
  }
`;

function Country({ flag, name, population, region, capital, alpha2Code}) {
  const history = useHistory();

  function handleClick() {
    history.push(`/country/${alpha2Code.toLowerCase()}`);
  }
  return (
    <CountryStyled onClick={handleClick}>
      <img loading="lazy" src={flag} alt={name} />
      <div className="details">
        <h2>{name}</h2>
        <p>
          <strong>Population:</strong> {population}
        </p>
        <p>
          <strong>Region:</strong> {region}
        </p>
        <p>
          <strong>Capital:</strong> {capital}
        </p>
      </div>
    </CountryStyled>
  );
}

export default Country;
