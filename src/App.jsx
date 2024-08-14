import React from 'react';
import Feed from './pages/Feed';
import Login from './pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Protected from './components/Protected';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route element={<Protected/>}>
      <Route path='/feed' element={<Feed/>}/>
      <Route path="/ayarlar" element={<h1>Ayarlar</h1>}/>
      <Route path="/profil" element={<h1>profil</h1>}/>
      <Route path="/admin" element={<h1>Admin</h1>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App