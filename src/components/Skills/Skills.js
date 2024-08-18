import React from 'react'
import './Skills.css';
import cursorIcon from '../../Assets/cursorIcon.png';
import serverIcon from '../../Assets/serverIcon.png';
import uiIcon from '../../Assets/uiIcon.png';

const Skills = () => {
  return (
    <section id='skills'>
    <span className='skillTitle'>About Me</span>
    <div className='skillBars'>
        <div className='skillBar'>
            <img src={cursorIcon} className='skillBarImg'/>
            <div className='skillBarText'>
                <h2>Front-End Developement</h2>
                <p>I'm a Front-end developer with experience in building responsive and optimized sites.</p>
            </div>
    </div>
    <div className='skillBar'>
        <img src={serverIcon} className='skillBarImg'/>
            <div className='skillBarText'>
                <h2>Backend-Development</h2>
                <p>I have experience developing fast and optimised back-end systems and APIs.</p>
            </div>
    </div>
     <div className='skillBar'>
        <img src={uiIcon} className='skillBarImg'/>
            <div className='skillBarText'>
                <h2>UI-Designing</h2>
                <p>I have Designed multiple landing pages and created and have created design systems as well.</p>
            </div>
     </div>
    </div>
    </section>
   
  )
}

export default Skills
