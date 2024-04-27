import React from 'react'
import LeftSideBar from '../../components/leftSideBar/LeftSideBar'
import RightSideBar from '../../components/rightSideBar/RightSideBar'
import Questiondetails from './Questiondetails'
import '../../App.css'

const DisplayQuestions = () => {
  return (
    <div className="home-container-1">
    <LeftSideBar />
    <div className="home-container-2">
      <Questiondetails />
      <RightSideBar />
    </div>
  </div>
  )
}

export default DisplayQuestions
