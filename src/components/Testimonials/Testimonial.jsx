import React from 'react'
import { useState } from 'react'

const Testimonial = ({
    pic,
    logo,
    text,
    name,
    title
}) => {
    const [width, setWidth] = useState(window.innerWidth)

    function checkWidth() {
        setWidth(window.innerWidth)
    }
    
    window.addEventListener("resize", checkWidth)

    return (
        <div className="test-wrapper">
            <div className="testimonial inter">
                {pic ? <img src={pic} alt="" /> : null}                
                {!pic ? 
                    <div className="test-logo-container">
                        <img className="test-logo" src={logo} alt="" />
                    </div>
                    : null
                }
                <p className="test-text">{text}</p>
                {width > 500 
                    ? <p>{name} / <span className="test-title">{title}</span></p>
                    : <><p>{name}</p><p className="test-title">{title}</p></>
                }
            </div>
        </div>
    )
}

export default Testimonial