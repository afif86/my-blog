import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './css/framework/bootstrap.min.css';
import './css/custom.css';
import './css/vlt-main.min.css';
import './css/vlt-plugins.min.css'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
