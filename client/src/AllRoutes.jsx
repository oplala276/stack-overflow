import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'
import Questions from './pages/Questions/Questions'
import AskQuestions from './pages/AskQuestions/AskQuestions'
import DisplayQuestions from './pages/Questions/DisplayQuestions'
import Tags from './pages/Tags/Tags'
import Users from "./pages/Users/Users";
import UserProfile from './pages/UserProfile/UserProfile'


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
      <Route
        path="/Users"
        Component={Users}
      />
      <Route
        path="/Users/:id"
        Component={UserProfile}
      />
    </Routes>
  )
}

export default AllRoutes