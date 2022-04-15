import React, { useState } from 'react';
import Card from "../Card/Card";
import ExpensesFilter from '../../Components/ExpenseFilter/ExpenseFilter';
import ExpensesList from "../../Components/ExpensesList/ExpensesList"
import "./ExpenseTracker.css";

function ExpenseTracker(props) {
    const totalExpensesList = props.expenses;
    const [yearSelected, setYearSelected] = useState('all');
    let filteredExpenses = totalExpensesList;
    const onYearSearchChangeHandler = (year) => {
        setYearSelected(year);
    }

    filteredExpenses = yearSelected === "all" ? totalExpensesList : totalExpensesList.filter(expense => expense.date.getFullYear().toString() === yearSelected)

    return (
        <div id="expense-tracking-area" className="expense-tracker bg-white">
            <h1 className="expense-tracker__heading">Your Expenses</h1>
            <Card className="expense-filter-area">
                <ExpensesFilter onYearSearchChange={onYearSearchChangeHandler} yearSelected={yearSelected} />
            </Card>
            <Card className="expenses-list">
                <ExpensesList expensesList={filteredExpenses} />
            </Card>
        </div>
    );
}

export default ExpenseTracker;
