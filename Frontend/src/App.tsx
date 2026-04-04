import  Home  from './pages/Home.tsx'
import React from 'react'
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import Tools from './pages/Tools.tsx'
import AppLayout from './AppLayout/AppLayout.tsx'
import Community from './pages/Community.tsx'
import Resources from './components/Resources.tsx'
const App = () => {
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
