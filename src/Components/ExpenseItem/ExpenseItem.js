import React from 'react';
import "./ExpenseItem.css"

function ExpenseItem(props) {
    const {date, expenseTitle, amount} = props;
    return (
        <div className="expense-item">
            <div className="expense-date">
                <h2 className="date-text paragraph heading">{date}</h2>
            </div>
            <div className="expense-item__description">
                <h2 className="expense-item__title heading">{expenseTitle}</h2>
                <h3 className="paragraph expense-item__price">{`$ ${amount}`}</h3>
            </div>
        </div>
    );
}

export default ExpenseItem;
