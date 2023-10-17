import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

function ExpenseList(props) {
  const [filteredYear, setFilteredYear] = useState("2022");
  const [filterInfoText, setFilterInfoText] = useState("2019, 2021 ^ 2022");

  const filterChangeHandler = (selectedYear) => {
    console.log("Expenses.js");
    setFilteredYear(selectedYear);
    if (selectedYear === "2019") {
      setFilterInfoText("2020,2021 & 2022");
    } else if (selectedYear === "2020") {
      setFilterInfoText("2019,2021 & 2022");
    } else if (selectedYear === "2021") {
      setFilterInfoText("2019, 2020 & 2021");
    } else {
      setFilterInfoText("2019, 2020 & 2021");
    }
  };
  return (
    <div>
      <div className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        ></ExpensesFilter>
        <p>{filterInfoText}</p>
        <ExpenseItem expense={props.expenseList[0]} />
        <ExpenseItem expense={props.expenseList[1]} />
        <ExpenseItem expense={props.expenseList[2]} />
      </div>
    </div>
  );
}

export default ExpenseList;
