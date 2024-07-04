import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Pages/Home'
import Admin from './Pages/Admin'
import Blog from './Pages/Blog'
import BlogContext from './context/BlogContext'
import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
function App() {
  const [isAuth, setIsAuth] = useState(false)
  return (
    <BlogContext.Provider value={{ isAuth, setIsAuth }} >
      <BrowserRouter>
      <Toaster/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/blog/:id' element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </BlogContext.Provider>


  )
}

export default App
