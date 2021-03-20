import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './componentes/Home'
import Details from './componentes/Details'
import { PokedexContextProvider } from './contexts/PokedexContext'



const App = () => {
  return (
    <BrowserRouter>
      <PokedexContextProvider>
        <Routes>
          <Route path="/"  element={<Home /> } />
          <Route path="/:slug" element={<Details/> } />
        </Routes>

      </PokedexContextProvider>
    </BrowserRouter>
  )
}

export default App
