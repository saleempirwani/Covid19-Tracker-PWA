import React from 'react'
import { Pie, Bar } from 'react-chartjs-2'

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {

    const barChart = (
        confirmed ?
            <Bar
                data={{
                    labels: ['Cases', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: ['#64b5f6', '#4caf50', '#e53935'],
                        data: [confirmed, recovered, deaths]
                    }]
                }}
                option={{
                    legend: { display: true },
                    title: { display: true, text: `Current Situation in ${country}` }
                }}
                height={110}
            />
            : null
    )

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
                height={110}
            />
            : null
    )

    return (

        <div>
            {country ? pieChart : barChart}
        </div>
    )
}

export default Chart