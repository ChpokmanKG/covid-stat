import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const RecoverStatistic = () => {

  const [topRecover,setRecover] = useState('');

  const countriesData = useSelector(store => store.Country);

  const max = list => {
    if(list.length <= 0) {
      return 0
    }
    return  list.reduce((a, b) => a.Recovered > b.Recovered ? a : b);
  }

  useEffect(() => {
    if(countriesData.loadingStatus === 'success') {
      setRecover(max(countriesData.countries));
    }
  },[countriesData]);

  return (
    <div className="w-100 p-4 top-wrapper rounded">
      <p className="top-wrapper__title mb-0 text-center text-light">Top recovered cases</p>
      <p className="top-wrapper__cases-count text-light text-center mb-0">
        {topRecover.Recovered ? topRecover.Recovered : 0}
      </p>
      <div className="border-top">
        <p className="mb-0 text-light text-center mt-3 top-wrapper__date">
          {topRecover ? `${new Date(topRecover.Date).getDate()} ${month[new Date(topRecover.Date).getMonth() + 1]}` : "No info"}
        </p>
      </div>
    </div>
  )
}

export default RecoverStatistic;
