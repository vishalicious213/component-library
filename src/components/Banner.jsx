import React from 'react'

const Banner = ({
    type="neutral", 
    typeText="Update available",
    bodyText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
}) => {
    let bannerStyle = {}

    if (type === "success") {
        console.log("Success")
    } else if (type === "warning") {
        console.log("Warning")
    } else if (type === "error") {
        console.log("Error")
    } else {
        console.log("Neutral")
    }

    return (
        <div
            style={{
                    // color: textColor, 
                    // backgroundColor: backgroundColor,
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

// type=false, 
// textColor="#1F2937", 
// backgroundColor="#F3F4F6", 
// typeText="Badge",
// bodyText="Message text here"