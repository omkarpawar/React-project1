import "./ExpenseItem.css"
function ExpenseItem(props){
  return(
    <>
    <div className="expense-item">{props.date.toISOString()}</div>
    <div className="expense-item__location">{props.location}</div>
    <div>
      <h2 className="expense-item__description">{props.title}</h2>
      <div className="expense-item__price">${props.price}</div>
    </div>    
    </>
  );
};
export default ExpenseItem;