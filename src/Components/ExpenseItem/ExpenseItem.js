import React from 'react';
import "./ExpenseItem.css"

function ExpenseItem(props) {
    const {date, expenseTitle, amount} = props;
    const day = date.getDay().toLocaleString();
    const month = date.toLocaleString('default', {month: 'long'});
    const year = date.getFullYear().toString();
    return (
        <div className="expense-item">
            <div className="expense-date">
                <h1 className="date-text paragraph heading">{day}</h1>
                <h3 className="date-text paragraph heading">{month}</h3>
                <h3 className="date-text paragraph heading">{year}</h3>
            </div>
            <div className="expense-item__description">
                <div className="expense-item__title heading"><h3>{expenseTitle}</h3></div>
                <div className="paragraph expense-item__price"><h3>{`$ ${amount.toLocaleString()}`}</h3></div>
            </div>
        </div>
    );
}

export default ExpenseItem;
