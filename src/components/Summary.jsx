const Summary = ({ transactions }) => {
    const income = transactions
      .filter(t => t.type === 'income')
      .reduce((acc, t) => acc + t.amount, 0);
  
    const expense = transactions
      .filter(t => t.type === 'expense')
      .reduce((acc, t) => acc + t.amount, 0);
  
    return (
      <div>
        <h2>Resumen</h2>
        <p>Ingresos: ${income}</p>
        <p>Gastos: ${expense}</p>
        <p>Saldo Total: ${income - expense}</p>
      </div>
    );
  };
  export default Summary;
  