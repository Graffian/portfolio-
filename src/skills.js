import {useEffect,useState} from 'react'
import styles from './index.css'
import {Link} from 'react-router-dom'
import notesAppProject from './photos/Screenshot_20250114-004042_GitHub.jpg'
import rpsProject from './photos/Screenshot_20250114-091752_GitHub.jpg'
import calcProject from './photos/Screenshot_20250114-092816_GitHub.jpg'
import fetchApiProject from './photos/Screenshot_20250114-090103_GitHub.jpg'
import chatAppProject from './photos/Screenshot_20250124-153454_GitHub.jpg'
import firebaseLogo from './photos/7a0673531eb5c727a6a774ad188cbfba.png'
import pollingWebsiteProject from './photos/Screenshot_20250131-114340_GitHub.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faJs } from '@fortawesome/free-brands-svg-icons'
import { faPlug } from '@fortawesome/free-solid-svg-icons'
function Skill(){
  const [githubInfo,getGithubInfo]=useState([])
  useEffect(()=>{
    const githubApi=async()=>{
      const username="Graffian"
      const url = `https://api.github.com/users/${username}/repos`
      const response = await fetch(url)
      const results = await response.json()
      console.log(results)
      getGithubInfo(results)
    };githubApi()
  },[])
  return(<div>
       <h1>AYUSH'S PORTFOLIO WEBSITE</h1>
      <nav className="navigation">
        <Link className="navElement" to="/">HOME</Link>
        <Link className="navElement" to="/skills">SKILLS AND PROJECTS</Link>
        <Link className="navElement" to="/contact">CONTACT</Link>
      </nav>
     
     
     
     
      <img className="notesAppProject" src={pollingWebsiteProject}/>
       <nav className="myskillsNav">
     <div className="myskillsDiv"> 
      <p className="skills">SKILLS USED: </p>
      <ul className="skillList">
        <li className="firebaseSkill"><img className="firebaseIcon" src={firebaseLogo}/><b>FIREBASE DATABASE</b></li>
        <li className="firebaseSkill"><img className="firebaseIcon" src={firebaseLogo}/><b>CRUD DATABASE HANDLING</b></li>
        <li className="reactSkill"><FontAwesomeIcon className="reactjsSkillIcon" icon={faReact} /><b>REACTJS</b></li>
        <li className="socketioSkill"><FontAwesomeIcon className="reactjsSkillIcon" icon={faPlug} /><b>SOCKET.IO INTEGRATION</b></li>
      </ul>
      </div>
      <div className="myLinksDiv"> 
      <p className="links">LINKS: </p>
      <ul className="myLinkList">
        <li className="linkofSkill"><FontAwesomeIcon href="http://github.com/Graffian/polling-website" className="githubLinkIcon" icon={faGithub} /><a href="http://github.com/Graffian/Notes-app-"><b>GITHUB</b></a></li>
        <li className="linkofSkill"><a href="https://notes-app-three-blue.vercel.app/"><b>DEPLOYMENT</b></a></li>
        </ul>
        </div>
      </nav>
      
      
        <img className="notesAppProject" src={notesAppProject}/>
       <nav className="myskillsNav">
     <div className="myskillsDiv"> 
      <p className="skills">SKILLS USED: </p><ul className="skillList">
        <li className="firebaseSkill"><img className="firebaseIcon" src={firebaseLogo}/><b>FIREBASE AUTHENTICATION</b></li>
        <li className="firebaseSkill"><img className="firebaseIcon" src={firebaseLogo}/><b>FIREBASE DATABASE</b></li>
        <li className="firebaseSkill"><img className="firebaseIcon" src={firebaseLogo}/><b>CRUD DATABASE HANDLING</b></li>
        <li className="reactSkill"><FontAwesomeIcon className="reactjsSkillIcon" icon={faReact} /><b>REACTJS</b></li>
      </ul>
      </div>
      <div className="myLinksDiv"> 
      <p className="links">LINKS: </p>
      <ul className="myLinkList">
        <li className="linkofSkill"><FontAwesomeIcon href="http://github.com/Graffian/" className="githubLinkIcon" icon={faGithub} /><a href="http://github.com/Graffian/WEATHER-APP-REACT"><b>GITHUB</b></a></li>
        <li className="linkofSkill"><a href="https://notes-app-three-blue.vercel.app/"><b> DEPLOYMENT</b></a></li>
        </ul>
        </div>
      </nav>
      
      
      
      <img className="notesAppProject" src={fetchApiProject}/>
       <nav className="myskillsNav">
     <div className="myskillsDiv"> 
      <p className="skills">SKILLS USED: </p>
      <ul className="skillList">
        <li className="firebaseSkill"><FontAwesomeIcon className="reactjsSkillIcon" icon={faJs} /><b>API HANDLING WITH JS</b></li>
       
        <li className="reactSkill"><FontAwesomeIcon className="reactjsSkillIcon" icon={faReact} /><b>REACTJS</b></li>
      </ul>
      </div>
      <div className="myLinksDiv"> 
      <p className="links">LINKS: </p>
      <ul className="myLinkList">
        <li className="linkofSkill"><FontAwesomeIcon href="http://github.com/Graffian/" className="githubLinkIcon" icon={faGithub} /><a href="http://github.com/Graffian/WEATHER-APP-REACT"><b>GITHUB</b></a></li>
        <li className="linkofSkill"><a href="#"><b>NO DEPLOYMENT</b></a></li>
        </ul>
        </div>
      </nav>
      
      
      
      
      <img className="notesAppProject" src={rpsProject}/>
       <nav className="myskillsNav">
     <div className="myskillsDiv"> 
      <p className="skills">SKILLS USED: </p>
      <ul className="skillList">
        <li className="firebaseSkill"><FontAwesomeIcon className="reactjsSkillIcon" icon={faJs} /><b>BASIC JS</b></li>
       <li className="firebaseSkill"><FontAwesomeIcon className="reactjsSkillIcon" icon={faJs} /><b>DOM MANIPULATION</b></li>
        
      </ul>
      </div>
      <div className="myLinksDiv"> 
      <p className="links">LINKS: </p>
      <ul className="myLinkList">
        <li className="linkofSkill"><FontAwesomeIcon href="http://github.com/Graffian/" className="githubLinkIcon" icon={faGithub} /><a href="http://github.com/Graffian/ROCK-PAPER-SCISSORS"><b>GITHUB</b></a></li>
        <li className="linkofSkill"><a href="#"><b>NO DEPLOYMENT</b></a></li>
        </ul>
        </div>
      </nav>
      
      
      
      
       <img className="notesAppProject" src={calcProject}/>
       <nav className="myskillsNav">
     <div className="myskillsDiv"> 
      <p className="skills">SKILLS USED: </p>
      <ul className="skillList">
        <li className="firebaseSkill"><FontAwesomeIcon className="reactjsSkillIcon" icon={faJs} /><b>JS BASIC ARRAY METHODS</b></li>
       <li className="firebaseSkill"><FontAwesomeIcon className="reactjsSkillIcon" icon={faJs} /><b>DOM MANIPULATION</b></li>
        
      </ul>
      </div>
      <div className="myLinksDiv"> 
      <p className="links">LINKS: </p>
      <ul className="myLinkList">
        <li className="linkofSkill"><FontAwesomeIcon href="http://github.com/Graffian/" className="githubLinkIcon" icon={faGithub} /><a href="http://github.com/Graffian/Basic-calculator-"><b>GITHUB</b></a></li>
        <li className="linkofSkill"><a href="#"><b>NO DEPLOYMENT</b></a></li>
        </ul>
        </div>
      </nav>
      
      
      <img className="notesAppProject" src={chatAppProject}/>
       <nav className="myskillsNav">
     <div className="myskillsDiv"> 
      <p className="skills">SKILLS USED: </p>
      <ul className="skillList">
        <li className="socketioSkill"><FontAwesomeIcon className="reactjsSkillIcon" icon={faPlug} /><b>SOCKET.IO INTEGRATION</b></li>
       
        <li className="reactSkill"><FontAwesomeIcon className="reactjsSkillIcon" icon={faReact} /><b>REACTJS</b></li>
      </ul>
      </div>
      <div className="myLinksDiv"> 
      <p className="links">LINKS: </p>
      <ul className="myLinkList">
        <li className="linkofSkill"><FontAwesomeIcon href="http://github.com/Graffian/" className="githubLinkIcon" icon={faGithub} /><a href="http://github.com/Graffian/chat-app"><b>GITHUB</b></a></li>
        <li className="linkofSkill"><a href="#"><b>NO DEPLOYMENT</b></a></li>
        </ul>
        </div>
      </nav>
      
      
      
    </div>
    
      
      )

}
export default Skill
