import React from 'react'

const TestimonialWithPic = ({
    pic,
    text,
    name,
    title
}) => {
    return (
        <div className="test-wrapper blue">
            <div className="testimonial inter blue">
                <div className="test-img-container">
                    <img className="test-img" src={pic} alt="" />
                </div>
                <img src="/quote.svg" alt="" />
                <p className="test-text">{text}</p>
                <p className="title-lg">{name} / <span className="test-title">{title}</span></p>
                <div className="title-sm"><p>{name}</p><p className="test-title">{title}</p></div>
            </div>
        </div>
    )
}

export default TestimonialWithPic