import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import CountryDetail from "./country-detail";
import Loading from "./loading";
import Wrapper from "./wrapper";

const CountryPageStyled = styled.div`
  .row {
    padding: 0 0.5em;
  }
`;

function CountryPage({ match }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const country = useSelector((state) => state.country);

  console.log(country.length)
  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/name/${match.params.id}`)
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
    history.push("/");
    dispatch({
      type: "GET_COUNTRY",
      payload: [],
    });
  }

  return (
    <CountryPageStyled>
      <Wrapper>
        <div className="row">
          <button to="/" onClick={handleClick}>
            <i className="fp-long-arrow-left"></i>Back
          </button>

          {country.length === 0 ? (
            <Loading />
          ) : (
            <CountryDetail country={country[0]} />
          )}
        </div>
      </Wrapper>
    </CountryPageStyled>
  );
}

export default CountryPage;
