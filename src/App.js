import './App.css';
import Header from "./Container/Header/Header";
import Expenses from "./Components/Expenses/Expenses";
import AddExpense from "./Components/AddExpense/AddExpense";
import React, {useState} from "react";

const DUMMY_EXPENSES = [
    {
        id: "expense-1",
        date: new Date("2022-11-13T18:07:57.243Z"),
        expenseTitle: "Car Expense",
        amount: 12
    },
    {
        id: "expense-2",
        date: new Date("2022-11-13T18:07:57.243Z"),
        expenseTitle: "University Fee",
        amount: 44
    },
    {
        id: "expense-3",
        date: new Date("2020-04-13T18:07:57.243Z"),
        expenseTitle: "Online course",
        amount: 36
    },
    {
        id: "expense-4",
        date: new Date("2020-03-13T18:07:57.243Z"),
        expenseTitle: "Udemy Fee",
        amount: 25
    }
]

function App() {

    const [expensesList, setExpensesList] = useState(DUMMY_EXPENSES)
    const onSaveExpenseHandler = (data) => {
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
            <Expenses expenses={expensesList}/>
            <AddExpense onSaveExpense={onSaveExpenseHandler}/>
        </div>
    );
}

export default App;
