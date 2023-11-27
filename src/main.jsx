import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App.jsx';

import './scss/styles.scss';
import * as bootstrap from 'bootstrap'
import './index.css';

ReactDOM.createRoot(document.getElementById('my-main-content')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
