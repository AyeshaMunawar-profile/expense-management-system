import React from 'react';
import "./ExpenseItem.css"
import DateBox from "../DateBox/DateBox";
import Card from "../../Container/Card/Card";

function ExpenseItem(props) {
    const {date, expenseTitle, amount} = props;

    return (
        <Card className="expense-item">
            <DateBox date={date}/>
            <div className="expense-item__description">
                <div className="expense-item__title"><h3 className="heading">{expenseTitle}</h3></div>
                <div className="paragraph expense-item__price"><h3>{`$ ${amount.toLocaleString()}`}</h3></div>
            </div>
        </Card>
    );
}

export default ExpenseItem;
