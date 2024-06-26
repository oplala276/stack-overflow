import './navbar.css'
import React, {useEffect} from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import Search from '../../assets/search-solid.svg'
import Avatar from '../avatar/Avatar'
import Bars from '../../assets/bars-solid.svg'
import { setCurrentUser } from '../../actions/currentUser'
import {jwtDecode} from 'jwt-decode';

const Navbar = ({ handleSlideIn }) => {
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
      if (decodeToken.exp * 1000 < new Date().getTime()) {
        handleLogout();
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
    // eslint-disable-next-line
    }, [User?.token, dispatch])
  

  return (
    <nav className='main-nav'>
      <div className="navbar">
      <button className="slide-in-icon" onClick={() => handleSlideIn()}>
          <img src={Bars} alt="bars" width="15" />
        </button>
        <Link to = '/' className='nav-item nav-logo'>
          <img src={logo} alt = 'logo'/>
        </Link>
          <Link to ='/' className = 'nav-item nav-btn res-nav'>About</Link>
          <Link to ='/' className = 'nav-item nav-btn res-nav'>Products</Link>
          <Link to ='/' className = 'nav-item nav-btn res-nav'>For Teams</Link>
          <form >
            <input type='text' placeholder='Search...'/>
            <img src={Search} alt="search" width = '18' className='search-icon'/>
          </form>
          {User===null?
            <Link to ='/Auth' className='nav-item nav-links'>Log in</Link>:
            <>
            <Avatar backgroundColor='#009dff' px='15px' py='10px' color='white' fontsize='10px' borderRadius='50%'><Link to={`/Users/${User?.result?._id}`} style={{ color: 'White', textDecoration: "none" }}>{User.result.name.charAt(0).toUpperCase() }</Link></Avatar>
              <button className='nav-item nav-links' onClick = {handleLogout}>Log Out</button>
            </>
          }
        </div>
    </nav>
  )
}

export default Navbar
