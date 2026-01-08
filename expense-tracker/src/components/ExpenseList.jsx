import ExpenseItem from "./ExpenseItem"
function ExpenseList({ expenses }) {
    return (
        
      
        <ul className="List">

        {expenses.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} />
        ))}
          </ul>


      
    )
}

export default ExpenseList