import Axios from 'axios';

const http = Axios.create({
  baseURL: 'https://api.covid19api.com/'
})

export default {
  getCountriesData: () => http.get('countries'),
  getOneCountryData: (country) => http.get(`total/dayone/country/${country}`)
}
