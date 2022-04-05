import React, { useState } from 'react';

import Experience from '../components/Experience';
import Projects from '../components/Projects';
import resume from '../assets/images/1Capture.JPG'
import './Resume.css'
import Skills from '../components/Skills';
import Education from '../components/Education';

function Resume() {
  
  return (
    <div className='resume-container' id='resume-id'>
      <div className='resume'>
       <img src={resume}></img>
        <section className='resume-text'>
          <Experience></Experience>
          <Projects/>
          <Education/>
          <Skills/>
        </section>
      </div>
    </div>
  );
}

export default Resume;