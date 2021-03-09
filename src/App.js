import React from 'react'
import styled from 'styled-components'
import Card from './componentes/Card'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5,1fr);
  width: 96%;
  margin: 0 auto;
  justify-items: center;
  gap: 20px;
  padding: 10px;
`
const Title = styled.h2`
  text-align: center;
`
const App = () => {
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

  if (data === null) return null

  return (
    <>
      <Title>Pokedex</Title>
      <Wrapper>
        {
          data.map((element)=> ( 
            <Card 
              key={element.name} 
              name={element.name} 
              typepokemon={element.types.map(typeInfo => typeInfo.type.name).join(' | ')}
              type={element.types.map(typeInfo => typeInfo.type.name)} 
              alt={element.name} url={element.sprites.other.dream_world.front_default}   
            />
          ))
        }
      </Wrapper>
    </>
  )
}

export default App

