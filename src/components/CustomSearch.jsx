import React, { useEffect, useState } from 'react'
import { fetchCountries } from '../api/index'

const CustomSearch = ({ handleCountryChange }) => {


    const [getCountries, setCountries] = useState([])
    useEffect(() => {
        async function fetchAPI() {
            setCountries(await fetchCountries())
        }
        fetchAPI()
    }, [setCountries])

    return (
        <div className="custom-search">
            <form action="">
                <label htmlFor="">Search global or by country: </label>
                <select name="country" id="" onChange={(e) => handleCountryChange(e.target.value) }>
                    <option value="Global">Global</option>
                    {getCountries.map((country, index) => <option key={index} value={country}>{country}</option>)}
                </select>
            </form>
        </div>
    )
}

export default CustomSearch