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
            <button onClick={() => handleClick("badge")}>Badge</button>
            <button onClick={() => handleClick("banner")}>Banner</button>
            <button onClick={() => handleClick("card")}>Card</button>

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