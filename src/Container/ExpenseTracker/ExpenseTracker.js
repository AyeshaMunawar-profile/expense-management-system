import React, { useState } from 'react';
import ExpenseItem from "../../Components/ExpenseItem/ExpenseItem";
import Card from "../Card/Card";
import ExpensesFilter from '../../Components/ExpenseFilter/ExpenseFilter';
import "./ExpenseTracker.css";

function ExpenseTracker(props) {
    const totalExpensesList = props.expenses;
    const [yearSelected, setYearSelected] = useState('all')
    const [currentExpensesList, setCurrentExpensesList] = useState(totalExpensesList)
    const onYearSearchChangeHandler = (year) => {
        let expenses = []
        setYearSelected(year)
        if (year === "all") {
            expenses = totalExpensesList;
        } else {
            expenses = totalExpensesList.filter(expense => expense.date.getFullYear().toString() === year)
        }
        setCurrentExpensesList(expenses);
    }
    return (
        <div id="expense-tracking-area" className="expense-tracker bg-white">
            <h1 className="expense-tracker__heading">Your Expenses</h1>
            <Card className="expense-filter-area">
                <ExpensesFilter onYearSearchChange={onYearSearchChangeHandler} yearSelected={yearSelected} />
            </Card>
            <Card className="expenses-list">
                {currentExpensesList.map(expense => {
                    return <ExpenseItem  {...expense} key={expense.id} />
                })}
            </Card>
        </div>
    );
}

export default ExpenseTracker;
