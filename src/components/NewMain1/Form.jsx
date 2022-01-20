import { useState } from 'react'
import './Form.css'
function Form(props) {
	const [title, setTitle] = useState('')
	const [date, setDate] = useState('')

	const titleChangeHandler = (event) => {
		setTitle(event.target.value)
	}

	const dateChangeHandler = (event) => {
		setDate(event.target.value)
	}

	const submitHandler = (event) => {
		event.preventDefault()
		const expenseData = {
			title,
			date: new Date(date)
		}
		props.onSaveExpenseData(expenseData)
	}

	return (
		<form onSubmit={submitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<div>
						<img src="https://cdn-icons.flaticon.com/png/512/2098/premium/2098276.png?token=exp=1642619120~hmac=71c5abaa546d422659efd67e88bd049a" alt="" />

					</div>
					<textarea
						placeholder='Напишите текст'
						name='title'
						type='text'
						onChange={titleChangeHandler}
						value={title}
						
					/>
				</div>
				<div className='new-expense__control'>
					<div>
						<img src="https://cdn-icons.flaticon.com/png/128/2940/premium/2940648.png?token=exp=1642619398~hmac=83a37ebc8ac5bf0f6260975680616d4a" alt="" />

					</div>
					<input
						name='date '
						type='date'
						min='2022-01-01'
						onChange={dateChangeHandler}
						value={date}
						
					/>
				</div>

			<div className='new-expense__actions'>
				<button type='submit'>Add Expense</button>
			</div>
			</div>
		</form>
	)
}
export default Form
