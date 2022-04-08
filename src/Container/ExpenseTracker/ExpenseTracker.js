import React from 'react';
import "./ExpenseTracker.css"
import ExpenseItem from "../../Components/ExpenseItem/ExpenseItem";
function ExpenseTracker(props) {
    return (
        <div id="expense-tracking-area" className="expense-tracker bg-white">
            <h1>Your Expenses</h1>
            <ExpenseItem />
        </div>
    );
}

export default ExpenseTracker;
