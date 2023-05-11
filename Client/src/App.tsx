import './App.css';
import React, { useEffect } from 'react';

import { useAppDispatch } from './store/redux';
import { fetchAllProductsThunk } from './store/Products/productsActions';
import { fetchAllOrdersThunk } from './store/Orders/OrdersActions';
import { MainLayout } from './components/Layout';

const App: React.FC = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchAllProductsThunk())
    dispatch(fetchAllOrdersThunk())
  })

  return (
    <MainLayout>
      <div className="App">

      </div>
    </MainLayout>

  );
}

export default App;
