import React, {useState} from 'react';
import AddExpenseForm from "./AddExpenseForm/AddExpenseForm";
import "./AddExpense.css"
import SecondaryButton from "../Button/SecondaryButton";

function AddExpense(props) {
    const {onSaveExpense} = props
    const [isAddExpenseVisible, setIsAddExpenseVisible] = useState(false)
    const addNewExpenseClicked = () => {
        setIsAddExpenseVisible(true)
    }
    const onCancelEditingExpense = () => {
        setIsAddExpenseVisible(false)
    }
    const getAddExpenseContent = () => {
        return isAddExpenseVisible ?
            <AddExpenseForm onSaveExpense={onSaveExpense} onCancelEditingExpense={onCancelEditingExpense}/> :
            <SecondaryButton type="button" text="Add a new Expense" onClickHandler={addNewExpenseClicked}/>
    }
    return (
        <div className="add-expense-area">
            <div className={`add-expense ${isAddExpenseVisible ? 'column-align-start' : 'column-align-center'}`}>
                {getAddExpenseContent()}
            </div>
        </div>
    )
}

export default AddExpense;
