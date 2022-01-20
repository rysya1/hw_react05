import './App.css'
import { useState } from 'react'
import Main from './components/Main1/Main'
import NewMain from './components/NewMain1/NewMain'
function App() {
	const [expenses, setExpenses] = useState([])
	const addExpenseHandler = (expense) => {
		setExpenses((PrevExpense) => {
			return [expense, ...PrevExpense]
		})
		console.log(expenses);
	}
	return (
		<div className='App'>
			<NewMain onAddExpense={addExpenseHandler} />
			<Main data={expenses} />
		</div>
	)
}

export default App
