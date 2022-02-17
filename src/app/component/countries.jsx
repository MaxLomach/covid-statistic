import React, { useEffect, useState } from 'react'
import Header from './header'
import CustomizedTables from './table'

const Countries = () => {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [countries, setCountries] = useState([])

  useEffect(() => {
    fetch('https://api.covid19api.com/summary')
      .then((res) => res.json())
      .then(
        (result) => {
          setTimeout(() => {
            setIsLoaded(false)
            setIsLoaded(true)
            setCountries(result.Countries)
          }, 2000)
        },
        (error) => {
          setIsLoaded(true)
          setError(error)
        }
      )
  }, [])

  return (
    <>
    <Header/>
      <CustomizedTables countries={countries} />
    </>
  )
}

export default Countries
