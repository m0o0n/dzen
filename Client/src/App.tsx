import './App.css';
import React from 'react';
import { deleteOrder, getAll } from './api/orders';

const App: React.FC = () => {
  getAll().then(data =>{console.log(data)})
  deleteOrder({data: {id: 16}}).then(data => {console.log(data)})
 
  
  return (
    <div className="App">
      App
    </div>
  );
}

export default App;
