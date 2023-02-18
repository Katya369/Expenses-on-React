import ExpenseItem from './ExpenseItem.js'
import './Expenses.css';
import Card from '../UI/Card.js';


function Expenses (props) {
  
  return <Card className='expenses'> 

     {props.items.map((expense) => (
                           
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
             ))};
</Card> 
    }
      export default Expenses;


// // return (
// //     <div className='expenses'> 
// //     <ExpenseItem
// //     date={props.items[0].date}
// //     title={props.items[0].title}
// //     amount={props.items[0].amount}
// //   />
// //    <ExpenseItem
// //     date={props.items[1].date}
// //     title={props.items[1].title}
// //     amount={props.items[1].amount}
// //   />
// //    <ExpenseItem
// //     date={props.items[2].date}
// //     title={props.items[2].title}
// //     amount={props.items[2].amount}
// //   />
// //   </div>
       
// )
// }
