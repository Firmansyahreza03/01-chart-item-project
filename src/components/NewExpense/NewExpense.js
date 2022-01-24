import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

// ini buat naikin data ke app.js
function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  function saveExpenseFormHandler(enteredExpenseForm) {
    const expenseData = {
      ...enteredExpenseForm,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  }

  function startEditingHandler() {
    setIsEditing(true);
  }

  function stopEditingHandler() {
    setIsEditing(false);
  }

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Tambah Tagihan Baru</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseForm={saveExpenseFormHandler}
          onCancel={stopEditingHandler}
        ></ExpenseForm>
      )}
    </div>
  );
}

export default NewExpense;
