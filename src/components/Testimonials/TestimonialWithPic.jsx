import React from 'react'

const TestimonialWithPic = ({
    pic,
    text,
    name,
    title
}) => {
    return (
        <div className="test-wrapper">
            <div className="testimonial inter">
                <div className="test-img-container">
                    <img className="test-img" src={pic} alt="" />
                </div>
                <p className="test-text">{text}</p>
                <p className="title-lg">{name} / <span className="test-title">{title}</span></p>
                <div className="title-sm"><p>{name}</p><p className="test-title">{title}</p></div>
            </div>
        </div>
    )
}

export default TestimonialWithPic