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
  position: absolute;
  width: 30px;
  left: 10px;
  top: 10px;
`
const Header = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  
  background: ${props => props.typesBackground[props.type]};
  display: flex;
  justify-content: center;
  align-items: center;
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

const Details = () => {
  
  const history = useNavigate()

  const {id} = useParams()
  const {typesBackground, data} = React.useContext(PokedexContext)

  if(data === null) return null
  console.log(data[id -1 ]);
  return (
    <Wrapper>
      <Header typesBackground={typesBackground} type={data[id].types[0].type.name} >
        <ArrowLeft onClick={() => history(-1)} />
        <Image src={data[id - 1].sprites.other.dream_world.front_default} alt={data[id - 1].forms[0].name} />
        {/* <img style={{display: 'block', maxHeight: '80%' }} src={data[id - 1].sprites.other.dream_world.front_default} alt=""/>       */}
      </Header>
      
    </Wrapper>
  )
}

export default Details
