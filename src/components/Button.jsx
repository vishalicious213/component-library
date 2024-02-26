import React from 'react'

const Button = ({style="square", textColor="#1F2937", backgroundColor="#F3F4F6", text="Badge"}) => {
    return (
        <button 
            className="inter"
            style={{
                    color: textColor, 
                    backgroundColor: backgroundColor,
                    border: "none"
            }}
        >
            {text}
        </button>
    )
}

export default Button