import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const CountryStyled = styled.div`
  width: 264px;
  text-align: left;
  border-radius: 5px;
  background-color: #fff;
  overflow: hidden;
  box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.03);
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

function Country({ flag, name, population, region, capital }) {
  const history = useHistory();

  function handleClick() {
    history.push(`/country/${name}`);
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
