import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const CounttyDetailStyled = styled.article`
  display: grid;
  figure {
    margin: 0 0 3rem;
    font-size: 0;
    width: 100%;
    img {
      width: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
  .title {
    margin: 0 0 2rem;
    font-size: 1.4em;
  }
  .subtitle {
    font-weight: 600;
    margin: 0 0 1rem;
    font-size: 1rem;
    width: 100%;
  }
  p {
    font-size: 0.8rem;
    margin: 0 0 1rem;
    span {
      font-weight: 600;
    }
  }
  .details {
    display: grid;
    grid-row-gap: 2.5rem;
    margin-bottom: 2rem;
    .detail__left {
    }
    .detail__right {
    }
  }
  .borders {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    span {
      margin-right: 10px;
      margin-bottom: 10px;
      text-decoration: none;
      background-color: var(--white);
      color: var(--black);
      box-shadow: 0 0px 7px rgba(0, 0, 0, 0.2);
      border: none;
      font-size: 0.7rem;
      padding: 0.5rem 2rem;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      border-radius: 3px;
      outline: none;
    }
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 120px;
    align-items: center;
    .details {
      grid-template-columns: 1fr 1fr;
    }
    figure {
      margin: 0;
    }
    .borders {
      align-items: flex-start;
    }
    .subtitle {
      width: auto;
      margin-bottom:0;
      margin-right: 20px;
      line-height: 31px;
    }
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
  currencies = [],
  languages = [],
  borders = [],
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
      <div className="content">
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
        {
          borders.length > 0 && <div className="borders">
            <h3 class="subtitle">Border Countries:</h3>
            {borders.map((border) => (
              <span to="/" key={border}>
                {border}
              </span>
            ))}
          </div>
        }
        
      </div>
    </CounttyDetailStyled>
  );
}

export default CountryDetail;
