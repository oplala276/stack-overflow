import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home'
import Auth from './pages/auth/Auth'
// import Profile from './pages/profile/Profile'

const AllRoutes = () => {
  return (
    <Routes>
      <Route exact path = '/' Component={Home}/>
      <Route exact path = '/Auth' Component={Auth}/>
      {/* <Route exact path = '/Profile' Component={Profile}/> */}
    </Routes>
  )
}

export default AllRoutes