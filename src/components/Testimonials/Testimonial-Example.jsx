import React from 'react'
import Testimonial from './Testimonial'

const TestimonialExample = () => {
    return (
        <div className="container">
            <h2 className="marker">Testimonials</h2>
            <Testimonial
                    // pic="/avatar.png"
                    logo="/logo.svg"
                    text="“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”"
                    name="May Andersons"
                    title="Workcation CTO"
            />
        </div>
    )
}

export default TestimonialExample