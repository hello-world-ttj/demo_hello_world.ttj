import React from 'react'
import './About.scss';
import Avatar from './avatar.jpg'
function AboutMe() {
  return (
    <div className='container'>
      <div className="left--contents">
        <div className="color--div"></div>
        <div className="avatar--div">
          <img src={Avatar} alt="Avatar" />
          <h1 className="title--name">Tijo T Joseph</h1>
          <div class="line"></div>
          <h1 className="sub--title">Web developer</h1>
          <div className="social--media"></div>
        </div>
      </div>
      <div className="right--contents">
        <h1 className="main--title">Hello World</h1>
        <p className="paragraph">Here's who I am & what I do</p>
        <div className="buttons">
          <button className='resume'>Resume</button>
          <button className='projects'>Projects</button>
        </div>
        <p className="description">I'm a Tijo, web developer from India, Kerala. 
        I love to work in web developing. 
        Because I love to solve the design & 
        development problem and find easy and better solutions to solve them. 
        I always try my best to make a good user interface with the best user experience. 
        I'm also good at Wix and Wordpress.</p>
        <p className="codes">&lt;Web Developer who LOVES to CODE /&gt;</p>
      </div>
    </div>
  )
}

export default AboutMe