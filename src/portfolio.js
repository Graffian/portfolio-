import {Link} from 'react-router-dom'
import styles from './index.css'
import pfp from './photos/IMG20250104161228.jpg'
import tsLogo from './photos/typescript.png'
import firebaseLogo from './photos/7a0673531eb5c727a6a774ad188cbfba.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons'
import { faJs } from '@fortawesome/free-brands-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faNode } from '@fortawesome/free-brands-svg-icons'

function Portfolio(){
  
  return(
    <div>
      <h1>AYUSH'S PORTFOLIO WEBSITE</h1>
      <nav className="navigation">
        <Link className="navElement" to="/">HOME</Link>
        <Link className="navElement" to="/skills">SKILLS AND PROJECTS</Link>
        <Link className="navElement" to="/contact">CONTACT</Link>
      </nav>
      <nav className="aboutMeBox">
      <div className="profilePic"> <img className="profileImage" src={pfp}/></div>
      <div className="aboutMe">
        <ul>
          <li className="web">
            <b><FontAwesomeIcon className="icon" icon={faCode} />18|WEB DEV</b>
          </li>
          <li className="html">
            <b><FontAwesomeIcon className="icon" icon={faHtml5} />HTML</b>
          </li>
          <li className="css">
            <b><FontAwesomeIcon className="icon" icon={faCss3Alt} />CSS</b>
          </li>
          <li className="js">
            <b><FontAwesomeIcon className="icon" icon={faJs} />JAVASCRIPT</b>
          </li>
          <li className="react">
            <b><FontAwesomeIcon className="icon" icon={faReact} />REACT JS</b>
          </li>
          <li className="ts">
            <b><img className="tsIcon" src={tsLogo}/>TYPESCRIPT</b>
          </li>
          <li className="firebase">
            <b><img className="firebaseIcon" src={firebaseLogo}/>FIREBASE</b>
          </li>
          <li className="node">
            <b><FontAwesomeIcon className="icon" icon={faNode} />NODE JS/EXPRESS JS</b>
          </li>
        </ul>
      </div>
      </nav>
      <nav className="mydesc">
     <div className="mydesc"> 
     <ul >
    <li > <h3><h1 className="myName">HI there 👋 i'm <b> Ayushkant behera</b></h1> i'm a <b>18 year old <b>FULL STACK WEB DEV</b> college student in india</b> my interests are getting deep into web dev and AI integration i'm currently on the path of learning <i><b>BLOCKCHAIN</b></i>. As of now i use firebase for backend purposes and deploy my apps via Vercel , i'm currently  <i><b> learning about CRYPTO & BLOCKCHAIN!!</b></i></h3></li>
    <h3 className="openTo"> I look forward to any offers that include <b>revamping/redsigning</b> Your websites or if your looking for any idea on how you could add more <b>functionality to website</b></h3>
      </ul>
      </div>
     </nav>
    </div>
    )
  
}
export default Portfolio