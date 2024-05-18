import ExpenseItem from "./components/ExpenseItem";

function App() {
  return (
    <div>

   <h1>Let's get Started</h1>

   <p>I am learning React</p>

   <ExpenseItem date = {new Date(2023,7,15)} location ="Banglore" title ="insurance" price ="50"></ExpenseItem>
   <ExpenseItem date = {new Date(2023,3,25)} location ="Delhi" title ="Book" price ="20"></ExpenseItem>
   <ExpenseItem date = {new Date(2023,10,11)} location ="Hyderabad" title ="Pen" price ="5"></ExpenseItem>
   <ExpenseItem date = {new Date(2023,1,14)} location ="Mumbai" title ="Laptop" price ="200"></ExpenseItem>
   
   
  </div>
  );
}

export default App;