import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import './Skills.css'
const Skills = () => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className='skills'>
      <section>
        <h3>SKILLS</h3>
        <button className='btn' onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </section>
      {showInfo && <div>
        {/* ----------memeGen----------- */}
          <div className='skills-text'>
              <p>JavaScript, HTML5, CSS3, Git, ReactJS.</p>
          
        </div>


      </div>       }
      
    </article>
  );
};

export default Skills;