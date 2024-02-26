import React from 'react'

const Button = ({
    pill=false, 
    textColor="#1F2937", 
    backgroundColor="#F3F4F6", 
    text="Badge"
}) => {
    return (
        <button 
            className="badge"
            style={{
                    color: textColor, 
                    backgroundColor: backgroundColor,
                    borderRadius: pill ? "1rem" : ".25rem",
                    padding: ".25rem .75rem",
                    margin: "0 .25rem",
                    border: "none"
            }}
        >
            {text}
        </button>
    )
}

export default Button