import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Register from './components/Register'
import Login from './components/Login'
import Landing from './components/Landing';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Landing} />
      <Route path="/signup" component={Register} />
      <Route path="/login" component={Login} />
    </Router>
  );
}

export default App;
