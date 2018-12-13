import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Nav from './Components/nav/nav';
import Footer from './Components/footer/footer';
import routes from './routes';
import './App.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <div className="App">
            <Nav />
            {routes}
            <Footer />
          </div>
        </>
      </Router>
    );
  }
}

export default App;
