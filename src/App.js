import './App.css';
import Header from "./Container/Header/Header";
import ExpenseTracker from "./Container/ExpenseTracker/ExpenseTracker";

function App() {
    return (
        <div className="App">
            <Header/>
            <ExpenseTracker />
        </div>
    );
}

export default App;
