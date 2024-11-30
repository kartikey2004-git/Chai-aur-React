import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// by clicking ctrl + createRoot , we nedd to learn more about createRoot

/*<React.StrictMode></React.StrictMode> react ka ye safe mode hai jo ki specific hai development ke liye
jisse ki hum optimization wagera kr skein */