import "./App.css";
import React, { useState } from "react";
import Card from "./components/UI/card";
import ExpenseList from "./components/Expenses/ExpenseList";
import NewExpense from "./components/NewExpense/NewExpense";

const dummyExpenses = [
  {
    id: "e1",
    title: "Oxygen Sensor",
    amount: 900.0,
    date: new Date(2022, 0, 15),
  },
  {
    id: "e2",
    title: "Oxycan",
    amount: 80,
    date: new Date(2022, 0, 15),
  },
  {
    id: "e3",
    title: "Solenoid Pipe",
    amount: 100,
    date: new Date(2022, 0, 15),
  },
  {
    id: "e4",
    title: "Pipe",
    amount: 50,
    date: new Date(2022, 0, 30),
  },
];

function App() {
  const [expenses, setExpenses] = useState(dummyExpenses);

  function addExpenseHandler(expense) {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }

  return (
    <Card className="App-header">
      <h2 className="App-title">Muhammad Reza Firmansyah</h2>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <ExpenseList item={expenses}></ExpenseList>
    </Card>
  );
}

export default App;
