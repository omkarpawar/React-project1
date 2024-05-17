import "./ExpenseItem.css"
function ExpenseItem(){
  const expenseDate = new Date(2023,7,25).toISOString();
  const expenseLocation="Banglore";
  const expenseDescription ="Insurance";
  const exprensePrice="50"
  return(
    <>
    <div className="expense-item">{expenseDate}</div>
    <div className="expense-item__location">{expenseLocation}</div>
    <div>
      <h2 className="expense-item__description">{expenseDescription}</h2>
      <div className="expense-item__price">${exprensePrice}</div>
    </div>
    
    </>
    
      
    
    
  );
};

export default ExpenseItem;