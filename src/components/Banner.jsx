import React from 'react'

const Banner = ({ type, title, desc }) => {
    let bannerStyle = {}

    if (type === "success") {
        bannerStyle = {
            icon: "../../public/success.svg",
            titleColor: "#065F46",
            bodyColor: "#047857",
            backgroundColor: "#ECFDF5",
            typeText: title,
            bodyText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
        }
    } else if (type === "warning") {
        bannerStyle = {
            icon: "../../public/warning.svg",
            titleColor: "#92400E",
            bodyColor: "#B45309",
            backgroundColor: "#FFFBEB",
            typeText: title,
            bodyText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
        }
    } else if (type === "error") {
        bannerStyle = {
            icon: "../../public/error.svg",
            titleColor: "#92400E",
            bodyColor: "#B45309",
            backgroundColor: "#FEF2F2",
            typeText: title,
            bodyText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
        }
    } else {
        bannerStyle = {
            icon: "../../public/neutral.svg",
            titleColor: "#1E40AF",
            bodyColor: "#1C51B9",
            backgroundColor: "#EFF6FF",
            typeText: title,
            bodyText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
        }
    }

    return (
        <div
            className="inter banner"
            style={{
                    backgroundColor: bannerStyle.backgroundColor,
                    borderRadius: ".25rem",
                    padding: ".25rem .75rem",
                    margin: ".5rem 0",
                    border: "none"
            }}
        >
            <div>
                <img src={bannerStyle.icon} alt="" />
            </div>
            <div>
                <p style={{fontWeight: 600, color: bannerStyle.titleColor, marginBottom: ".5rem"}}>{bannerStyle.typeText}</p>
                <p style={{fontWeight: 400, color: bannerStyle.bodyColor}}>{desc ? bannerStyle.bodyText : null}</p>
            </div>
        </div>
    )
}

export default Banner