import "./ExpenseItem.css";

const months =["january",'February','March','April','May','June','July','August','September','November','December']
function ExpenseItem(props){
  const month = months[props.date.getMonth()];
  const year = props.date.getFullYear();
  const date = props.date.getDate();
  return(
    <>
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{date}</div>
      </div>
    </div>
    <div className="expense-item__location">{props.location}</div>
    <div>
      <h2 className="expense-item__description">{props.title}</h2>
      <div className="expense-item__price">${props.price}</div>
    </div>    
    </>
  );
};
export default ExpenseItem;