import React from "react";
import styled from "styled-components";

const CounttyDetailStyled = styled.article`
  display: grid;
  grid-gap: 3em 0;
  width: 300px;
  figure {
    margin: 0;
    font-size: 0;
    width: 100%;
    img {
      width: 100%;
      max-height: 235px;
      object-fit: cover;
      object-position: center;
    }
  }
  .title {
    margin: 0 0 1rem;
    font-size: 1.4em;
  }
  .details {
    .detail__left {
    }
    .detail__right {
    }
  }
  .borderCountries {
  }
`;

function CountryDetail({
  name,
  flag,
  nativeName,
  population,
  region,
  subregion,
  capital,
  topLevelDomain,
  currencies,
  languages
}) {
  function concatStr(datos) {
    let strContact = "";
    datos.forEach((element, index) => {
      if (index + 1 !== datos.length) {
        strContact += `${element.name}, `;
      } else {
        strContact += `${element.name}`;
      }
    });
    return strContact;
  }

  return (
    <CounttyDetailStyled>
      <figure>
        <img loading="lazy" src={flag} alt={name} />
      </figure>
      <h2 className="title">{name}</h2>
      <div className="details">
        <div className="details__left">
          <p>
            <span>Native Name:</span> {nativeName}
          </p>
          <p>
            <span>Population:</span> {population}
          </p>
          <p>
            <span>Region:</span> {region}
          </p>
          <p>
            <span>Sub Region:</span> {subregion}
          </p>
          <p>
            <span>Capital:</span> {capital}
          </p>
        </div>
        <div className="details__right">
          <p>
            <span>Top Level Domain:</span> {topLevelDomain}
          </p>
          <p>
            <span>Currencies:</span> {concatStr(currencies)}
          </p>
          <p>
            <span>Langueages:</span> {concatStr(languages)}
          </p>
        </div>
      </div>
      <div className="borderCountries"></div>
    </CounttyDetailStyled>
  );
}

export default CountryDetail;
