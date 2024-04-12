import React, {useEffect} from 'react'
import './navbar.css'
import { useSelector, useDispatch} from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import Search from '../../assets/search-solid.svg'
import Avatar from '../../components/avatar/Avatar'
import { setCurrentUser } from '../../actions/currentUser'
import {jwtDecode} from 'jwt-decode';

const Navbar = () => {
  var User = useSelector((state)=>(state.currentUserReducer))

  const dispatch = useDispatch()
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/');
    dispatch(setCurrentUser(null))
  }
  useEffect(() => {
    const token = User?.token;
    if (token) {
      const decodeToken = jwtDecode(token);
      // console.log(decodeToken.exp)
      if (decodeToken.exp * 1000 < new Date().getTime()) {
        handleLogout();
      }
    }
      dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
    }, [User?.token, dispatch])
  
  

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
            <Link to='/Profile' style={{ color: 'White', textDecoration: "none" }}><Avatar backgroundColor='#009dff' px='15px' py='10px' color='white' fontsize='10px' borderRadius='50%'>{User.result.name.charAt(0).toUpperCase() }</Avatar></Link>
              <button className='nav-item nav-links' onClick = {handleLogout}>Log Out</button>
            </>
          }
        </div>
    </nav>
  )
}

export default Navbar
