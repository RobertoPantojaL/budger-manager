import React, { useState } from 'react';

const TransactionForm = ({ addTransaction }) => {
  const [formData, setFormData] = useState({ type: 'income', amount: 0, category: '', date: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction({ ...formData, amount: parseFloat(formData.amount) });
    setFormData({ type: 'income', amount: 0, category: '', date: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })}>
        <option value="income">Ingreso</option>
        <option value="expense">Gasto</option>
      </select>
      <input
        type="number"
        value={formData.amount}
        onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
        placeholder="Cantidad"
        required
      />
      <input
        type="text"
        value={formData.category}
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        placeholder="Categoría"
        required
      />
      <input
        type="date"
        value={formData.date}
        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        required
      />
      <button type="submit">Agregar</button>
    </form>
  );
};
export default TransactionForm;
