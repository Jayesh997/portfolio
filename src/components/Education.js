import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import './Education.css'
const Education = () => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className='education'>
      <section>
        <h3>EDUCATION</h3>
        <button className='btn' onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </section>
      {showInfo && <div>
                <details>
                <summary>Netaji Subhash Institute of Technology</summary> 
            <ul>
                <li> B.E Mechanical Engineering</li>
                <li> Aug 2015 - Jun 2019</li>
            </ul>
            </details>
          <details>
                <summary>SSLT Gujarat Sr. Sec. School,</summary> 
            <ul>
                <li>  Secondary Education (Science)</li>
                <li>  April2013 - March 2014</li>
            </ul>
            </details>
          <details>
                <summary>NJA Public School</summary> 
            <ul>
                <li> Metriculate</li>
                <li> April2011 - March 2012</li>
            </ul>
            </details>
      </div>       }
      
    </article>
  );
};

export default Education;