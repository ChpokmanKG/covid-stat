import API from '../API';

const GET_COUNTRY_START = 'GET_COUNTRY_START';
const GET_COUNTRY_SUCCESS = 'GET_COUNTRY_SUCCESS';
const GET_COUNTRY_FAIL = 'GET_COUNTRY_FAIL';

const getCountries = () => ({
  type: GET_COUNTRY_START,
})

const getCountriesSuccess = (data) => ({
  type: GET_COUNTRY_SUCCESS,
  payload: data
})

const getCountriesFail = () => ({
  type: GET_COUNTRY_FAIL,
})

const getCountriesThunk = () => dispatch => {
  dispatch(getCountries());
  API.getCountriesData()
    .then(res => {
      dispatch(getCountriesSuccess(res.data))
    })
    .catch(e => dispatch(getCountriesFail()))
}

export default {
  getCountriesThunk,
  GET_COUNTRY_START,
  GET_COUNTRY_SUCCESS,
  GET_COUNTRY_FAIL
}
