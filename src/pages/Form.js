import React from "react"
class Form extends React.Component {
  state = {
    expenses: [{amount:"", type:""}],
    monthlyIncome: "",
  }
handleChange = (e) => {
    console.log('handleChange', e.target.name, e.target.value.toUpperCase());
    if (["amount", "type"].includes(e.target.className) ) {
      let expenses = [...this.state.expenses]
      expenses[e.target.dataset.id][e.target.className] = e.target.value.toUpperCase()
      this.setState({ expenses }, () => console.log(this.state.expenses))
    } else {
      this.setState({ [e.target.name]: e.target.value.toUpperCase() })
    }
  }
addExpense = (e) => {
    this.setState((prevState) => ({
      expenses: [...prevState.expenses, {amount:"", type:""}],
    }));
  }
deleteExpense = (e) => {
  alert("DELETE")

}

handleSubmit = (e) => { e.preventDefault() }
render() {
    let {expenses, monthlyIncome} = this.state
    console.log('rendering with state', this.state);
    return (
      <form onSubmit={this.handleSubmit} >
        <div>
          <label>Income: </label>
          <input
            type="text"
            name="monthlyIncome"
            value={monthlyIncome}
            className="monthlyIncome"
            onChange={this.handleChange}
            />
        </div>
        {
          expenses.map((val, idx)=> {
            let expenseAmount = `expense-${idx}`,
                expenseType = `expense-${idx}`
            return (
              
              <div key={idx}>
                
                <label htmlFor={expenseAmount}>{`expense #${idx + 1}`}</label>
                <input
                  type="text"
                  name={expenseAmount}
                  data-id={idx}
                  id={expenseAmount}
                  value={expenses[idx].name} 
                  className="amount"
                  onChange={this.handleChange}
                />
                <label htmlFor={expenseType}>Type</label>
                <select value={expenses[idx].type} data-id={idx} className="type" name={expenseType} onChange={this.handleChange}>
                  <option value="">Select One</option>
                  <option value="Bills">Bills</option>
                  <option value="Personal">Personal</option>
                  <option value="Emergency">Emergency</option>
                </select><br></br>
                <button onClick={this.addExpense}>Add another expense</button>
                <button onClick={this.deleteExpense}>Delete</button>
                <p></p>
              </div>
            )
          })
        }
        <input type="submit" value="Submit" /> 
        <div>
          <div>Income: {monthlyIncome}</div>
          {
            this.state.expenses.map((expense) => {
              return (
                <div key={`expense-${expense.type}-${expense.amount}`}>{expense.type} amount: {expense.amount}</div>
              )
            })
          }
        </div>
      </form>
    )
  }
}
export default Form;