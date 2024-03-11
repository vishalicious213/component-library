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
            <p>{text}</p>
            <p>{name} / {title}</p>
        </div>
    )
}

export default Testimonial