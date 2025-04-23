import React from 'react'
import axios from 'axios'
import { useState } from 'react'

// Hook personalizado para poder obtener la información de la API
const UseFetch = ({baseURL}) => {

  const [response, setResponse] = useState()

  // leer información
  const getAPI = ()=>{
    const URL = `${baseURL}/users`
    axios.get(URL)
    .then(res => {
      setResponse(res.data)
    })
    .catch(err => console.log(err))
  }

  return [response, getAPI]
}

export default UseFetch
