import React from 'react'

const Button = ({pill=false, textColor="#1F2937", backgroundColor="#F3F4F6", text="Badge"}) => {
    return (
        <button 
            className={pill ? "inter pill" : "inter"}
            style={{
                    color: textColor, 
                    backgroundColor: backgroundColor,
                    padding: ".25rem .75rem",
                    margin: ".5rem",
                    border: "none"
            }}
        >
            {text}
        </button>
    )
}

export default Button