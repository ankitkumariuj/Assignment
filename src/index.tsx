import React from 'react';
import ReactDOM from 'react-dom/client'; // Include your CSS file
import App from './App'; // Ensure this file exists in the src folder
import reportWebVitals from './reportWebVitals'; // Ensure this file exists in the src folder

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
