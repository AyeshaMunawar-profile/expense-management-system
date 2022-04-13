import React from 'react';
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import "./AddExpense.css"

function AddExpense(props) {
    const {onSaveExpense} = props
    return (
        <div className="add-expense-area">
            <div className="add-expense">
                <ExpenseForm onSaveExpense={onSaveExpense}/>
            </div>
        </div>

    );
}

export default AddExpense;
