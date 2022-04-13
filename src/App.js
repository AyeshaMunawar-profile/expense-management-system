import './App.css';
import Header from "./Container/Header/Header";
import ExpenseTracker from "./Container/ExpenseTracker/ExpenseTracker";
import AddExpense from "./Components/AddExpense/AddExpense";
import React, {useEffect, useState} from "react";

function App() {
    const [expensesList, setExpensesList] = useState([])
    const expenses = [
        {
            id: "expense-1",
            date: new Date(),
            expenseTitle: "Car Expense",
            amount: 121141.22
        },
        {
            id: "expense-2",
            date: new Date(),
            expenseTitle: "University Fee",
            amount: 4431.22
        },
        {
            id: "expense-3",
            date: new Date(),
            expenseTitle: "Online course",
            amount: 36342.47
        },
        {
            id: "expense-4",
            date: new Date(),
            expenseTitle: "Udemy Fee",
            amount: 253.474
        }
    ]
    // add already existing expenses to the list
    useEffect(() => {
        setExpensesList(expenses)
    }, [])

    const onSaveExpense = (data) => {
        const {date, expenseTitle, amount} = data;
        // add the new expense to the latest list of expenses
        setExpensesList((previousList) => {
            return [
                ...previousList,
                {
                    id: `expense-${previousList.length + 1}`,
                    date, expenseTitle,
                    amount
                }
            ]
        })
        console.log("Data received successfully at the app component", data)
    }
    return (
        <div className="App">
            <Header/>
            <ExpenseTracker expenses={expensesList}/>
            <AddExpense onSaveExpense={onSaveExpense}/>
        </div>
    );
}

export default App;
