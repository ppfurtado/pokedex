import React from 'react'

export const PokedexContext = React.createContext()


export const PokedexContextProvider = ({ children }) => {

  const [data, setData] = React.useState(null)
  const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`

  const context = React.useContext(PokedexContext)
  
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
    <PokedexContext.Provider value={{data}}>
      {children}
    </PokedexContext.Provider>
  )
}

