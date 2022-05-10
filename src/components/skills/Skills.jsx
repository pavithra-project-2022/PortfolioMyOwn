import React from 'react'
import './Skills.scss'

export default function Skills() {
  return (
      <div className='skills' id='skills'>
    <div className='skill'>
        <h2>My Skills</h2>
        <li><h5>HTML</h5><span className='bar'><span className='html'></span></span></li>
        <li><h5>CSS</h5><span className='bar'><span className='css'></span></span></li>
        <li><h5>Bootstrap</h5><span className='bar'><span className='bootstrap'></span></span></li>
        <li><h5>Java Script</h5><span className='bar'><span className='javascript'></span></span></li>
        <li><h5>DOM</h5><span className='bar'><span className='dom'></span></span></li>
        <li><h5>React</h5><span className='bar'><span className='react'></span></span></li>
        <li><h5>Node JS</h5><span className='bar'><span className='node'></span></span></li>
        <li><h5>Mongo DB</h5><span className='bar'><span className='mongo'></span></span></li>
        <li><h5>My SQL</h5><span className='bar'><span className='sql'></span></span></li>
    </div>
    </div>
  )
}
