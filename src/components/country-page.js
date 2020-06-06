import React, { useEffect } from "react";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";

import CountryDetail from "./country-detail";
import Loading from "./loading";
import Wrapper from "./wrapper";

const CountryPageStyled = styled.div`
  .row {
    padding: 1.2em 0em;
    max-width: 500px;
    margin: 0 auto;
  }
  .back {
    background-color: var(--white);
    color: var(--black);
    box-shadow: 0 2px 9px 0px rgba(0,0,0,0.25);
    border: none;
    padding: 0.7em 2em;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    margin-bottom: 5em;
    cursor: pointer;
    outline: none;
    transition: transform .3s ease-in-out, box-shadow .3s ease-in-out ;
    :hover {
      transform: translateY(-3px);
      box-shadow: 0 7px 5px 0px rgba(0,0,0,0.25);
    }
    :focus,
    :active {
      border: none;
      transform: translateY(0px);
      box-shadow: 0 0 5px 0px rgba(0,0,0,0.15);
      transition: transform .1s ease-in-out, box-shadow .1s ease-in-out ;
    }
    i {
      margin-right: 10px;
      font-size: 1.2em;
    }
  }
  @media screen and (min-width: 1024px) {
    .row {
      max-width: 100%;
    }
  }
`;

function CountryPage({ match, history }) {
  const dispatch = useDispatch();
  const country = useSelector((state) => state.country);

  useEffect(() => {
    fetch(
      `https://restcountries.eu/rest/v2/name/${match.params.id.split('-').join(' ')}`
    )
      .then((response) => {
        return response.json();
      })
      .then((country) => {
        dispatch({
          type: "GET_COUNTRY",
          payload: country,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  function handleClick() {
    history.goBack();
    dispatch({
      type: "GET_COUNTRY",
      payload: [],
    });
  }

  return (
    <CountryPageStyled>
      <Wrapper>
        <div className="row">
          <button className="back" to="/" onClick={handleClick}>
            <i className="fp-long-arrow-left"></i>Back
          </button>

          {country.length === 0 ? (
            <Loading />
          ) : (
            <CountryDetail {...country[0]} />
          )}
        </div>
      </Wrapper>
    </CountryPageStyled>
  );
}

export default CountryPage;
