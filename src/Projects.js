import React from 'react'
import Footer from './Footer'
import './Projects.scss'
import Data from './Data'

function Projects() {

  const projects = Data.map(data => {
    return (
      <div className="card">
        <div className="content">
          <div className="col--name">
          <div className="color"></div>
          <h2 className="name">{data.title}</h2>
          </div>
          <p className="language">{data.lang}</p>
          <p className="desc">{data.des}</p>
        {data.link && <a href={data.link} className='view'><img alt='icon' src="https://img.icons8.com/emoji/50/000000/eye-in-speech-bubble.png"/> View</a>} 
        </div>
        <div className="image">
        <img src={data.img} alt="site img" />
        </div>
      </div>
    )
  })


  return (
    <div className='project'>
      <div className="project--container">
        <h1> <span className='symbol'>&#10070;</span> Projects</h1>
        <div className="cards">
        {projects}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Projects