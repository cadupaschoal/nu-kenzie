import { useState } from 'react';
import { Form } from './components/Form/index.jsx';
import { List } from './components/List/index.jsx';
import { TotalMoney } from './components/TotalMoney/index.jsx';
import { Header } from './components/Header/index.jsx';
function App() {
  const [listTransactions, setListTransactions] = useState([]);

  const addNewTransaction = (formData) => {
    const newTransaction = {...formData};
    setListTransactions([...listTransactions,newTransaction]);

  };

  const removeTransaction = (id) => {
    const newList = listTransactions.filter(transaction => transaction.id !== id);
    setListTransactions(newList)
 }

  return (
    <div className="App">
        <Header />
        <Form listTransactions={listTransactions} setListTransactions={setListTransactions} addNewTransaction={addNewTransaction}/>
        <List listTransactions={listTransactions} removeTransaction={removeTransaction} />
        <TotalMoney listTransactions={listTransactions} /> 
    </div>
  )
}

export default App
