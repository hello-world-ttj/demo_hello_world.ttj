import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Footer.scss'
function Footer() {
    return (
        <footer className='footer'>
            <div className="copyright">
                &copy; <a href="/">hello_world.ttj</a>
            </div>
            <div className="contacts">
                <div className="call--div">
                    <p className="title">Call</p>
                    <p className="call"><a href="tel:918281977675">8281977675</a></p>
                </div>
                <div className="email--div">
                    <p className="title">Email</p>
                    <p className="email"><a href="mailto: tijotjoseph003@gmail.com">tijotjoseph003@gmail.com</a></p>
                </div>
                <div className="social">
                    <p className="title">Follow</p>
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
        </footer>
    )
}

export default Footer