import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./assets/js/reducer";

import "./assets/css/App.css";

import Header from "./components/header";
import CountryList from "./components/country-list";
import ActionList from "./components/action-list";

import CountryPage from "./components/country-page";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const initialState = {
  error: "",
  country: [],
  countryList: [],
  countryListByRegion: [],
  countryListByName: [],
  countryListFilter: [],
  region: "none",
  name: "",
};

const store = createStore(reducer, initialState);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route path="/country/:id" component={CountryPage} />
          <Route path="/">
            <ActionList />
            <CountryList />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
