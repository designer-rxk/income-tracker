import React, { useState, useEffect } from 'react';
import './App.css'
import Header from './Components/Header';
import IncomeForm from './Components/IncomeForm';
import IncomeList from './Components/IncomeList';

function App() {
	const [income, setIncome] = useState([]);
	const [totalIncome, setTotalIncome] = useState(0);

	useEffect(() => {
	const getLocalIncome = () => {
	  if(localStorage.getItem("income") === null) {
		localStorage.setItem("income", JSON.stringify([]));
	  } else {
		let incomeLocal = JSON.parse(localStorage.getItem("income"))
		setIncome(incomeLocal);
	  }
	}
	getLocalIncome();
	}, []);
	const saveLocalIncome = () => {
	localStorage.setItem("income", JSON.stringify(income))
	};
	useEffect(() => {
		let temp = 0;
		for(let i = 0; i < income.length; i++) {
			temp += parseFloat(income[i].price);
		}
		setTotalIncome(temp);
		saveLocalIncome();
	}, [income]);

	return (
		<div className="App">
			<Header totalIncome={totalIncome} />
			<IncomeForm income={income} setIncome={setIncome} />
			<IncomeList income={income} setIncome={setIncome} />
		</div>
	);
}
export default App;