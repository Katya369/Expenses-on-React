import './ExpensesList.css';
import Expenses from './Expenses';


const ExpensesList = (props) => {

    if (props.filteredItems.length === 0) {
        return <h2 className='expenses-list__fallback'> No expenses found.</h2>;
    };

    return (
        <ul className='expenses-list'>
            <Expenses items={props.filteredItems} />
        </ul>
    );

};
export default ExpensesList;