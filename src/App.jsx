import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Summary from './components/Summary';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import ExportToExcel from './components/ExportToExcel';

const App = () => {
  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem('transactions');
    return savedTransactions ? JSON.parse(savedTransactions) : [];
  });

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Summary transactions={transactions} />
        <TransactionForm addTransaction={addTransaction} />
        <ExportToExcel transactions={transactions} />
        <TransactionList transactions={transactions} />
      </div>
    </div>
  );
};

export default App;
