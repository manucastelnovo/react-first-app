import ExpenseItem from "./components/Expenses/ExpenseItem";
import ExpenseList from "./components/Expenses/ExpenseList";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const expense = [
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
      date: new Date(2021, 3, 23),
    },
    {
      id: "e3",
      title: "Train",
      amount: 245.25,
      date: new Date(2021, 9, 8),
    },
  ];
  return (
    <div>
      <NewExpense />
      <ExpenseList expenseList={expense} />
    </div>
  );
}

export default App;
