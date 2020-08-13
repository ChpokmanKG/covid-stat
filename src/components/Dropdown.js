import React, {useEffect,useState} from 'react';
import {useDispatch,useSelector} from "react-redux";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import CountryActions from '../actions';

export default function Dropdown () {

  const defaultCountry = localStorage.getItem('default-country') ? localStorage.getItem('default-country') : "kyrgyzstan";

  const countries = useSelector(store => store.Countries);
  const [country,setCountry] = useState(defaultCountry);
  const dispatch = useDispatch();

  const fetchCountries = () =>
    dispatch(CountryActions.Country.getCountryDataThunk(defaultCountry.toLowerCase().split(' ').join('-')))

  useEffect(() => {
    dispatch(CountryActions.Countries.getCountriesThunk());
  },[]);

  useEffect(() => {
    fetchCountries()
  },[defaultCountry])

  const changeCountry = (chooseCountry) => {
    localStorage.setItem('default-country',chooseCountry);
    setCountry(chooseCountry)
  }

  return (
    <UncontrolledDropdown className="w-100 dropdown-country">
      <DropdownToggle
        caret
        color="light"
        title={country}
        className="w-100 overflow-hidden text-capitalize bg-white pl-4 pr-4 d-flex justify-content-between align-items-center dropdown-country__toggle">
        {country}
      </DropdownToggle>
      <DropdownMenu className="w-100 mt-2 dropdown-country__body">
        {countries.loadingStatus === 'start' && <DropdownItem>Loading</DropdownItem>}
        {countries.loadingStatus === 'fail' &&
          <DropdownItem onClick={() => window.location.reload(true)}>
            Try later
          </DropdownItem>
        }
        {countries.loadingStatus === 'success' && countries.countries.map((item) => (
          <DropdownItem
            title={item.Country}
            onClick={() => changeCountry(item.Country)}
            key={item.Country}>
            {item.Country}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </UncontrolledDropdown>
  );
}
