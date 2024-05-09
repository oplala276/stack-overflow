import React from 'react'
import '../../App.css'
import LeftSideBar from '../../components/leftSideBar/LeftSideBar'
import RightSideBar from '../../components/rightSideBar/RightSideBar'
import HomeMainBar from '../../components/homeMainBar/HomeMainBar'

const Questions = ({slideIn, handleSlideIn}) => {
  return (
    <div className='home-container-1'>
      <LeftSideBar slideIn={slideIn} handleSlideIn={handleSlideIn}/>
      <div className='home-container-2'>
        <RightSideBar/>
        <HomeMainBar />
      </div>
    </div>
  )
}

export default Questions
