import React from 'react'
import axios from 'axios'
import { useState } from 'react'

// Hook personalizado para poder obtener la información de la API
const UseFetch = ({ baseURL }) => {

  const [response, setResponse] = useState()

  // Token de autorización
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoyLCJmaXJzdE5hbWUiOiJhbmRyZXMiLCJsYXN0TmFtZSI6Imxlb24iLCJlbWFpbCI6ImNvcnJlb0Bjb3JyZW8uY29tIiwiZ2VuZGVyIjoiTWFsZSIsImNyZWF0ZWRBdCI6IjIwMjQtMTAtMjZUMDA6NDA6MDUuODY0WiIsInVwZGF0ZWRBdCI6IjIwMjQtMTAtMjZUMDA6NDA6MDUuODY0WiJ9LCJpYXQiOjE3MzAyOTgzNzYsImV4cCI6MTczMDM4NDc3Nn0.vzvZyQzo_DmesoftxBOoPkCWiSQ2lt_LfG6jYIOR01M" // ← pon tu token completo aquí

  // leer información
  const getAPI = () => {
    const URL = `/api/users`
    axios.get(URL, {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoyLCJmaXJzdE5hbWUiOiJhbmRyZXMiLCJsYXN0TmFtZSI6Imxlb24iLCJlbWFpbCI6ImNvcnJlb0Bjb3JyZW8uY29tIiwiZ2VuZGVyIjoiTWFsZSIsImNyZWF0ZWRBdCI6IjIwMjQtMTAtMjZUMDA6NDA6MDUuODY0WiIsInVwZGF0ZWRBdCI6IjIwMjQtMTAtMjZUMDA6NDA6MDUuODY0WiJ9LCJpYXQiOjE3MzAyOTgzNzYsImV4cCI6MTczMDM4NDc3Nn0.vzvZyQzo_DmesoftxBOoPkCWiSQ2lt_LfG6jYIOR01M'
      }
    })
    .then(res => {
      setResponse(res.data)
    })
    .catch(err => console.log(err))
  }

  return [response, getAPI]
}

export default UseFetch
