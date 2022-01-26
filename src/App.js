import './App.css';
import React, {useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,Switch, Route,} from "react-router-dom";

const App =()=> {
  const pageSize=8;
 const apiKey= process.env.REACT_APP_NEWS_API

  const [progress ,setProgress]=useState(0)
  
 
    return (
      <div>
         <LoadingBar
         height={3}
        color='#f11946'
        progress={progress}
         />
        <Router>
        <Navbar/>
         <Switch>
          <Route exact path="/"><News setProgress={setProgress} apiKey={apiKey} key="Home" pagesize={pageSize} country="in" category="General"/></Route>
          <Route exact path="/general"><News setProgress={setProgress} apiKey={apiKey} key="general" pagesize={pageSize} country="in" category="General"/></Route>
          <Route exact path="/Business"><News setProgress={setProgress} apiKey={apiKey} key="buisness" pagesize={pageSize} country="in" category="Business"/></Route>
          <Route exact path="/Entertainment"><News setProgress={setProgress} apiKey={apiKey} key="entertainment" pagesize={pageSize} country="in" category="Entertainment"/></Route>
          <Route exact path="/Health"><News setProgress={setProgress} apiKey={apiKey} key="health" pagesize={pageSize} country="in" category="Health"/></Route>
          <Route exact path="/Sports"><News setProgress={setProgress} apiKey={apiKey} key="sports" pagesize={pageSize} country="in" category="Sports"/></Route>
          <Route exact path="/Science"><News setProgress={setProgress} apiKey={apiKey} key="science" pagesize={pageSize} country="in" category="Science"/></Route>
          <Route exact path="/Technology"><News setProgress={setProgress} apiKey={apiKey} key="technology" pagesize={pageSize} country="in" category="Technology"/></Route>
          </Switch>
        </Router>
      </div>
    )
  }

export default App;


