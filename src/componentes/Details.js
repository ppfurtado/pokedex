import React from 'react'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import {ReactComponent as Arrow} from '../assets/left-arrow.svg'
import { PokedexContext } from '../contexts/PokedexContext'


const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  background: ${props => props.typesBackground[props.type]};
`
const Header = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  
  display: flex;
  justify-content: center;
  align-items: center;
`
const ArrowLeft = styled(Arrow)`
  position: absolute;
  width: 30px;
  left: 10px;
  top: 10px;
`
const Image = styled.img.attrs( props =>({
  src: props.src,
  alt: props.alt
}))`
  display: block;
  max-height: 100%;
  position: absolute;
  bottom: -30px;
`
const Content = styled.div`
  width: 100%;
  height: 400px;
  background: white;
  border-radius: 50px 50px 0 0;
`

const Details = () => {
  
  const history = useNavigate()

  const {id} = useParams()
  const {typesBackground, data} = React.useContext(PokedexContext)

  if(data === null) return null
  console.log(data[id -1 ]);
  return (
    <Wrapper typesBackground={typesBackground} type={data[id - 1].types[0].type.name}>
      <Header >
        <ArrowLeft onClick={() => history(-1)} />
        <Image src={data[id - 1].sprites.other.dream_world.front_default} alt={data[id - 1].forms[0].name} />
      </Header>
      <Content />
      
    </Wrapper>
  )
}

export default Details
