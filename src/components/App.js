import React from 'react'
import '../index.css'
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './Navbar'
import Success from './Success'
import Footer from './Footer'
import Hero from './Hero'

const App = () => {
    return (
      <>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Hero/>}/>
            <Route path='/success' element={<Success/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </>
    )
}

export default App