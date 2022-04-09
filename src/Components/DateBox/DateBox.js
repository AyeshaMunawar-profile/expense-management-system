import React from 'react';
import "./DateBox.css"
function DateBox({date}) {
    const day = date.getDay().toLocaleString('en-US', {day: "2-digit"});
    const month = date.toLocaleString('en-US', {month: 'short'});
    const year = date.getFullYear();
    return (
        <div className="expense-date">
            <h1 className="date-text paragraph heading">{day}</h1>
            <h3 className="date-text paragraph heading">{month}</h3>
            <h3 className="date-text paragraph heading">{year}</h3>
        </div>
    );
}

export default DateBox;
