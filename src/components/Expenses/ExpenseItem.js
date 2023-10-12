import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import React, { useState } from "react";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.expense.title);

  const clickHandler = () => {
    setTitle("new");
    console.log("pepepepepepepe");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate expense={props.expense}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.expense.amount}</div>
        <button onClick={clickHandler}>change title</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
