import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { StateProvider } from './context/state-context';
import { AuthProvider } from './context/auth-context';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <StateProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </StateProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
