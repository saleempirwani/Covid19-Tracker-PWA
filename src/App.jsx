import React from 'react'

import {  Header, Card, CustomSearch, Chart, Footer } from "./components";

import './App.css'

import { fetchData } from './api/index'

class App extends React.Component {

    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchData()
        // console.log(fetchData)

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
                    <CustomSearch handleCountryChange={this.handleCountryChange} />
                    <Card data={data} />
                    <Chart data={data} country={country} />
                </div>
                <Footer />
            </div>
        )
    }
}

export default App