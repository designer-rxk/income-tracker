import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrashCan} from '@fortawesome/free-solid-svg-icons';

function IncomeItem({income, index, removeIncome}) {
  let date = new Date(income.date);
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  const removeHandle = i => {
    removeIncome(i);
  }
  return (
    <div className="income-item">
      <button className="remove-item" onClick={() => removeHandle(index)}><FontAwesomeIcon className={"icon"} icon={faTrashCan}/></button>
      <div className="desc">{income.desc}</div>
      <div className="price">€{income.price}</div>
      <div className="date">{day + "." + month + "." + year}</div>
    </div>
  );
}
export default IncomeItem;