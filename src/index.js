import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {router} from './App';

// eslint-disable-next-line import/order
import { RouterProvider } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


