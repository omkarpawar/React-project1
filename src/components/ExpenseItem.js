import "./ExpenseItem.css";
import ExpenseItemDate from "./ExpenseItemDate";


function ExpenseItem(props){
  
  return(
    <>
    <div className="expense-item">
      <ExpenseItemDate calenderDate={props.date}></ExpenseItemDate>
    </div>
    <div>
      <h2 className="expense-item__description">{props.title}</h2>
      <div className="expense-item__price">${props.price}</div>
    </div>    
    </>
  );
};
export default ExpenseItem;