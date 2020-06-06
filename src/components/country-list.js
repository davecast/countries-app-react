import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";
import Country from "./country";
import Wrapper from "./wrapper";

const CountryListStyled = styled.div`
  .row {
    display: grid;
    justify-content: center;
    grid-row-gap: 2.3em;
    grid-column-gap: 80px;
    grid-auto-flow: columns;
    grid-template-columns: repeat(auto-fill, 260px);
  }
`;

function CountryList() {
  const dispatch = useDispatch();
  const countryList = useSelector((state) => {
    if (state.region !== "none" && state.name.length === 0) {
      return state.countryListByRegion;
    }
    if (state.name.length > 0) {
      return state.countryListByName;
    }

    return state.countryList;
  });

  //const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        return response.json();
      })
      .then((list) => {
        dispatch({
          type: "SET_COUNTRY_LIST",
          payload: list,
        });
        console.log(list);
        //setCountryList(data);
      })
      .catch(() => {
        console.log("hubo un error, que dolor que dolor que pena");
      });
  }, []);

  return (
    <CountryListStyled>
      <Wrapper>
        <div className="row">
          {countryList.length > 0 ? (
            countryList.map(
              ({ name, population, flag, region, capital, numericCode, alpha2Code }) => {
                return (
                  <Country
                    key={numericCode}
                    flag={flag}
                    name={name}
                    population={population}
                    region={region}
                    capital={capital}
                    alpha2Code={alpha2Code}
                  />
                );
              }
            )
          ) : (
            <p>No encontramos ese pais...</p>
          )}
        </div>
      </Wrapper>
    </CountryListStyled>
  );
}

export default CountryList;
