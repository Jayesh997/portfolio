import React from 'react'
import './Home.css'
import home from '../assets/images/Capture.JPG'
import Button1 from '../components/Button1'
import InstagramIcon from '../assets/icons/instagram.png'
import LinkedInIcon from '../assets/icons/linkedin.png'
import GithubIcon from '../assets/icons/github.png'
import WhatsappIcon from '../assets/icons/whatsapp.png'
import Waves from '../components/Waves'
import MediaQuery from 'react-responsive'

const Home = () => {
  return (
    <div className='home' id='home-id'>
      <div className='home-container'>
      <div className='home-text'>
        <h1 className='title'>Hi! I am <span>Jayesh.</span></h1>
        <h2>A Software Engineer who makes UX rich performant websites and web applications.</h2>
        {/* <a href='https://www.instagram.com/jayyy_997/' target='_blank'><img className='socialmedia-icons' src={InstagramIcon}/></a> */}
        <a href='https://www.linkedin.com/in/jayesh-gupta-b84619217' target='_blank'><img className='socialmedia-icons' src={LinkedInIcon}/></a>
        <a href='https://github.com/Jayesh997' target='_blank'><img className='socialmedia-icons' src={GithubIcon}/></a>
        <a href='https://wa.me/9999222523' target='_blank'><img className='socialmedia-icons' src={WhatsappIcon}/></a>
        </div>
        <img src={home}/>
        </div>
         {/* <MediaQuery minWidth={950}> */}
         <Waves></Waves>
         {/* </MediaQuery> */}
    </div>
  )
}

export default Home