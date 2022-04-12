import React from 'react';
import "./ExpenseTracker.css"
import ExpenseItem from "../../Components/ExpenseItem/ExpenseItem";
import Card from "../Card/Card";

function ExpenseTracker(props) {
    const expensesList = props.expenses;
    let expenseListComponent = []
    const getExpenseListComponent = () => {
        expensesList.forEach(expense => {
            expenseListComponent.push(<ExpenseItem {...expense} key={expense.id}/>)
        })
        return expenseListComponent;
    }
    return (
        <div id="expense-tracking-area" className="expense-tracker bg-white">
            <h1 className="expense-tracker__heading">Your Expenses</h1>
            <Card className={"expenses-list"}>
                {getExpenseListComponent()}
            </Card>
        </div>
    );
}

export default ExpenseTracker;
