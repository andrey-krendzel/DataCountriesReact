import React from 'react'
const Country = ({ country }) => {
    return (
      <li>{country.name}  {country.numericCode} </li>
    )
  }
  
  export default Country