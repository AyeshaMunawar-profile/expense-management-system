import './App.css';
import Header from "./Container/Header/Header";
import ExpenseTracker from "./Container/ExpenseTracker/ExpenseTracker";
import AddExpense from "./Components/AddExpense/AddExpense";
import React, { useEffect, useState } from "react";

function App() {
    const expenses = [
        {
            id: "expense-1",
            date: new Date("2022-11-13T18:07:57.243Z"),
            expenseTitle: "Car Expense",
            amount: 121141.22
        },
        {
            id: "expense-2",
            date: new Date("2021-11-13T18:07:57.243Z"),
            expenseTitle: "University Fee",
            amount: 4431.22
        },
        {
            id: "expense-3",
            date: new Date("2020-04-13T18:07:57.243Z"),
            expenseTitle: "Online course",
            amount: 36342.47
        },
        {
            id: "expense-4",
            date: new Date("2019-04-13T18:07:57.243Z"),
            expenseTitle: "Udemy Fee",
            amount: 253.474
        }
    ]
    const [expensesList, setExpensesList] = useState(expenses)
    const onSaveExpenseHandler = (data) => {
        const { date, expenseTitle, amount } = data;
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
            <Header />
            <ExpenseTracker expenses={expensesList} />
            <AddExpense onSaveExpense={onSaveExpenseHandler} />
        </div>
    );
}

export default App;
