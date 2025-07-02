import { useState } from 'react'
import {Routes, Route } from 'react-router-dom'
import Labyrinth from './components/Labyrinth.jsx'
import About from './components/About.jsx'
import Works from './components/Works.jsx'

import './style.css'

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Labyrinth /> } />
      <Route path='/about' element={<About /> } />
      <Route path='/works' element={<Works /> } />

    </Routes>
  )
}

export default App
