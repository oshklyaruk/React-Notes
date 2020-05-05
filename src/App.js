import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import './App.sass';
import NoteList from "./containers/NoteList/NoteList";
import SignIn from "./containers/SignIn/SignIn";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" render={() => (
            <Redirect to="/signin"/>
          )}/>
          <Route path="/signin">
            <SignIn/>
          </Route>
          <Route path="/list">
            <NoteList/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
