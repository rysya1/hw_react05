import Filter from './Filter'
import { useState } from 'react'
import './Main.css'
function Main({ data }) {
	const [filteredYear, setFilteredYear] = useState('2022')

	const filterChangeHandler = (selectYear) => {
		setFilteredYear(selectYear)
	}
	const filteredExpenses = data.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear
	})
	return (
		<div className='key'>
			<Filter
				selected={filteredYear}
				onChangeFilter={filterChangeHandler}
			/>
			<ul className='map'>
				{filteredExpenses.map((el, id) => {
					return (
						<p className='pefiks' key={id}>
							<h3>{el.date.getFullYear()}</h3>
							<h5>{el.title}</h5>
							
						</p>
					)
				})}
			</ul>

			
		</div>
	)
}
export default Main
