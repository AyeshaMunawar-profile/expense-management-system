import './App.css';
import Header from "./Container/Header/Header";
import ExpenseTracker from "./Container/ExpenseTracker/ExpenseTracker";

function App() {
    const expenses = [
        {
            date: "14th March 2022",
            expenseTitle: "Car Expense",
            amount: 121141.22
        },
        {
            date: "12th April 1990",
            expenseTitle: "University Fee",
            amount: 4431.22
        },
        {
            date: "1st July 2021",
            expenseTitle: "Online course",
            amount: 36342.47
        },
        {
            date: "2nd April 2021",
            expenseTitle: "Insurance Fee",
            amount: 253.474
        }
    ]
    return (
        <div className="App">
            <Header/>
            <ExpenseTracker expenses={expenses} />
        </div>
    );
}

export default App;
