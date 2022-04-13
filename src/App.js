import './App.css';
import Header from "./Container/Header/Header";
import ExpenseTracker from "./Container/ExpenseTracker/ExpenseTracker";
import AddExpense from "./Components/AddExpense/AddExpense";
import React from "react";

function App() {
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
            expenseTitle: "Insurance Fee",
            amount: 253.474
        }
    ]
    const onSaveExpense = (data) => {
        const {date, expenseTitle, amount} = data;
        console.log("Data received successfully at the app component", data)
    }
    return (
        <div className="App">
            <Header/>
            <ExpenseTracker expenses={expenses}/>
            <AddExpense onSaveExpense={onSaveExpense}/>
        </div>
    );
}

export default App;
