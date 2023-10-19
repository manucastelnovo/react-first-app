import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [newExpenseIsShow, setNewExpenseIsShow] = useState(true);
  // const titleChangeHAnder=()
  const showFormNewExpenseHandler = () => {
    setNewExpenseIsShow((prevStatus) => !prevStatus);
  };
  const saveExpenseDateHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      {newExpenseIsShow ? (
        <button onClick={showFormNewExpenseHandler}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDateHandler}
          showFormNewExpenseHandler={showFormNewExpenseHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
