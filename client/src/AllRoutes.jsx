import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home'
import Auth from './pages/auth/Auth'
import Questions from './pages/questions/Questions'
import AskQuestions from './pages/askQuestions/AskQuestions'
import DisplayQuestions from './pages/questions/DisplayQuestions'
import Tags from './pages/tags/Tags'
// import Profile from './pages/profile/Profile'

const AllRoutes = () => {
  return (
    <Routes>
      <Route exact path = '/' Component={Home}/>
      <Route exact path = '/Auth' Component={Auth}/>
      <Route exact path='/questions' Component={Questions} />
      <Route exact path='/Askquestions' Component={AskQuestions} />
      <Route path='questions/:id' Component={DisplayQuestions} />
      <Route path='questions/questions/:id' Component={DisplayQuestions} />
      <Route path='Tags' Component={Tags} />
    </Routes>
  )
}

export default AllRoutes