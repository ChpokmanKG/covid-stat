import { combineReducers } from 'redux';
import CountriesReducer from "./reducers/CountryReducer";
import CountryStat from "./reducers/CountryStatReducer";

export default combineReducers({
  Countries: CountriesReducer,
  Country: CountryStat,
});
