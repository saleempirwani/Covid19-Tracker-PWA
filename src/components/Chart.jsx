import React, { useState, useEffect } from 'react'
import { Line, Pie } from 'react-chartjs-2'
import { fetchDailyData } from '../api/index'


const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {

    const [dailyData, setDailyData] = useState([])

    useEffect(() => {
        async function fetchAPI() {
            setDailyData(await fetchDailyData())
        }
        // console.log(dailyData)

        fetchAPI()
    }, [])

    const lineChart = (
        dailyData.length ?
            (<Line data={{
                labels: dailyData.map(({ date }) => date),
                datasets: [{
                    data: dailyData.map(({ confirmed }) => confirmed),
                    label: 'Cases',
                    borderColor: '#3333ff',
                    fill: true
                }, {
                    data: dailyData.map(({ deaths }) => deaths),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    fill: true
                }]
            }}
                height={100}
            />) : null
    )

    // const barChart = (
    //     confirmed ?
    //         <Bar
    //             data={{
    //                 labels: ['Cases', 'Recovered', 'Deaths'],
    //                 datasets: [{
    //                     label: 'People',
    //                     backgroundColor: ['#64b5f6', '#4caf50', '#e53935'],
    //                     data: [confirmed, recovered, deaths]
    //                 }]
    //             }}
    //             option={{
    //                 legend: { display: false },
    //                 title: { display: true, text: `Current Situation in ${country}` }
    //             }}
    //             height={100}
    //         />
    //         : null
    // )

    const pieChart = (
        confirmed ?
            <Pie
                data={{
                    labels: ['Cases', 'Recovered', 'Deaths'],
                    datasets: [{
                        backgroundColor: ['#64b5f6', '#4caf50', '#e53935'],
                        data: [confirmed, recovered, deaths],
                    }]
                }}
                height={100}
            />
            : null
    )

    return (

        <div>
            {country ? pieChart : lineChart}
        </div>
    )
}

export default Chart