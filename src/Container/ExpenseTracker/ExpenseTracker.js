import React from 'react';
import "./ExpenseTracker.css"
import ExpenseItem from "../../Components/ExpenseItem/ExpenseItem";

function ExpenseTracker(props) {
    const expensesList = props.expenses;
    let expenseListComponent = []
    const getExpenseListComponent = () => {
        expensesList.forEach(expense => {
            expenseListComponent.push(<ExpenseItem {...expense}/>)
        })
        return expenseListComponent;
    }
    return (
        <div id="expense-tracking-area" className="expense-tracker bg-white">
            <h1 className="expense-tracker__heading">Your Expenses</h1>
            {getExpenseListComponent()}
        </div>
    );
}

export default ExpenseTracker;
