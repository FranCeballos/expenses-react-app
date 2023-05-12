import { useState } from "react";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = ({ expensesData }) => {
  const [filteredYear, setFilteredYear] = useState("2019");
  const saveFilterHandler = (filterSet) => {
    setFilteredYear(filterSet);
  };

  const filteredExpenses = expensesData.filter(
    (expense) => expense.date.getFullYear() === parseFloat(filteredYear)
  );

  if (expensesData)
    return (
      <Card className="expenses">
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesFilter
          onChangeFilter={saveFilterHandler}
          selected={filteredYear}
        />
        <ExpensesList filteredExpenses={filteredExpenses} />
      </Card>
    );
};

export default Expenses;
