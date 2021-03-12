import React from 'react'
import { useParams } from 'react-router'


const Details = () => {
  const params = useParams()
  console.log(params);


  return (
    <div>
      Hello Details
    </div>
  )
}

export default Details
