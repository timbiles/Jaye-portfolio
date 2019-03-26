import React, { Component } from 'react';
import ApolloSplitClient from 'apollo-split-client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import styled from 'styled-components';

import Nav from './Components/nav/nav';
import Footer from './Components/footer/footer';
import routes from './routes';
import music from './assets/images/music-sheet.jpg';
import './App.scss';

const { client } = new ApolloSplitClient({
  uri: 'http://localhost:3004/graphql',
  credentials: 'include'
});

class App extends Component {
  render() {
    return (
      <Main>
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
      </Main>
    );
  }
}

export default App;

const Main = styled.div`
  position: absolute;
  width: 100vw;
  background: url(${music}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  margin: 0;
  padding: 0;
  border: 0;

  .App {
  position: relative;
  text-align: center;
  margin: auto;
  margin-top: 5vh;
  margin-bottom: 5vh;
  border: 1px solid rgba(191, 191, 191, 0.7);
  /* background: rgba( 0, 0, 0, 0.3);
  box-shadow: 0px 0px 5px 5px rgba( 0, 0, 0, 0.3); */
  /* box-shadow: inset 0px 0px 5px 5px rgba( 0, 0, 0, 0.3), 0px 0px 5px 5px rgba( 0, 0, 0, 0.3); */
  box-shadow: 0px 0px 1px 15px rgba( 255, 255, 255, 0.99);
  border-radius: 5px;
  background: rgba( 255, 255, 255, 0.99);
  min-height: 90vh;
  width: 90vw;
  z-index: 1;
  /* padding: 1%; */
}

  @media (max-width: 950px) {
    .App {
      border: none;
      min-height: 100vh;
      width: 100vw;
    }
  }
`