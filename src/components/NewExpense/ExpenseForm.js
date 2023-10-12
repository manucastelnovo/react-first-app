import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("Title");
  const [enteredAmount, setEnteredAmount] = useState("Title");
  const [enteredDate, setEnteredDate] = useState("Title");

  const [userInput, setUserInput] = useState({
    enteredAmount: "default",
    enteredDate: "2020-10-05",
    enteredTitle: "default",
  });

  const titleChangeHAnder = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredTitle: event.target.value,
      };
    });
  };

  const inputChangeHandler = (identifier, value) => {
    if (identifier === "title") {
      setEnteredTitle(value);
    } else if (identifier === "date") {
      setEnteredDate(value);
    } else if (identifier === "amount") {
      setEnteredAmount(value);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseDate = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    console.log(expenseDate);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>{enteredTitle}</label>
          <input
            type="text"
            onChange={(event) => {
              inputChangeHandler("title", event.target.value);
            }}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={(event) => {
              inputChangeHandler("amount", event.target.value);
            }}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={(event) => {
              inputChangeHandler("date", event.target.value);
            }}
            value={enteredDate}
          />
        </div>
        <div className="new-expense__actions">
          <button> Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
