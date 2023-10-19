import React, { useState } from "react";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import ExpenseList from "./components/Expenses/ExpenseList";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 245.25,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e2",
    title: "Bus ",
    amount: 245.25,
    date: new Date(2022, 3, 23),
  },
  {
    id: "e3",
    title: "Train",
    amount: 245.25,
    date: new Date(2019, 9, 8),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const filtereExpenseList = (year) => {
    setExpenses(() => {
      const filteredList = DUMMY_EXPENSES.filter(
        (expense) => expense.date.getFullYear().toString() == year
      );
      return filteredList;
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseList
        expenseList={expenses}
        filtereExpenseList={filtereExpenseList}
      />
    </div>
  );
}

export default App;
