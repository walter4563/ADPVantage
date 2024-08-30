import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm() {
  const [expense, setExpense] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={expense}
        onChange={(e) => setExpense(e.target.value)}
        placeholder="Enter expense"
      />
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
