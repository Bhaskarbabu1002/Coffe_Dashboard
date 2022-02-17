import React from 'react'
import "./CountrySelection.css";
import CountryDropdown from 'country-dropdown-with-flags-for-react';  
const CountrySelection = () => {
  return (
    <div>
    	<CountryDropdown  id="UNIQUE_ID" className='YOUR_CSS_CLASS' preferredCountries={['gb', 'us']}  value="" handleChange={e => console.log(e.target.value)}></CountryDropdown>
    </div>
  )
}

export default CountrySelection