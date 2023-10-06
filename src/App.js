import ExpenseItem from "./components/ExpenseItem";

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
      <h2>Let's get started!</h2>
      <ExpenseItem expense={expense[0]}></ExpenseItem>
      <ExpenseItem expense={expense[1]}></ExpenseItem>
      <ExpenseItem expense={expense[2]}></ExpenseItem>
    </div>
  );
}

export default App;
