import React from 'react'
import styled from 'styled-components'
import { PokedexContext } from '../contexts/PokedexContext'

const ContainerCard = styled.div`
  position: relative;
  width: 200px;
  height: 240px;
  display: flex;
  flex-direction: column;
  background: ${props => props.typesBackground[props.type[0]]};
  align-items: center;
  padding-top: 1rem;
  border-radius: 5px;
  justify-content: center;

  &:hover {
    transform: scale(1.1);
  }
`
const NamePokemon = styled.h2`
  margin: 10px 0px 0px 0px;
`
const TypePokemon = styled.h4`
  margin: 0px;
`
const IdPokemon = styled.p`
  position: absolute;
  right: 15px;
  top: 5px;
`

const Card = ({ name, typepokemon, url, alt, type, id }) => {
  const {typesBackground} = React.useContext(PokedexContext) 
  return (
    <ContainerCard type={type} typesBackground={typesBackground}>
      <img style={{display: 'block', maxWidth: '40%'}} src={url} alt={alt} />
      <IdPokemon>
        { `##${id}` }
      </IdPokemon>
      <NamePokemon>
        {name}
      </NamePokemon>
      <TypePokemon>
        {typepokemon}
      </TypePokemon>      
    </ContainerCard>
  )
}

export default Card
