import React from 'react'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import {ReactComponent as Arrow} from '../assets/left-arrow.svg'


const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`
const ArrowLeft = styled(Arrow)`
  width: 30px; 
`

const Details = () => {
  
  const history = useNavigate()

  const params = useParams()
  console.log(params);


  return (
    <Wrapper>
      <ArrowLeft onClick={() => history(-1)} />
      Hello Details
    </Wrapper>
  )
}

export default Details
