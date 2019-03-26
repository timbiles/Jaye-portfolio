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
        <span/>
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
  background: url(https://firebasestorage.googleapis.com/v0/b/galaxy-routing.appspot.com/o/random%2Fluca-dugaro-397450-unsplash.jpg?alt=media&token=e3702de6-dd33-4633-887b-533017fd6852) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  margin: 0;
  padding: 0;
  border: 0;

  span {
    position: absolute;
    height: 100%;
    width: 100%;
    background: rgba( 255, 255, 255, 0.6)
  }

  .App {
  position: relative;
  text-align: center;
  margin: auto;
  margin-top: 5vh;
  margin-bottom: 5vh;
  /* border: 1px solid rgba(191, 191, 191, 0.7); */
  border: 1px solid black;
  /* box-shadow: 0px 0px 1px 15px rgba( 255, 255, 255, 0.8); */
  border-radius: 5px;
  /* background: rgba( 255, 255, 255, 0.8); */
  min-height: 90vh;
  width: 90vw;
  z-index: 1;
}

  @media (max-width: 950px) {
    .App {
      border: none;
      min-height: 100vh;
      width: 100vw;
    }
  }
`