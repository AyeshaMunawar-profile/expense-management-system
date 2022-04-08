import React from 'react';
import "./ExpenseItem.css"

function ExpenseItem(props) {
    const date = new Date(2021, 2, 1);
    const expenseTitle = "Car Expense";
    const amount = 124.352;
    return (
        <div className="expense-item">
            <div className="expense-date">
                <h2 className="date-text">{date.toISOString()}</h2>
            </div>
            <div className="expense-item__description">
                <h2 className="expense-item__title">{expenseTitle}</h2>
                <h3 className="paragraph expense-item__price">{`$ ${amount}`}</h3>
            </div>
        </div>
    );
}

export default ExpenseItem;
