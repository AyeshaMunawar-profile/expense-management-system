import ExpenseItem from "../ExpenseItem/ExpenseItem"
const ExpensesList = ({ totalExpensesList, year }) => {
	const filteredExpenses = year === "all" ? totalExpensesList : totalExpensesList.filter(expense => expense.date.getFullYear().toString() === year)
	if (filteredExpenses.length > 0) {
		return filteredExpenses.map(expense => {
			return <ExpenseItem  {...expense} key={expense.id} />
		})
	} else {
		return <h3 className='heading'> No expenses found for this year !</h3>
	}
}
export default ExpensesList;
