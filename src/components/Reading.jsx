import React from 'react'

const Reading = ({ data: { confirmed, recovered, deaths } }) => {

    return (
        <div className="reading-container">
            <div>
                <h1>Cases</h1>
                <h2>{confirmed}</h2>
            </div>
            <div>
                <h1>Recovered</h1>
                <h2>{recovered}</h2>
            </div>
            <div>
                <h1>Death</h1>
                <h2>{deaths}</h2>
            </div>

        </div>
    )
}

export default Reading