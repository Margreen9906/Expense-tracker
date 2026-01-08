import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import ExpenseItem from './components/ExpenseItem';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';

function createID() {
  if(typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`
}

function App() {

  const [expenses, setExpenses] =  useState([
    {id: createID(), title: "Jacket", amount: 150, category: "Shopping"},
    {id: createID(), title: "Internet", amount: 25, category: "Bills"}

  ])

  function handleAddExpense(data){
    const newExpense = {id: createID(), ...data}
    setExpenses((prevExpenses) => [newExpense, ...prevExpenses])
  }


  return(
    <div className="page">
      <header className="header">
        <h1 className="title">Expense Tracker Application</h1>
        <p className="subtitle">week 1 + week 2 </p>
      </header>

      <Card title={"Add Expense"}>
        <ExpenseForm
        onAddExpense={handleAddExpense}

        ></ExpenseForm>


      </Card>

       
      <Card title={"Expense"}>
         <ExpenseList expenses={expenses} />
      </Card>
    </div>
  )
    

}

export default App
