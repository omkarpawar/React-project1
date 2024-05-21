import ExpenseItem from "./ExpenseItem";
function Expenses(){
  const expenses = [
    {id:'1',date:new Date(2023,7,15),location:'Banglore',title:'insurance',price:50},
    {id:'2',date:new Date(2023,3,25),location:'Delhi',title:'Book',price:20},
    {id:'3',date:new Date(2023,10,11),location:'Hyderabad',title:'Pen',price:5},
    {id:'4',date:new Date(2023,1,14),location:'Mumbai',title:'Laptop',price:200},
  ];
  return(
    <div className="expenses">
      {expenses.map((expense,index)=>{
      return(
        <ExpenseItem
        key={expense.id}
        date={expense.date}
        location={expense.location}
        title={expense.title}
        price={expense.price}
        ></ExpenseItem>
      )
    })}
    </div>

  )
}

export default Expenses;