import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

import "./App.css";

import CountryList from "./components/country-list";
import RegionFilter from "./components/regionFilter";
import NameFilter from "./components/nameFilter";

const initialState = {
  countryList: [],
  countryListByRegion: [],
  countryListByName: [],
  region: "none",
  name: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_COUNTRY_LIST": {
      return { ...state, countryList: action.payload };
    }
    case "SET_REGION": {
      let countryListByRegion = state.countryList.filter(
        (country) => country.region === action.payload
      );

      return {
        ...state,
        region: action.payload,
        countryListByRegion,
      };
    }
    case "SET_NAME": {
      let countryListByName = state.countryList.filter(
        (country) => country.name.toLowerCase().includes(action.payload.toLowerCase()) 
      );
      return {
        ...state,
        countryListByName,
        name: action.payload
      };
    }
    default: {
      return state;
    }
  }
  return state;
}

const store = createStore(reducer, initialState);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <NameFilter />
        <RegionFilter />
        <CountryList />
      </div>
    </Provider>
  );
}

export default App;
