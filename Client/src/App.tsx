import './App.css';
import React, { useEffect } from 'react';

import { useAppDispatch } from './store/redux';
import { fetchAllProductsThunk } from './store/Products/productsActions';
import { fetchAllOrdersThunk } from './store/Orders/OrdersActions';
import { MainLayout } from './components/common/Layout';
import { socket } from '.';



const App: React.FC = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    socket.emit('join')
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

export default App
