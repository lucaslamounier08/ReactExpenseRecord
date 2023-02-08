import React from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    { title: "Car Insurance 1", amount: 294.67, date: new Date(2023, 2, 12) },
    { title: "Car Insurance 2", amount: 912.85, date: new Date(2021, 2, 12) },
  ];

  return (
    <div>
      <h2>Learning React</h2>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
