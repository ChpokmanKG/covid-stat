import API from '../API';

const GET_COUNTRY_DATA_START = 'GET_COUNTRY_DATA_START';
const GET_COUNTRY_DATA_SUCCESS = 'GET_COUNTRY_DATA_SUCCESS';
const GET_COUNTRY_DATA_FAIL = 'GET_COUNTRY_DATA_FAIL';

const getCountryDataStart = () => ({
  type: GET_COUNTRY_DATA_START,
})

const getCountryDataSuccess = (data) => ({
  type: GET_COUNTRY_DATA_SUCCESS,
  payload: data
})

const getCountryDataFail = () => ({
  type: GET_COUNTRY_DATA_FAIL
})

const getCountryDataThunk = (country) => dispatch => {
  dispatch(getCountryDataStart())
  API.getOneCountryData(country)
    .then(res => dispatch(getCountryDataSuccess(res.data)))
    .catch(() => dispatch(getCountryDataFail()));
}

export default {
  getCountryDataThunk,
  GET_COUNTRY_DATA_START,
  GET_COUNTRY_DATA_SUCCESS,
  GET_COUNTRY_DATA_FAIL
}
