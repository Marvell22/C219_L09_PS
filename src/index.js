import React from 'react';
import ReactDOM from 'react-dom/client';  // Import from 'react-dom/client' for React 18+
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App';
import styles from './styles'; // Import the styles.js file

const root = ReactDOM.createRoot(document.getElementById('root'));  // Create the root
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* Wrap your app in BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
