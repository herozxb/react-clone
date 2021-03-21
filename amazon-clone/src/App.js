import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import Login from './Login'
import { auth } from './Firebase'
import { useStateValue } from './StateProvider'
import './App.css';


function App() {

  const [ state, dispatch ] = useStateValue();

  useEffect(()=>{
    //only run once when the component loads
    auth.onAuthStateChanged( authUser => {
      //console.log("user",authUser);

      if (authUser) 
      {
        dispatch({
          type : 'SET_USER',
          user: authUser,
        })
      } 
      else
      {
        dispatch({
          type : 'SET_USER',
          user: null,
        })

      };
    })
  },[])

  return (
  <Router>
    <div className="App">
      
      <Switch>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
