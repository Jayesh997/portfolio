import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import './Experience.css'
const Experience = () => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className='experience'>
      <section>
        <h3>EXPERIENCE</h3>
        <button className='btn' onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </section>
      {showInfo && <div>
          <div className='cherish'>
         
            <details>
                <summary>CHERISH JOURNEYS</summary> 
            <ul>
              <li> <div className='experience-designation'>
            <p>Software Engineer(Freelance)</p> <p>April 2021 - Present</p>
          </div></li>
                <li>Designed developed a responsive website using HTML5, CSS3 JavaScript.</li>
                <li>Hosted the website on Godaddy server.</li>
                <li>Maintaining and Management of website.</li>
                <li>http://cherishjourneys.com</li>
            </ul>
            </details>
        </div>

{/* ------------------IGL----------------- */}
           <div className='igl'>
         
            
            <details>
                <summary>INDRAPRASTHA GAS LIMITED</summary> 
            <ul>
              <li>
                 <div className='experience-designation'>
            <p>Deputy Manager</p> <p>August 2019 - Present</p>
          </div>
              </li>
                <li>Working in the IT Dept. and responsible for management of IGL’s internal websites and web applications.</li>
                <li> Experience of coordinating with third-party web development team for development of websites and related web components.</li>
                <li> Experience of working with NextGen Firewalls, Endpoint detection and Response solutions, Secure Web Gateway Solutions etc.</li>
                
            </ul>
            </details>
        </div>
      </div>       }
      
    </article>
  );
};

export default Experience;