import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import viteLogo from '/vite.svg'
import './App.css'
import { Home } from './Pages/Home'
import { Phones } from './Pages/Phones'
import { PhoneDetail } from './Pages/PhoneDetail'
import { Latest } from './Pages/Latest'
import { Fans } from './Pages/Fans'
import { Interest } from './Pages/Interest'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/phone/:slug/:page' element={<Phones/>}/>
        <Route path='/phone/:slug/detail' element={<PhoneDetail/>}/>
        <Route path='/phone/latest' element={<Latest/>}/>
        <Route path='/phone/fans' element={<Fans/>}/>
        <Route path='/phone/interest' element={<Interest/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
