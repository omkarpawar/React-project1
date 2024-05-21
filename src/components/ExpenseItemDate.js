
const months =["january",'February','March','April','May','June','July','August','September','October','November','December']


function ExpenseItemDate(props){
  const month = months[props.calenderDate.getMonth()];
  const year = props.calenderDate.getFullYear();
  const date = props.calenderDate.getDate();

  return(
    <div className="expense-item">
        <div className="expense-item__month">{month}</div>
        <div className="expense-item__year">{year}</div>
        <div className="expense-item__date">{date}</div>
    </div>
  )
}

export default ExpenseItemDate;