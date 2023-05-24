
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as io from "socket.io-client"
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { setupStore } from './store/store';
import { Orders } from './components/Orders';
import { Groups } from './components/Groups';
import { Product } from './components/Products';

export const socket = io.connect('http://localhost:5000/')
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);
const store = setupStore()
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Orders />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/groups" element={<Groups />}>
          <Route path="/groups/:id" element={<Groups />} />
        </Route>

        <Route path='/products' element={<Product />} />
      </Routes>

    </BrowserRouter>

  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
