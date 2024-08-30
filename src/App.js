import React from 'react';
import Header from './components/Header';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import './App.css';

function App() {
  return (
    <div className="container">
      <Header />
      <ExpenseForm />
      <ExpenseList />
    </div>
  );
}

export default App;
