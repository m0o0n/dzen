import './App.css';
import React, { useEffect } from 'react';
import { deleteOrder, getAll } from './api/orders';
import { useAppDispatch } from './store/redux';
import { fetchAllProductsThunk } from './store/Products/productsActions';

const App: React.FC = () => {
  getAll().then(data => { console.log(data) })
  deleteOrder({ data: { id: 16 } }).then(data => { console.log(data) })
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchAllProductsThunk())
  })

  return (
    <div className="App">
      App
    </div>
  );
}

export default App;
