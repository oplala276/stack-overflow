import React from 'react'
import logo from '../../assets/logo.png'

const AboutAuth = () => {
  return (
    <div className='auth-container-1' style={{fontSize:"18px"}}>
      <img src={logo} alt="stack-overflow" width="250px"/>
      <p>
      Get unstuck - ask a question!</p>
      <p>Save your favorite posts, tags and filters </p>
      <p>Answer questions and earn reputation</p>
      <p style={{fontSize:"13px", color:"#666767"}}>
      Collaborate and share knowledge with a private group for FREE.<br/>
      <span style={{color:"#007ac6"}}>Get Stack Overflow for Teams free for up to 50 users.</span>
      </p>
    </div>
  )
}

export default AboutAuth
