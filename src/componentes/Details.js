import React from 'react'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import {ReactComponent as Arrow} from '../assets/left-arrow.svg'
import { PokedexContext } from '../contexts/PokedexContext'


const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`
const ArrowLeft = styled(Arrow)`
  width: 30px; 
`
const Header = styled.div`
  width: 100%;
  height: 400px;
  background: ${props => props.typesBackground[props.type]};
`

const Details = () => {
  
  const history = useNavigate()

  const {id} = useParams()
  const {typesBackground, data} = React.useContext(PokedexContext)

  if(data === null) return null
  return (
    <Wrapper>
      <ArrowLeft onClick={() => history(-1)} />
      <Header typesBackground={typesBackground} type={data[id].types[0].type.name} >
        Hello Details
      </Header>
      
    </Wrapper>
  )
}

export default Details
