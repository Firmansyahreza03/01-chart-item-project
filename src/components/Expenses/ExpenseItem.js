import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import React, { useState } from "react";

function ExpenseItem(props) {
  // buat re-evaluasi syntax react
  // const [title, setTitle] = useState(props.title);

  // function clickHandler() {
  //   setTitle("Updated");
  // }

  // function clickUndo() {
  //   setTitle(props.title);
  // }

  return (
    // ini buat nampilin daftar
    <div className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        {/* <h2>{title}</h2> */}
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount} ribu</div>
        {/* <button onClick={clickHandler}>Click here!</button>
        <button onClick={clickUndo}>Undo!</button> */}
      </div>
    </div>
  );
}

export default ExpenseItem;
