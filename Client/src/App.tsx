import './App.css';
import React, { useEffect } from 'react';

import { useAppDispatch } from './store/redux';
import { fetchAllProductsThunk } from './store/Products/productsActions';
import { fetchAllOrdersThunk } from './store/Orders/OrdersActions';

const App: React.FC = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchAllProductsThunk())
    dispatch(fetchAllOrdersThunk())
  })

  return (
    <div className="App">
      App
    </div>
  );
}

export default App;
