import { useState, useEffect } from 'react'
import './App.css'
import Title from './components/Title';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import TransnctionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { v4 as uuidv4 } from 'uuid';

const list = [
  { id: 1, text: 'Flower', amount: -19.99 },
		{ id: 2, text: 'Salary', amount: 299.97 },
		{ id: 3, text: 'Book', amount: -10 },
		{ id: 4, text: 'Camera', amount: 150 },
];

function App() {
  const [transactions, setTransactions] = useState(list);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [balance, setBalance] = useState(0);
  const [transactionText, setTransactionText] = useState('');
  const [transactionAmount, setTransactionAmount] = useState('');

  const getIncome = transactions
  .filter(transaction => transaction.amount > 0)
  .reduce((acc, transaction) => acc += transaction.amount, 0)

  const getExpense = transactions
  .filter(transaction => transaction.amount < 0)
  .reduce((acc, transaction) => acc -= transaction.amount, 0)

  const getTotal = income - expense;

  useEffect(() => {
    setIncome(getIncome);
    setExpense(getExpense);
  }, [transactions])

  useEffect(() => {
    setBalance(getTotal);
  }, [income, expense])

  const handleChange = (e) => {
    // console.log(e.target.value)
    // console.log('e.target.name', e.target.name)
    const value = e.target.value;
    const name = e.target.name;
    if(name == 'text') {
      setTransactionText(value);
    }
    if(name == 'amount') {
      setTransactionAmount(value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!transactionText == '' && !transactionAmount == '') {
      setTransactions([...transactions, {
        id: uuidv4(),
        text: transactionText,
        amount: transactionAmount
      }])

      setTransactionText("");
      setTransactionAmount("");
    }
   
    // console.log('Submit');
  }

  // console.log('transactions', transactions)

  // console.log('income', income)
  // console.log('expense', expense)

  const handleDelete = (e, id) => {
    e.preventDefault();
    setTransactions(
      transactions.filter(transaction => transaction.id != id)
    )
    // console.log("delete", id);
  }

  return (
    <>
      <div className='main'>
        <div className='container'>
            <Title />
            <Balance balance={balance} />
            <IncomeExpense income={income} expense={expense} />
            <TransnctionList transactions={transactions} handleDelete={handleDelete} />
            <AddTransaction 
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              transactionText={transactionText}
              transactionAmount={transactionAmount} 
            />
        </div>
      </div>
    </>
  )
}

export default App
