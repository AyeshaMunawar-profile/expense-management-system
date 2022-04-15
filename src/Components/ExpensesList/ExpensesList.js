import ExpenseItem from "../ExpenseItem/ExpenseItem"
const ExpensesList = ({ expensesList }) => {
	let expensesContent = <h3 className='heading expenses-list__fallback'> No expenses found for this year !</h3>;
	if (expensesList.length > 0) {
		expensesContent = expensesList.map(expense => {
			return <ExpenseItem  {...expense} key={expense.id} />
		})
	}
	return (
		<ul className="expenses-list">
			{expensesContent}
		</ul>
	)
}
export default ExpensesList;
