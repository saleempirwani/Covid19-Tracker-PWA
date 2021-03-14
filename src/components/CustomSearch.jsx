import React, { useEffect, useState } from "react";
import { fetchCountries } from "../api/index";

const CustomSearch = ({ handleCountryChange }) => {
  const [getCountries, setCountries] = useState([]);
  useEffect(() => {
    async function fetchAPI() {
      setCountries(await fetchCountries());
    }
    fetchAPI();
  }, [setCountries]);

  return (
    <div className="form-group my-5">
      <label htmlFor="exampleFormControlSelect1">
        Search global or country wise
      </label>
      <select
        className="form-control"
        id="exampleFormControlSelect1"
        name="country"
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="Global">Global</option>
        {getCountries?.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomSearch;
