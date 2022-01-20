import Form from './Form'
const NewMain = (props) => {
	const SaveExpenseDataHandler = (entereExpenseData) => {
		const expenseData = {
			...entereExpenseData,
			id: Math.random().toString(),
		}
		props.onAddExpense(expenseData)
	}
	return (
		<div className='new-expense'>
			<Form onSaveExpenseData={SaveExpenseDataHandler} />
		</div>
	)
}

export default NewMain
