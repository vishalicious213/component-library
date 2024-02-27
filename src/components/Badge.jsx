import React from 'react'

const Badge = ({
    pill=false, 
    textColor="#1F2937", 
    backgroundColor="#F3F4F6", 
    text="Badge"
}) => {
    return (
        <div
            className="badge inter"
            style={{
                    color: textColor, 
                    backgroundColor: backgroundColor,
                    borderRadius: pill ? "1rem" : ".25rem",
                    display: "inline-block",
                    padding: ".25rem .75rem",
                    margin: ".25rem",
                    border: "none"
            }}
        >
            {text}
        </div>
    )
}

export default Badge