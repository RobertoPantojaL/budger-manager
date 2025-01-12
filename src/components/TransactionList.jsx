const TransactionList = ({ transactions }) => {
    return (
      <div>
        <h2>Transacciones</h2>
        <ul>
          {transactions.map((transaction, index) => (
            <li key={index} className={transaction.type}>
              <span>{transaction.date}</span>
              <span>{transaction.category}</span>
              <span>{transaction.type === 'income' ? '+' : '-'}${transaction.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default TransactionList;
  