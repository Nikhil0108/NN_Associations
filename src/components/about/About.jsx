import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='NN Associates' subtitle='Check out our company dream' />

            <p>At NN Associates, we believe that finding the perfect space isn't just about bricks and mortar; it's about fulfilling dreams and aspirations. With a legacy of excellence and a commitment to personalized service, we're more than just a real estate company – we're your dedicated partners in your property journey.</p>
            <p>Founded on the principles of integrity, professionalism, and transparency, NN Associates has been a beacon of trust in the real estate landscape for [X number of years]. Our team of seasoned experts brings together a wealth of knowledge and experience to offer you unparalleled guidance and support, whether you're buying, selling, or investing in property.
            </p>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
