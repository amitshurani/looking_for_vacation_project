import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserProvider from './components/signUp';
import AuthPasswordsProvider from './components/login';
import HomePage from './components/homePage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HomePage>
      <UserProvider>
        <AuthPasswordsProvider>

          <App/>
        </AuthPasswordsProvider>
      </UserProvider>
    </HomePage>
  </React.StrictMode>
  
  // <React.StrictMode>
  //    <UserProvider>
  //  <AuthPasswordsProvider>
  // <AppLogin/>
  // </AuthPasswordsProvider>
  //    </UserProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();