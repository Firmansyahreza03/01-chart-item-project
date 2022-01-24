import React, { useState } from "react";
import "./ExpenseForm.css";

// ini buat bikin daftar tambahan
function ExpenseForm(props) {
  const [originalTitle, setTitle] = useState("");
  const [originalAmount, setAmount] = useState("");
  const [originalDate, setDate] = useState("");
  function titleChangeHandler(event) {
    setTitle(event.target.value);
  }

  function amountChangeHandler(event) {
    setAmount(event.target.value);
  }

  function dateChangeHandler(event) {
    setDate(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    const expenseData = {
      title: originalTitle,
      amount: +originalAmount,
      date: new Date(originalDate),
    };

    props.onSaveExpenseForm(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={originalTitle}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={originalAmount}
            onChange={amountChangeHandler}
            min="1"
            step="1"
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={originalDate}
            min="2022-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__action">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
