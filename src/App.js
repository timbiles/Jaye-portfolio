import React, { Component } from 'react';
import ApolloSplitClient from 'apollo-split-client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';

import Nav from './Components/nav/nav';
import Footer from './Components/footer/footer';
import routes from './routes';
import './App.scss';

const { client } = new ApolloSplitClient({
  uri: 'http://localhost:3004/graphql',
  credentials: 'include'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client} >
        <Router>
          <>
            <div className="App">
              <Nav />
              {routes}
              <Footer />
            </div>
          </>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
