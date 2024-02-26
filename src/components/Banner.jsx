import React from 'react'

const Banner = ({
    type=false, 
    textColor="#1F2937", 
    backgroundColor="#F3F4F6", 
    typeText="Badge",
    bodyText="Message text here"
}) => {
    return (
        <div
            style={{
                    color: textColor, 
                    backgroundColor: backgroundColor,
                    borderRadius: ".25rem",
                    padding: ".25rem .75rem",
                    margin: "0 .25rem",
                    width: "50%",
                    border: "none"
            }}
        >
            <p>{typeText}</p>
            <p>{type ? bodyText : null}</p>
        </div>
    )
}

export default Banner