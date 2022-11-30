import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_SERVER_URI;
axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
