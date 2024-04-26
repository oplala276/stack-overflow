import {BrowserRouter as Router} from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';

import AllRoutes from './AllRoutes';
import {fetchAllUsers} from './actions/users'
import { fetchAllQuestions } from './actions/question';
import Navbar from './components/navbar/Navbar'

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers());
  }, [dispatch])
  


  return (
    <div className="App">
      <Router>
        <Navbar/>
        <AllRoutes/>
      </Router>
    </div>
  );
}

export default App;
