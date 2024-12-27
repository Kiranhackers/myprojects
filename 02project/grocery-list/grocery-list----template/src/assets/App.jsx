import { useState } from 'react';
import './App.css'
function App(){
  const[statement,setStatement]=useState("")
  const[amount,setAmount]=useState("")
  const[statementType,setStatementType]=useState("income")
  return(
    <main>
      <div>
        <h1 cclassName='total-text'>0</h1>
        <div className="input-container">
          <input typpe="text" placeholder="Income or expense"/>
          <input type="number"/>
          <select>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          <button>+</button>
        </div>
        <div>
          <div className="card">
            <div className="card-info">
              <h4>salary</h4>
              <p>Jly 27th, 2024</p>
            </div>
            <p className="amount-text success">+ ₹5000</p>
          </div>
        </div>
      </div>
    </main>
  )
}
export default App;