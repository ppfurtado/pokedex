import React from 'react'

export const PokedexContext = React.createContext()

const typesBackground = {
  steel : '#f4f4f4',
  fire : '#FDDFDF',
  grass : '#DEFDE0',
  electric : '#FCF7DE',
  water : '#DEF3FD', 
  ice : '#DEF3FD',  
  ground : '#f4e7da',
  rock : '#d5d5d4',
  fairy : '#fceaff',
  poison : '#98d7a5',
  bug : '#f8d5a3',
  dragon : '#97b3e6',
  psychic : '#eaeda1',
  flying : '#F5F5F5',
  fighting : '#E6E0D4',
  normal : '#F5F5F5',
}

export const PokedexContextProvider = ({ children }) => {

  const [data, setData] = React.useState(null)
  const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`

  React.useEffect(()=>{

    async function getData(){
      const pokemonsPromises = []

      for(let i = 1;i<= 150;i++){
        const response = await fetch(getPokemonUrl(i))
        const json = await response.json()
        pokemonsPromises.push(json)
      }
      setData(pokemonsPromises) 
    }
    getData()
  },[])


  return (
    <PokedexContext.Provider value={{data, typesBackground}}>
      {children}
    </PokedexContext.Provider>
  )
}

