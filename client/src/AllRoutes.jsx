import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home'
import Auth from './pages/auth/Auth'
import Questions from './pages/questions/Questions'
import AskQuestions from './pages/askQuestions/AskQuestions'
import DisplayQuestions from './pages/questions/DisplayQuestions'
import Tags from './pages/tags/Tags'
import Users from "./pages/users/Users";
import UserProfile from './pages/UserProfile/UserProfile'


const AllRoutes = ({ slideIn, handleSlideIn }) => {
  return (
    <Routes>
      <Route path = '/' element={<Home slideIn={slideIn} handleSlideIn={handleSlideIn} />}/>
      <Route path = '/Auth' element={<Auth/>}/>
      <Route path='/questions' element={<Questions slideIn={slideIn} handleSlideIn={handleSlideIn} />} />
      <Route path='/Askquestions' element={<AskQuestions/>} />
      <Route path='/questions/:id' element={<DisplayQuestions slideIn={slideIn} handleSlideIn={handleSlideIn}/>} />
      <Route path='/questions/questions/:id' element={<DisplayQuestions slideIn={slideIn} handleSlideIn={handleSlideIn}/>} />
      <Route path='/Tags' element={<Tags slideIn={slideIn} handleSlideIn={handleSlideIn} />} />
      <Route
        path="/Users"
        element={<Users slideIn={slideIn} handleSlideIn={handleSlideIn} />}
      />
      <Route
        path="/Users/:id"
        element={<UserProfile slideIn={slideIn} handleSlideIn={handleSlideIn} />}
      />
    </Routes>
  )
}

export default AllRoutes