import CountriesAction from "../actions";

const initialState = {
  loadingStatus: "", // start \\ fail \\ success
  countries: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CountriesAction.Country.GET_COUNTRY_DATA_START:
      return {
        ...state,
        loadingStatus: 'start'
      }
    case CountriesAction.Country.GET_COUNTRY_DATA_SUCCESS:
      return {
        ...state,
        countries: action.payload.length ? action.payload.splice(-5) : [],
        loadingStatus: "success"
      }
    case CountriesAction.Country.GET_COUNTRY_DATA_FAIL:
      return {
        ...state,
        loadingStatus: "fail"
      }
    default:
      return state
  }
}
