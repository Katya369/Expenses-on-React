import './ExpenseForm.css';
import { useState } from 'react';
const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }
    const [enteredAmount, setEnteredAmount] = useState('');
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }
    const [enteredDate, setEnteredDate] = useState('');
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount:'',
    //     enteredDate:''
    // });
    // const titleChangeHandler = (event) => {
    //     setUserInput((prevValue) => {
    //         return {...prevValue,
    //         enteredTitle:event.target.value}
    //     });
    // };
    const [isNewExpense,setIsNewExpense] = useState (true);

    const submitHandler = (event) => {
        event.preventDefault();
        setIsNewExpense(false);
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');
        props.onSaveExpenseData(expenseData);
    };
    const onCancelHandler = () => {
        setIsNewExpense(true);
    };

let mainForm;

let form = (
    <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__controls'>
                <label>Title</label>
                <input type='text' onChange={titleChangeHandler} value={enteredTitle} />
            </div>
            <div className='new-expense__controls'>
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler} value={enteredAmount} />
            </div>
            <div className='new-expense__controls'>
                <label>Date</label>
                <input type='date' min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler} value={enteredDate} />
            </div>
            <div className='new-expense__actions'>
                <button onClick = {onCancelHandler} type='submit'>Cancel</button>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </div>
    </form>
);
if (isNewExpense) {

    mainForm = (
        <form onSubmit={submitHandler}>
                <div className='new-expense__controls'>
                <div className='new-expense__actions'>
                        <button type='submit'>Add New Expense</button>
                    </div>
                    </div>
            </form>
        );
} else {mainForm = form};

    return  <div> {mainForm} </div>
    
};
export default ExpenseForm;