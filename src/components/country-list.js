import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";
import Country from "./country";

const CountryListStyled = styled.div`
  display: grid;
  justify-content: center;
  grid-row-gap: 2.3em;
  padding: 4em 2em;
`;

function CountryList() {
  const dispatch = useDispatch();
  const countryList = useSelector((state) => {
    if (state.region !== 'none') {
      return state.countryListByRegion
    }
    if (state.name !== '') {
      return state.countryListByName
    }

    return state.countryList
  } );

  //const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        return response.json();
      })
      .then((list) => {
        dispatch({
          type: 'SET_COUNTRY_LIST',
          payload: list
        })
        //setCountryList(data);
        console.log(list);
      })
      .catch(() => {
        console.log("hubo un error, que dolor que dolor que pena");
      });
  }, []);

  return (
    <CountryListStyled>

      {
        countryList.map(({ name, population, flag, region, capital, numericCode }) => {
          return (
            <Country
              key={numericCode}
              flag={flag}
              name={name}
              population={population}
              region={region}
              capital={capital}
            />
          )
        })
      }
      
    </CountryListStyled>
  );
}

export default CountryList;
