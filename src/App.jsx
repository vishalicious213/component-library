import React from 'react'
import { useState } from 'react'
import BadgeExample from './components/Badge/Badge-Example'
import BannerExample from './components/Banner/Banner-Example'
import CardExample from './components/Card/Card-Example'

const App = () => {
    const [clicked, setClicked] = useState()

    function handleClick(option) {
        setClicked(option)
    }

    return (
        <div id="app">
            <div className="buttons">
                <button className="option" onClick={() => handleClick("badge")}>Badge</button>
                <button className="option" onClick={() => handleClick("banner")}>Banner</button>
                <button className="option" onClick={() => handleClick("card")}>Card</button>
            </div>

            <div>
                {
                    clicked === "badge" ? <BadgeExample /> 
                    : clicked === "banner" ? <BannerExample />
                    : clicked === "card" ? <CardExample />
                    : null
                }
            </div>
        </div>
    )
}

export default App