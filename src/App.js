import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './componentes/Home'
import Details from './componentes/Details'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home /> } />
        <Route path="/:slug" element={<Details/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
