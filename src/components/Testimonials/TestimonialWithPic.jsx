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
                <div><p>{name}</p><p>{title}</p></div>
            </div>
        </div>
    )
}

export default TestimonialWithPic