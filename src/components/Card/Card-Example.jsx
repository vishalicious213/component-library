import React from 'react'
import Card from './Card'

const CardExample = () => {
    return (
        <div className="container">
            <h2 className="marker">Cards</h2>
            <div className="cards">
                <Card />
                <Card
                    icon="/error.svg"
                    title="Uneasy Deployment"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
            </div>
        </div>
    )
}

export default CardExample