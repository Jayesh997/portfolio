import React from 'react'
import './Footer.css'
import InstagramIcon from '../assets/icons/instagram.png'
import LinkedInIcon from '../assets/icons/linkedin.png'
import GithubIcon from '../assets/icons/github.png'
import WhatsappIcon from '../assets/icons/whatsapp.png'




const Footer = () => {
  return (
    <div className='footer'>
       <div>
        {/* <h2>Follow me on</h2> */}
        {/* <a href='https://www.instagram.com/jayyy_997/' target='_blank'><img className='socialmedia-icons' src={InstagramIcon}/></a> */}
        <a href='https://www.linkedin.com/in/jayesh-gupta-b84619217' target='_blank'><img className='socialmedia-icons' src={LinkedInIcon}/></a>
        <a href='https://github.com/Jayesh997' target='_blank'><img className='socialmedia-icons' src={GithubIcon}/></a>
        <a href='https://wa.me/9999222523' target='_blank'><img className='socialmedia-icons' src={WhatsappIcon}/></a>
        </div>
    </div>
  )
}

export default Footer