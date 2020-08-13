import Card from "./Card";
import React from "react";
import {useSelector} from "react-redux";


const Statistic = () => {

  const countriesData = useSelector(store => store.Country);

  if(countriesData.loadingStatus === 'start') return <p className="mb-0 h3 text-center">Loading</p>
  else if(countriesData.loadingStatus === 'fail') return <p className="mb-0 h3 text-center">Try later</p>
  else if(countriesData.countries.length === 0) return <p className="mb-0 h3 text-center">We don't have an information</p>
  return (
    countriesData.countries.map((item,idx) => (
      <Card {...item} key={idx}/>
    ))
  )
}

export default Statistic;
