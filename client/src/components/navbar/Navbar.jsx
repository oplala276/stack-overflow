import React, {useEffect} from 'react'
import './navbar.css'
import { useSelector, useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import Search from '../../assets/search-solid.svg'
import Avatar from '../../components/avatar/Avatar'
import { setCurrentUser } from '../../actions/currentUser'
// import {currentUserReducer} from '../../reducers/currentUser'
// import Button from '../../components/button/Button'

const Navbar = () => {
  var User = useSelector((state)=>(state.currentUserReducer))

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
  }, [dispatch])
  

  return (
    <nav className='main-nav'>
      <div className="navbar">
        <Link to = '/' className='nav-item nav-btn'>
          <img src={logo} alt = 'logo'/>
        </Link>
          <Link to ='/' className = 'nav-item nav-btn'>About</Link>
          <Link to ='/' className = 'nav-item nav-btn'>Products</Link>
          <Link to ='/' className = 'nav-item nav-btn'>For Teams</Link>
          <form >
            <input type='text' placeholder='Search...'/>
            <img src={Search} alt="search" width = '18' className='search-icon'/>
          </form>
          {User===null?
            <Link to ='/Auth' className='nav-item nav-links'>Log in</Link>:
            <>
              <Link to='/Profile' style={{color:'White', textDecoration:"none"}}><Avatar backgroundColor='#009dff' px='15px' py = '10px' color='white' fontsize='10px' borderRadius='50%'>O</Avatar></Link>
              <button className='nav-item nav-links'>Log Out</button>
            </>
          }
        </div>
    </nav>
  )
}

export default Navbar
