import React from 'react'

const Banner = ({ type }) => {
    let bannerStyle = {}

    if (type === "success") {
        console.log("Success")
        bannerStyle = {
            titleColor: "#065F46",
            bodyColor: "#047857",
            backgroundColor: "#ECFDF5",
            typeText: "Congratulations!",
            bodyText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
        }
    } else if (type === "warning") {
        console.log("Warning")
        bannerStyle = {
            titleColor: "#92400E",
            bodyColor: "#B45309",
            backgroundColor: "#FFFBEB",
            typeText: "Attention",
            bodyText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
        }
    } else if (type === "error") {
        console.log("Error")
        bannerStyle = {
            titleColor: "#92400E",
            bodyColor: "#B45309",
            backgroundColor: "#FEF2F2",
            typeText: "There is a problem with your application",
            bodyText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
        }
    } else {
        console.log("Neutral")
        bannerStyle = {
            titleColor: "#1E40AF",
            bodyColor: "#1C51B9",
            backgroundColor: "#EFF6FF",
            typeText: "Update available",
            bodyText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
        }
    }

    return (
        <div
            className="inter"
            style={{
                    backgroundColor: bannerStyle.backgroundColor,
                    borderRadius: ".25rem",
                    padding: ".25rem .75rem",
                    margin: "0 .25rem",
                    width: "50%",
                    border: "none"
            }}
        >
            <p style={{fontWeight: 600, color: bannerStyle.titleColor}}>{bannerStyle.typeText}</p>
            <p style={{fontWeight: 400, color: bannerStyle.bodyColor}}>{type ? bannerStyle.bodyText : null}</p>
        </div>
    )
}

export default Banner

// type=false, 
// textColor="#1F2937", 
// backgroundColor="#F3F4F6", 
// typeText="Badge",
// bodyText="Message text here"