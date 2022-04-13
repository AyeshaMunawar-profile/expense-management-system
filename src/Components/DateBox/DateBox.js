import React from 'react';
import "./DateBox.css"

function DateBox({date}) {
    const day = date.toLocaleString('en-US', {day: '2-digit'});
    const month = date.toLocaleString('en-US', {month: 'long'});
    const year = date.getFullYear();
    return (
        <div className="expense-date">
            <h1 className="expense-date__day paragraph heading">{day}</h1>
            <h3 className="expense-date__month date-text paragraph heading">{month}</h3>
            <h4 className="expense-date__year date-text paragraph heading">{year}</h4>
        </div>
    );
}

export default DateBox;
