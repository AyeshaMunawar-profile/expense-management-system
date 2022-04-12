import React, {useEffect, useState} from 'react';
import "./ExpenseForm.css"

function ExpenseForm(props) {
    const newDate = new Date();
    const today = newDate.toISOString().split('T')[0]
    const [date, setDate] = useState(today);
    const [expenseTitle, setExpenseTitle] = useState("");
    const [amount, setAmount] = useState(0.0)
    const onSubmitForm = () => {
        alert(`Form Values submitted successfully Title: ${expenseTitle} , Date: ${date} , Amount ${amount}`)
    }
    return (
        <div>
            <form>
                <div className="add-expense__controls">
                    <h2 className="add-expense__title heading">
                        Add a new expense
                    </h2>
                    <div className="add-expense__control">
                        <label className="add-expense__label label" htmlFor="Expense Title">
                            <h4 className="heading"> Expense Name</h4>
                        </label>
                        <input value={expenseTitle}
                               onChange={(event) => setExpenseTitle(event.target.value)}
                               type="text"
                               name="Expense Title"
                               className="input add-expense__input"
                               placeholder=" Enter expense Title"
                               required/>
                    </div>
                    <div className="add-expense__control">
                        <label className="add-expense__label label" htmlFor="Expense Date">
                            <h4 className="heading">Select Date</h4></label>
                        <input onChange={(event) => setDate(event.target.value)}
                               value={date}
                               type="date"
                               name="Expense Date"
                               className="input add-expense__input"
                               min={today}
                               placeholder=" Select date"
                               required/>
                    </div>
                    <div className="add-expense__control">
                        <label className="add-expense__label label"
                               htmlFor="Expense Amount">
                            <h4 className="heading">Amount</h4></label>
                        <input onChange={(event) => setAmount(event.target.value)}
                               value={amount}
                               type="number"
                               name="Expense Amount"
                               className="input add-expense__input"
                               placeholder="Enter amount"
                               min={1}
                               max={100000000}
                               required/>
                    </div>
                    <div className="add-expense__control">
                        <button
                            type="submit"
                            onSubmit={onSubmitForm}>
                            <h4 className="paragraph">Add Expense</h4>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ExpenseForm;
