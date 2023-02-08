import React from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    { title: "Car Insurance", amount: 294.67, date: new Date(2023, 2, 12) },
    { title: "Dog pet care", amount: 912.85, date: new Date(2021, 2, 12) },
  ];

  const addExpenseHandler = (expense) => {
    console.log(expense);
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
