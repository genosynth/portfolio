import React from 'react'
import githubLogo from '../projectImages/github.png'
import linkedinLogo from '../projectImages/linkedin.png'
import { GoMarkGithub,  } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";


function Menu() {


  return (<div >
      

<nav className='topnav'>
  <h1>Jean's Portfolio</h1>
  
  <a href="/portfolio/">Home</a>
  <a href="/portfolio/projects/">Projects</a>
  
  <a href="https://github.com/genosynth" target="_blank"> <GoMarkGithub/></a>
  <a href="https://www.linkedin.com/in/jean-pierre-genovese-1bbbb6231/" target="_blank"> <BsLinkedin/> </a>
  
</nav>
  </div>
  )
}

export default Menu