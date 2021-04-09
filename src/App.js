import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {useQuery, gql} from '@apollo/client'
import Home from './componentes/Home'
import Details from './componentes/Details'
import { PokedexContextProvider } from './contexts/PokedexContext'

const POKEMONS = gql`
  {
    pokemon {
      name
      forms {
        url
      }
      weight
      species {
        url
      }
    }
  }
`


const App = () => {
  const {loading, error, data} = useQuery(POKEMONS)
  if(loading) return <p>Loading...</p>
  if(error) return <p>Error :(</p>
  if (data) {
    console.log(data);
  }

  return (
    <BrowserRouter>
      <PokedexContextProvider>
        <Routes>
          <Route path="/"  element={<Home /> } />
          <Route path="/:id/:slug" element={<Details/> } />
        </Routes>

      </PokedexContextProvider>
    </BrowserRouter>
  )
}

export default App
