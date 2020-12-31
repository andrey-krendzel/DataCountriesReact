
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({weather, temperature}) =>{
  return(
    <p>Temperature {temperature}  degree Celsius</p>
  )
}

const Description = ({ country }) => {
  const [ weather, setWeather ] = useState([]) 
  const [temperature, setTemperature] = useState('')
  const hook = () => {
    console.log('effect')
    axios
      .get('http://api.weatherstack.com/current?access_key=e4df3e430ba58d790fd5fe25e7b68f87&query=' + country.capital)
      .then(response => {
        console.log('promise fulfilled')
       
        console.log(response.data)
        setWeather(response.data)
        setTemperature(response.data.current.temperature)
        
      })
  }
  
  useEffect(hook, [])

    return (<div>
      <h1>{country.name}</h1>  
      <p>Capital {country.capital}</p>
      <p>Population {country.population}</p>
      <p>Currency {country.currencies.map(currency => <li>{currency.name}</li>)}</p>
      <ul>
          <h2>Languages: </h2>
          {country.languages.map(language => <li id={language.iso639_1}>{language.name}</li>)}
      </ul>
      <img src={country.flag} width="300px"/>
      <h2>Weather data</h2>
     <Weather weather={weather} temperature={temperature} />
     
      </div>
    )
  }
  
  export default Description