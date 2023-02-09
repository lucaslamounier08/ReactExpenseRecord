import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2023, 2, 12),
    id: Math.random().toString(),
  },
  {
    title: "Dog pet care",
    amount: 912.85,
    date: new Date(2023, 2, 15),
    id: Math.random().toString(),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <h2>Learning React</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
