import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './AppLayout/AppLayout';
import { Home } from 'lucide-react';
import Tools from './pages/Tools';
import Community from './pages/Community';
import Resources from './components/Resources';

const App=()=> {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AppLayout/>}>
      <Route path="/home" element={<Home/>}/>
      <Route path="/tools" element={<Tools/>}/>
      <Route path="/community" element={<Community/>}/>
      <Route path="/resources" element={<Resources/>}/>
      </Route>
      </Routes> 
    </BrowserRouter>
  )
}

export default App
