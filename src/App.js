import react,{useState} from 'react';
import logo from './logo.svg';
import Question from './component/Question'
import Sec from './component/Sec'
import Thanks from './component/Thanks';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {



  return (
    <Router>
    <Switch>
    <div className="App">
      <Route exact path="/" children={<Question/>}/>
      <Route exact path="/sec" children={<Sec/>}/>
        <Route exact path="/thanks" children={<Thanks/>}/>
    </div>
    </Switch>
    </Router>
  );
}

export default App;
