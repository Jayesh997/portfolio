import React from 'react'
import './AboutMe.css'
import aboutMe from '../assets/images/2Capture.JPG'
import Button1 from '../components/Button1'



const AboutMe = () => {
  return (
    <div className='about' id='about-id'>
      <div className='about-container'>
      <div className='about-text'>
        <h1>Freelance Software Engineer and Web Developer based in Delhi, India.</h1>
        <h2>Experienced in designing and developing custom websites.</h2>
        <Button1 value = {'Hire Me'}></Button1>
        </div>
        <img src={aboutMe}/>
        </div>
    </div>
  )
}

export default AboutMe