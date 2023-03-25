import { useState } from 'react';
import { Form } from './components/Form/index.jsx';
import { List } from './components/List/index.jsx';
import { TotalMoney } from './components/TotalMoney/index.jsx';
import { Header } from './components/Header/index.jsx';
import './styles/index.css';
import styles from './styles/pages/home.module.css'

function App() {
  const [listTransactions, setListTransactions] = useState([]);

  const addNewTransaction = (formData) => {
    const newTransaction = {...formData};
    setListTransactions([...listTransactions,newTransaction]);
    console.log(listTransactions)
    console.log(newTransaction)
  };

  const removeTransaction = (id) => {
    const newList = listTransactions.filter(transaction => transaction.id !== id);
    setListTransactions(newList);
 };
 

  return (
    <div className="App">
        <Header />
        <main className='container'>
          <div className={styles.right}>
            <Form listTransactions={listTransactions} setListTransactions={setListTransactions} addNewTransaction={addNewTransaction}/>
            <TotalMoney listTransactions={listTransactions} /> 
          </div>
          <div className='left'>
            <List listTransactions={listTransactions} removeTransaction={removeTransaction} />
          </div>
        </main>
    </div>
  )
}

export default App
