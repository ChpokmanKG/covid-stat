import {Badge} from "reactstrap";
import React from "react";

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const LittleBody = ({title, value}) => (
  <div className="w-50 d-flex justify-content-between pr-3">
    <span className="stat-card__key">{title}</span>
    <Badge className="d-flex align-items-center stat-card__value">
      {value ? value : 0}
    </Badge>
  </div>
)


const Card = (props) => {

  const date = new Date(props.Date);

  return (
    <div className="w-100 bg-white pt-4 pb-4 pl-4 pr-3 rounded d-flex stat-card mb-3">

      <div className="w-50 d-flex justify-content-start align-items-center">
        <p className="mb-0 stat-card__title">{date.getDate()} {month[date.getMonth() + 1]}</p>
      </div>

      <div className="w-50">
        <div className="w-100 d-flex mb-4">
          <LittleBody title={'Active'} value={props.Active}/>
          <LittleBody title={'Confirmed'} value={props.Confirmed}/>
        </div>

        <div className="w-100 d-flex">
          <LittleBody title={'Deaths'} value={props.Deaths}/>
          <LittleBody title={'Recovered'} value={props.Recovered}/>
        </div>

      </div>

    </div>
  )
};

export default Card;
