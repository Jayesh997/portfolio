import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import './Projects.css'
const Projects = () => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className='projects'>
      <section>
        <h3>PROJECTS</h3>
        <button className='btn' onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </section>
      {showInfo && <div>

        {/* ----------portfolio website---------- */}

        <div className='portfolio'>

            <details>
                <summary>Portfolio Website</summary> 
            <ul>
                <li><a target='_blank' href='https://jayesh997.github.io/portfolio/'>https://jayesh997.github.io/portfolio/</a></li>
                <li>Created a portfolio website using ReactJS, CSS3 and JavaScript.</li>
            </ul>
            </details>
        </div>
        {/* ----------memeGen----------- */}
          <div className='meme-gen'>

            <details>
                <summary>MemeGen.</summary> 
            <ul>
                <li><a target='_blank' href='https://jayesh997.github.io/meme-gen/'>https://jayesh997.github.io/meme-gen/</a></li>
                <li>Created a meme generator website using ReactJS, CSS3 and JavaScript to make random memes.</li>
            </ul>
            </details>
        </div>

{/* ------------------SketchSpace----------------- */}
           <div className='sketc-space'>

            <details>
                <summary>SketchSpace.</summary> 
            <ul>
                <li><a target='_blank' href='https://jayesh997.github.io/SketchSpace/index.html'>https://jayesh997.github.io/SketchSpace/index.html</a></li>
                <li>Created a Blog/ personal website using HTML5, CSS3 JavaScript to keep track of Sketches and drawings I made.</li>
            </ul>
            </details>
        </div>
      </div>       }
      
    </article>
  );
};

export default Projects;