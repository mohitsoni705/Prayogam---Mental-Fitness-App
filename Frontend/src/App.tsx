import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './AppLayout/AppLayout';
import Home from './pages/Home'
import Tools from './pages/Tools';
import Community from './pages/Community';
import Resources from './components/Resources';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';

const App=()=> {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AppLayout/>}>
      <Route path="/home" element={<Home/>}/>
      <Route path="/tools" element={<Tools/>}/>
      <Route path="/community" element={<Community/>}/>
          <Route path="/resources" element={<Resources />} />
      </Route>
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/login' element={<LoginPage />} />
        
      </Routes> 
    </BrowserRouter>
  )
}

export default App
