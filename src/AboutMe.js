import React from 'react'
import {Link} from 'react-router-dom'
import './About.scss'
import Avatar from './avatar.jpg'
import IconButton from '@material-ui/core/IconButton'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import GitHubIcon from '@mui/icons-material/GitHub'
import Footer from './Footer'

function AboutMe() {
  return (
    <div className="about">
      <div className='container'>
        <div className="left--contents">
          <div className="color--div">
            <div className="avatar--div">
              <img src={Avatar} alt="Avatar" />
              <h1 className="title--name">Tijo T Joseph</h1>
              <div className="line"></div>
              <h1 className="sub--title">Web developer</h1>
              <div className="social--media">
                <IconButton>
                  <a href="https://github.com/hello-world-ttj"><GitHubIcon className='GitHub' /></a>
                </IconButton>
                <IconButton>
                  <a href="https://www.instagram.com/hello_world.ttj/"><InstagramIcon className='Instagram' /></a>
                </IconButton>
                <IconButton>
                  <a href="https://wa.me/918281977675"><WhatsAppIcon className='WhatsApp' /></a>
                </IconButton>
                <IconButton>
                  <a href="https://www.facebook.com/tijojoseph.sony/"><FacebookIcon className='Facebook' /></a>
                </IconButton>
                <IconButton>
                  <a href="https://twitter.com/TijoTJoseph1"><TwitterIcon className='Twitter' /></a>
                </IconButton>
                <IconButton>
                  <a href="https://www.linkedin.com/in/tijo-t-joseph/"><LinkedInIcon className='LinkedIn' /></a>
                </IconButton>
              </div>
            </div>
          </div>
        </div>


        <div className="right--contents">
          <h1 className="main--title">Hello World</h1>
          <p className="paragraph">Here's who I am & what I do</p>
          <div className="buttons">
            <Link to='/resume'>
            <button className='resume'>Resume</button>
            </Link>
            <Link to='/projects'>
            <button className='projects'>Projects</button>
            </Link>
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
      <Footer />
    </div>
  )
}

export default AboutMe