import React, { useEffect, useState } from 'react';
import "./ExpenseFilter.css";

const ExpensesFilter = (props) => {
	const { onYearSearchChange, yearSelected } = props
	const onYearSelected = (event) => {
		onYearSearchChange(event.target.value)
	}

	return (
		<div className='expenses-filter'>
			<div className='expenses-filter__control'>
				<label><h3 className="heading">Filter expenses by year</h3></label>
				<select onChange={onYearSelected} value={yearSelected}>
					<option value='all'>All Years</option>
					<option value='2022'>2022</option>
					<option value='2021'>2021</option>
					<option value='2020'>2020</option>
					<option value='2019'>2019</option>
				</select>
			</div>
		</div>
	);
};

export default ExpensesFilter;
