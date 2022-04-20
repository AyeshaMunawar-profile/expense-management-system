import React, {useState} from 'react';
import "./AddExpenseForm.css"
import SecondaryButton from "../../Button/SecondaryButton";

function AddExpenseForm(props) {
    const {onSaveExpense, onCancelEditingExpense} = props;
    const newDate = new Date();
    const today = newDate.toISOString().split('T')[0]
    const [date, setDate] = useState(today);
    const [expenseTitle, setExpenseTitle] = useState("");
    const [amount, setAmount] = useState("0.0")
    const onSubmitForm = (event) => {
        // Default Javascript function to avoid sending any http request from the page on submit
        // and thus reloading the page
        event.preventDefault();
        const newDate = new Date(date)
        const formData = {
            date: newDate,
            expenseTitle,
            amount: +amount
        }
        setExpenseTitle("")
        setAmount("0.00")
        setDate(today)
        onSaveExpense(formData)
        onCancelEditingExpense()
    }

    return (
        <div className="add-expense-form">
            <form onSubmit={onSubmitForm}>
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
                               min={1.00}
                               max={100000000.00}
                               step={0.01}
                               required/>
                    </div>
                    <div className="add-expense__control">
                        <SecondaryButton type="reset" text="Cancel" onClickHandler={onCancelEditingExpense}/>
                        <SecondaryButton type="submit" text="Add Expense"/>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AddExpenseForm;
