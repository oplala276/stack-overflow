import React from 'react'
import LeftSideBar from '../../components/leftSideBar/LeftSideBar'
import RightSideBar from '../../components/rightSideBar/RightSideBar'
import HomeMainBar from '../../components/homeMainBar/HomeMainBar'
import '../../App.css'

const Home = () => {
  return (
    <div className='home-container-1'>
      <LeftSideBar />
      <div className='home-container-2'>
        <HomeMainBar />
        <RightSideBar/>
      </div>
    </div>
  )
}

export default Home
