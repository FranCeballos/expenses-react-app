import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onAddExpenseData }) => {
  const [formVisibility, setFormVisibility] = useState(false);

  const saveExpenseDataHandler = (expense) => {
    onAddExpenseData(expense);
  };

  const showForm = () => {
    setFormVisibility(true);
  };

  const hideForm = () => {
    setFormVisibility(false);
  };

  return (
    <div className="new-expense">
      {formVisibility ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          closeClickHandler={hideForm}
        />
      ) : (
        <button onClick={showForm}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
