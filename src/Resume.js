import React from 'react'
import Footer from './Footer'
import './Resume.scss'

function Resume() {
  return (
    <div className='Resume'>
      <div className="resume--container">
        <h1 className="name">Tijo T Joseph</h1>
        <a href="https://github.com/hello-world-ttj">github.com/hello-world-ttj</a>
        <p className="codes">&lt;Web Developer who LOVES to CODE /&gt;</p>

        <h2 className='head'>Skills</h2> <hr />

        <div className="skills">
          <div className="skill--group">
            <h3>Languages & Libraries</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React Js</li>
              <li>C</li>
              <li>C++</li>
            </ul>
          </div>

          <div className="skill--group">
            <h3>Applications</h3>
            <ul>
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>Photoshop</li>
              <li>React Js</li>
              <li>Figma</li>
            </ul>
          </div>

          <div className="skill--group">
            <h3>Platforms</h3>
            <ul>
              <li>GitHub</li>
              <li>WordPress</li>
              <li>Wix</li>
            </ul>
          </div>  
        </div>

        <h2 className='head'>Education</h2> <hr />
        <div className="education">
            <div className="university">
              <h1>MG University</h1>
              <p>2021 - Present</p>
            </div>

            <div className="sub">
              <h1>Master of Computer Application</h1>
            </div>

            <div className="details">
              <h4>Mar Athanasios College for Advanced Studies</h4>
              <p>Thiruvalla</p>
            </div>
            </div>
            
            <div className="education">
            <div className="university">
              <h1>MG University</h1>
              <p>2018 - 2021</p>
            </div>

            <div className="sub">
              <h1>Bachelor of Computer Application</h1>
            </div>

            <div className="details">
              <h4>Catholicate College</h4>
              <p>Pathanamthitta</p>
            </div>

          </div>
      </div>
      <hr />
      <Footer />
    </div>
  )
}

export default Resume