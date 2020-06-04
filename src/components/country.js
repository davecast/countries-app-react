import React from "react";
import styled from "styled-components";

const CountryStyled = styled.div`
  width: 264px;
  text-align: left;
  border-radius: 5px;
  background-color: #fff;
  overflow: hidden;
  box-shadow: 0 0 7px 2px rgba(0,0,0,0.03);
  h2 {
    margin: 0 0 1rem;
    font-size: 18px;
  }
  p {
    font-size: .9em;
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
  return (
    <CountryStyled>
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
