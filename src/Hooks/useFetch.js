import React from 'react'

const useFetch = () => {
  const [data, setData] = React.useState(null)
  const [error, setError] = React.useState(null)
  const [loading, setLoading] = React.useState(false)

  const request = React.useCallback(async (url)=> {
    let response
    let json
    const pokemonsPromises = []
    try {
      setError(null)
      setLoading(true)
      response = await fetch(url)
      json = await response.json()
      pokemonsPromises.push(json)
      if(response.ok === false) throw new Error(json.message)
    } catch (err) {
      json = null
      setError(err.message)
    } finally {
      setData(pokemonsPromises)
      setLoading(false)
      return {response, json}
    }
  },[])

  return {
    data, error, loading, request
  }
}

export default useFetch
