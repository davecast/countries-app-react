export default function reducer(state, action) {
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
      let list;
      if (state.region !== "none") {
        list = state.countryListByRegion;
      } else {
        list = state.countryList;
      }

      let countryListByName = list.filter((country) =>
        country.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        countryListByName,
        name: action.payload,
      };
    }
    case "SET_ERROR": {
      return { ...state, error: action.payload  };
    }
    case "GET_COUNTRY": {
      return { ...state, country: action.payload };
    }
    case "SET_FILTER": {
      let countryListFilter = state.countryList.filter((country) => {
        let isFilter =
          country.name
            .toLowerCase()
            .includes(
              action.payload.name
                ? action.payload.name.toLowerCase()
                : undefined
            ) || country.region === action.payload.region;
        return isFilter;
      });

      return {
        ...state,
        countryListFilter,
        region: action.payload.region,
        name: action.payload.name,
      };
    }
    default: {
      return state;
    }
  }
  return state;
}
