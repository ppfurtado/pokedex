import React from 'react'
import styled from 'styled-components'

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

const ContainerCard = styled.div`
  width: 200px;
  height: 240px;
  display: flex;
  flex-direction: column;
  background: ${props => typesBackground[props.type[0]]};
  align-items: center;
  padding-top: 1rem;
  border-radius: 5px;
  justify-content: center;

  /* &:hover {
    transform: scale(1.1);
  } */
`
const NamePokemon = styled.h2`
  margin: 10px 0px 0px 0px;
`
const TypePokemon = styled.h4`
  margin: 0px;
`

const Card = ({ name, typepokemon, url, alt, type }) => {
  return (
    <ContainerCard type={type} >
      <img style={{display: 'block', maxWidth: '40%'}} src={url} alt={alt} />
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
