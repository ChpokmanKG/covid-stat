import CountriesAction from '../actions';

const initialState = {
  loadingStatus: "", // start \\ fail \\ success
  countries: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CountriesAction.Countries.GET_COUNTRY_START:
      return {
        ...state,
        loadingStatus: 'start'
      }
    case CountriesAction.Countries.GET_COUNTRY_SUCCESS:
      return {
        ...state,
        countries: action.payload,
        loadingStatus: "success"
      }
    case CountriesAction.Countries.GET_COUNTRY_FAIL:
      return {
        ...state,
        loadingStatus: "fail"
      }
    default:
      return state
  }
}
