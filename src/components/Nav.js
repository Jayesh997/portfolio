import React from 'react'
import {BiChevronDownSquare} from 'react-icons/bi'
import {BiChevronUpSquare} from 'react-icons/bi'
import { useState } from 'react'
import './Nav.css'
import MediaQuery from 'react-responsive'
import Button1 from './Button1'
import { Link } from 'react-scroll'
import Logo from '../assets/icons/logo.png'
import { Squash as Hamburger } from 'hamburger-react'
import { act } from '@testing-library/react'

const Nav = () => {
  const [isOpen, setOpen] = useState(false)



    const [showMenu, setShowMenu] = useState(false)
   
    const [active, setActive] = useState(false) 
  return (
    <>
    <nav>

{/* -----------for desktop---------- */}

  <MediaQuery minWidth={700}>
    <div className='desktop-menu'>
      <Link to="home-id" spy={true} smooth={true} offset={-50} duration={500} ><img className='logo' src={Logo}/></Link>
    <ul >
      <li id='home' onClick={()=>setActive('home')} className={active=='home'? 'active':''}><Link to="home-id" spy={true} smooth={true} offset={-50} duration={500} >Home</Link></li>
      <li id='resume' onClick={()=>setActive('resume')} className={active=='resume'? 'active':''} ><Link to="resume-id" spy={true} smooth={true} offset={-50} duration={500} >Resume</Link></li>     
      <li id='about' onClick={()=>setActive('about')} className={active=='about'? 'active':''}  > <Link to="about-id" spy={true} smooth={true} offset={-50} duration={500} >About Me</Link></li>
    </ul>
   <Button1 value = {'Connect'}></Button1>
    </div>
   
  </MediaQuery>

{/* --------------for Mobile----------------- */}
    <MediaQuery minWidth={0} maxWidth={700}>
    
    <div className='mobile-menu'>
    <h1 className='hamburger-icon' onClick={()=>setShowMenu(!showMenu)}><Hamburger size={50} distance="lg" color="#489c8c" rounded direction="right" toggled={showMenu} toggle={setShowMenu} /></h1>
    <Link to="home-id" spy={true} smooth={true} offset={-50} duration={500} ><img className='logo-mobile' src={Logo}/></Link>

    <ul onClick={()=>setShowMenu(!showMenu)} className={showMenu?'ul-active': 'ul-inactive'}>
      <li   ><Link onClick={()=>setShowMenu(!showMenu)} to="home-id" spy={true} smooth={true} offset={-50} duration={500} >Home</Link></li>
      <li  ><Link onClick={()=>setShowMenu(!showMenu)}  to="resume-id" spy={true} smooth={true} offset={-50} duration={500} >Resume</Link></li>
      <li   ><Link onClick={()=>setShowMenu(!showMenu)}  to="about-id" spy={true} smooth={true} offset={-100} duration={500} >About Me</Link></li>
    
      <Button1 value = {'Connect'}></Button1>

    </ul>
    </div>
    </MediaQuery>  
         

    </nav>
    </>
  )
}

export default Nav