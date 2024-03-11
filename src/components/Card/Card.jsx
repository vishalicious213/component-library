import React from 'react'

const Card = ({
    icon="/brand-icon.svg", 
    title="Easy Deployment", 
    desc="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."
}) => {
    return (
        <div>
            <div className='card inter'>
                <img src={icon} alt="" />
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default Card