import styles from './index.css'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
function Contact(){
  
  return(
    <div>
       <h1>AYUSH'S PORTFOLIO WEBSITE</h1>
      <nav className="navigation">
        <Link className="navElement" to="/">HOME</Link>
        <Link className="navElement" to="/skills">SKILLS AND PROJECTS</Link>
        <Link className="navElement" to="/contact">CONTACT</Link>
      </nav>
      <nav className="mycontactnav">
     <div className="mycontactdiv"> 
     <p>CONTACT ME:</p>
     <ul >
       
       <li className="LinkedinContact"><FontAwesomeIcon icon={faLinkedin} /><a className="LinkedinLink"href="http://linkedin.com/in/ayushkant-behera-18a860279"><b>LINKEDIN</b></a></li>
          <li className="instagramContact"><FontAwesomeIcon icon={faInstagram} /><a className="instagramLink"href="http://instagram.com/ayushunderarrest"><b>INSTAGRAM</b></a></li>
          <li className="githubContact"><FontAwesomeIcon icon={faGithub} /><a className="githubLink"href="http://github.com/Graffian"><b>GITHUB</b></a></li>
          <li className="twitterContact"><FontAwesomeIcon icon={faXTwitter} />
          <a className="twitterLink" href="https://x.com/ayushh4506">
            <b>TWITTER</b>
            </a>
            </li>
          <li className="discordContact"><FontAwesomeIcon icon={faDiscord} />
          <a className="discordLink" href="https://discordapp.com/ayushhhh6982">
            <b>DISCORD</b>
          </a>
        
          </li>
          
            
           
          

    
      </ul>
      </div>
     </nav>
   <nav className="mycontactnav">
     <div className="mycontactdiv"> 
     <p>CONTACT ME:</p>
     <ul >
       
      <li className="linkofSkill"><h3><h1 className="myName">WHAT AM I DOING CURRENTLY? <b>I'M Currently focusing on building more and more projects with REACTJS/NODEJS/EXPRESSJS</b></h1> </h3></li>
      <li className="reachmeout">ALSO REACH ME OUT ON:</li>
      <li><FontAwesomeIcon className="emailLogo" icon={faEnvelope} /><a className="emailLink" href="mailto:rudrabehera2006@gmail.com">rudrabehera2006@gmail.com</a></li>
      
      <li><FontAwesomeIcon className="userIcon" icon={faUser} /><a className="numberLink" href="intent://send/919124706434#Intent;scheme=smsto;package=com.whatsapp;action=android.intent.action.SENDTO;end">wa.me/+919124706434</a></li>
            
           
          

    
      </ul>
      </div>
     </nav>
        
        
        
        
        
        </div>
    )
}
export default Contact