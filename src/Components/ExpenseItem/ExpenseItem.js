import React from 'react';
import "./ExpenseItem.css"

function ExpenseItem(props) {
    return (
        <div className="expense-item">
            <div className="expense-date">
                <h2 className="date-text">March 28th 2020</h2>
            </div>
            <div className="expense-item__description">
                <h2 className="expense-item__title">Car Expense</h2>
                <h3 className="paragraph expense-item__price">$232.36</h3>
            </div>
        </div>
    );
}

export default ExpenseItem;
