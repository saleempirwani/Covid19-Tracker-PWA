import React from 'react'

import Header from './components/Header'
import Reading from './components/Reading'
import CustomSearch from './components/CustomSearch'
import Chart from './components/Chart'
import Footer from './components/Footer'

import './App.css'

import { fetchData } from './api/index'

class App extends React.Component {

    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchData()
        console.log(fetchData)

        this.setState({ data: fetchedData })
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country)
        this.setState({ data: fetchedData, country: country })
    }

    render() {

        const { data, country } = this.state

        return (
            <div>
                <Header />
                <div className="container">
                    <Reading data={data} />
                    <CustomSearch handleCountryChange={this.handleCountryChange} />
                    <Chart data={data} country={country} />
                </div>
                <Footer />
            </div>
        )
    }
}

export default App