import React from 'react';
import "./ExpenseForm.css"

function ExpenseForm(props) {
    const date = new Date();
    const today = date.toISOString().split('T')[0]
    return (
        <div>
            <form>
                <div className="add-expense__controls">
                    <h2 className="add-expense__title heading">
                        Add a new expense
                    </h2>
                    <div className="add-expense__control">
                        <label className="add-expense__label label" htmlFor="input-expense-title">
                            <h4 className="heading"> Expense Name</h4>
                        </label>
                        <input type="text" name="input-expense-title" className="input add-expense__input" required/>
                    </div>
                    <div className="add-expense__control">
                        <label className="add-expense__label label" htmlFor="input-expense-date">
                            <h4 className="heading">Select Date</h4></label>
                        <input type="date" name="input-expense-date" className="input add-expense__input"
                               min={today} defaultValue={today} required/>
                    </div>
                    <div className="add-expense__control">
                        <label className="add-expense__label label"
                               htmlFor="input-expense-amount">
                            <h4 className="heading">Amount</h4></label>
                        <input type="number" name="input-expense-amount" className="input add-expense__input" required/>
                    </div>
                    <div className="add-expense__control">
                        <button type="submit"><h4 className="paragraph">Add Expense</h4></button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ExpenseForm;
