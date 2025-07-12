import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Header from './Components/Home/Header/Header'
import Footer from './Components/Home/Footer/Footer'
import AboutUs from './Pages/AboutUs/AboutUs'
import Room from './Pages/Room/Room'
import Gallery from './Pages/Gallery/Gallery'
import Contact from './Pages/Contact/Contact'

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/rooms' element={<Room/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
