import React, { useState } from 'react';
import ExpenseItem from "../../Components/ExpenseItem/ExpenseItem";
import Card from "../Card/Card";
import ExpensesFilter from '../../Components/ExpenseFilter/ExpenseFilter';
import "./ExpenseTracker.css";

function ExpenseTracker(props) {
    const totalExpensesList = props.expenses;
    const [yearSelected, setYearSelected] = useState('all');
    let filteredExpenses = totalExpensesList;
    const onYearSearchChangeHandler = (year) => {
        setYearSelected(year)
    }
    const getSearchResult = () => {
        filteredExpenses = yearSelected === "all" ? totalExpensesList : totalExpensesList.filter(expense => expense.date.getFullYear().toString() === yearSelected)
        if (filteredExpenses.length > 0) {
            return filteredExpenses.map(expense => {
                return <ExpenseItem  {...expense} key={expense.id} />
            })
        } else {
            return <h3 className='heading'> No expenses found for this year !</h3>
        }

    }

    return (
        <div id="expense-tracking-area" className="expense-tracker bg-white">
            <h1 className="expense-tracker__heading">Your Expenses</h1>
            <Card className="expense-filter-area">
                <ExpensesFilter onYearSearchChange={onYearSearchChangeHandler} yearSelected={yearSelected} />
            </Card>
            <Card className="expenses-list">
                {getSearchResult()}
            </Card>
        </div>
    );
}

export default ExpenseTracker;
