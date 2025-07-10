import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Header from './Components/Home/Header/Header'
import Footer from './Components/Home/Footer/Footer'
import AboutUs from './Pages/AboutUs/AboutUs'
import Room from './Pages/Room/Room'

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/rooms' element={<Room/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
