import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Country from './components/Country'
import Description from './components/Description'

const Filter = (props) => {

  return(
    <p>filter shown with  <input onChange={props.onChange}/></p>
  )
}

const FilterName = (props) => {

  let amountOfCountries = props.countries.filter(country => country.name.toLowerCase().includes(props.filter)).length
  if (amountOfCountries > 10 ){
    return(<p>Too many matches (type something to filter result)</p>)
  } else if (amountOfCountries == 1) {

    return(
      <div>
      {props.countries.filter(country => country.name.toLowerCase().includes(props.filter)).map(country =>
          <Description key={country.numericCode} country={country}/>
        )}
     </div>
    )
  }
else{
  return(
    <div><h2>Countries</h2>
    <ul>
 
    {props.countries.filter(country => country.name.toLowerCase().includes(props.filter)).map(country =>
        <Country key={country.numericCode} country={country}/>
      )}
    </ul></div>
  )
    }
}

const App = () => {
  const [ countries, setCountries ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [filter, setFilter] = useState('')

  const hook = () => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
        console.log(response.data)
      })
  }
  
  useEffect(hook, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value.toLowerCase())
  }



 


    
  


  return (
    <div>
      <h1>Countries</h1>
    <Filter onChange={handleFilterChange}></Filter>
    <FilterName countries={countries} filter={filter}/>
    </div>
  )
}

export default App