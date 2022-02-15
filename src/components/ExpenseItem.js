
import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
const [title, setTitle] = useState(props.title);

const clickHandler = () => {
  setTitle('Updated');
  console.log(title);
}

  return (
    <div className="expense-item">
      <ExpenseDate mydate={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">
        <h3>${props.amount}</h3>        
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </div>
  );
}

export default ExpenseItem;
