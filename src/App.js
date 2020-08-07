import React from 'react';
import Home from './pages/landing/Home';
import Header from './components/Navigation/Header';
import './App.css';

function App() {
  return (
    <div className="App">
    <Header/>
      <Home/>
    </div>
  );
}

export default App;
