import React from 'react'

const Testimonial = ({
    pic,
    logo,
    text,
    name,
    title
}) => {
    return (
        <div>
            <img src={pic} alt="" />
            <img src={logo} alt="" />
            <p>{text}</p>
            <p>{name} / {title}</p>
        </div>
    )
}

export default Testimonial