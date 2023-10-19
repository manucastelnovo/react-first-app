import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

function ExpenseList(props) {
  const [filteredYear, setFilteredYear] = useState("2022");
  const [filterInfoText, setFilterInfoText] = useState("2019, 2021 ^ 2022");

  const filterChangeHandler = (selectedYear) => {
    console.log("selectedYear", selectedYear);
    setFilteredYear(() => selectedYear);
    console.log(() => "filteredYear", filteredYear);
    props.filtereExpenseList(selectedYear);
  };
  return (
    <div>
      <div className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        ></ExpensesFilter>
        <p>{filteredYear}</p>

        {props.expenseList.length === 0 ? (
          <p> No expense found.</p>
        ) : (
          props.expenseList.map((expenses) => (
            <ExpenseItem expense={expenses} key={expenses.id} />
          ))
        )}
      </div>
    </div>
  );
}

export default ExpenseList;
