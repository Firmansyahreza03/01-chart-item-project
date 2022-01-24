import React, { useState } from "react";
import Card from "../UI/card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
import "./ExpenseDaftar.css";
import ExpenseChart from "./ExpenseChart";

function ExpenseList(props) {
  const [filteredYear, setFilteredYear] = useState("0");

  function filterChangeHandler(selectedYear) {
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  }

  // buat ngefilter berdasarkan tahun
  const filteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // cek isi dari expense apakah ada isinya atau tidak
  let cekExpenseContent = (
    <p className="expenses-list__fallback">Tidak ada tagihan.</p>
  );
  if (filteredExpenses.length > 0) {
    cekExpenseContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      ></ExpenseItem>
    ));
  }
  return (
    <Card className="expenses">
      <ExpenseChart expenses={filteredExpenses}></ExpenseChart>
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      ></ExpenseFilter>

      {/* buat ngasih tau daftar apa aja yang harus ditampilin*/}
      {cekExpenseContent}
    </Card>
  );
}

export default ExpenseList;
