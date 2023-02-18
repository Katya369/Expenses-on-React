import NewExpense from './components/NewExpense/NewExpense.js';
import ExpensesFilter from './components/Expenses/ExpensesFilter';
import { useState } from 'react';
import Card from './components/UI/Card';
import ExpensesList from './components/Expenses/ExpensesList';
import ExpensesChart from './components/Expenses/ExpensesChart.js';
const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 34.12,
    date: new Date(2020, 7, 14)
  },
  {
    id: 'e2',
    title: 'TV Set',
    amount: 799.12,
    date: new Date(2021, 8, 20)
  },
  {
    id: 'e3',
    title: 'Bouquet',
    amount: 4.18,
    date: new Date()
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter(expense => expense.date.getFullYear().toString() === filteredYear);

  return (
    <div>

      <NewExpense onAddExpense={addExpenseHandler} />

      <Card className='expenses'>
        <ExpensesFilter onChangeFilter={filterChangeHandler} selected={filteredYear} />
        <ExpensesChart filteredItemsExpenses={filteredExpenses}/>
      </Card>

      <ExpensesList filteredItems={filteredExpenses} />


    </div>
  );
}

export default App;
