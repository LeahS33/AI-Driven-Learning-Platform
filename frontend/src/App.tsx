import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login.tsx'
import Signup from './pages/Signup.tsx'
import Profile from './pages/Profile.tsx'
import { Provider } from 'react-redux';
import store from './store/store';
 
//import './App.css'

function App() {

  return (
    <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
  );
}

export default App
