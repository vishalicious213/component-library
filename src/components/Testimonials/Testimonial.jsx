import React from 'react'

const Testimonial = ({
    pic,
    logo,
    text,
    name,
    title
}) => {
    return (
        <div className="testimonial inter">
            <img src={pic} alt="" />
            <img className="test-logo" src={logo} alt="" />
            <p className="test-text">{text}</p>
            <p>{name} / {title}</p>
        </div>
    )
}

export default Testimonial