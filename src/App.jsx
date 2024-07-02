// import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Pages/Home'
import Admin from './Pages/Admin'
import Blog from './Pages/Blog'
function App() {
  return (
    <><BrowserRouter>
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/blog/:id' element={<Blog/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
