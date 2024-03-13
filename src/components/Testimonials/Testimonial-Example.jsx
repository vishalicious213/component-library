import React from 'react'
import Testimonial from './Testimonial'
import TestimonialWithPic from './TestimonialWithPic'

const TestimonialExample = () => {
    return (
        <div className="container">
            <h2 className="marker">Testimonials</h2>
            <h3 className="marker">Without image</h3>
            <Testimonial
                logo="/logo.svg"
                text="“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”"
                name="May Andersons"
                title="Workcation CTO"
            />

            <br />

            <h3 className="marker">With image</h3>
            <TestimonialWithPic
                pic="/avatar.png"
                text="“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”"
                name="May Andersons"
                title="Workcation CTO"
            />

        </div>
    )
}

export default TestimonialExample