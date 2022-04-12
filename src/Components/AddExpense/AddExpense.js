import React from 'react';
import Card from "../../Container/Card/Card";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import "./AddExpense.css"

function AddExpense(props) {
    return (
        <Card className="add-expense-area">
            <div className="add-expense">
                <ExpenseForm/>
            </div>
        </Card>

    );
}

export default AddExpense;
