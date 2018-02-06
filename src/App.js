import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import logo from './logo.svg';
//import styles from './css/App.scss';

// Pages
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import ExcelImport from './pages/ExcelImport.jsx';
import Login from './pages/Login.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/excelimport' component={ExcelImport} />
            <Route exact path='/login' component={Login} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;