import React from 'react';
import './Experience.css';
import projectImg from '../../Assets/project.png'

const Experience = () => {
  return (
    <div id='containerProject'>
     <h1 className='projectTitle'>Projects</h1>
    <div className='projects'>
    <div className='project'>
        <h4>Project 1</h4>
        <img src={projectImg}  id="projectImg"/>
        <h4>Youtube Clone</h4>
        <p className='description'>

        this project made to learn the languages by building an app.
        </p>
     </div>
     <div className='project'> 
        <h4>Project 2</h4>
        <img src={projectImg}  id="projectImg"/>
        <h4>Expense Tracker</h4>
        <p className='description'>

this project made to learn the languages by building an app.
        </p>
       
     </div>
     <div className='project'>
        <h4>Project 3</h4>
        <img src={projectImg}  id="projectImg"/>
        <h4>To-do App</h4>
        <p className='description'>
        this project made to learn the languages by building an app.
        </p>
     </div>
    </div>

    </div>
  )
}

export default Experience
