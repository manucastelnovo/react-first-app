import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

function ExpenseList(props) {
  return (
    <div className="expenses">
      <ExpenseItem expense={props.expenseList[0]} />
      <ExpenseItem expense={props.expenseList[1]} />
      <ExpenseItem expense={props.expenseList[2]} />
    </div>
  );
}

export default ExpenseList;
