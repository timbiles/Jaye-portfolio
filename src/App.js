import React from 'react';
import ApolloSplitClient from 'apollo-split-client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import styled, { createGlobalStyle } from 'styled-components';

import Nav from './Components/nav/nav';
import Footer from './Components/footer/footer';
import routes from './routes';
import music from './assets/images/music-sheet.jpg';
import './App.scss';

const { client } = new ApolloSplitClient({
  uri: 'http://localhost:3004/graphql',
  credentials: 'include'
});

const App = () => {
    return (
      <ApolloProvider client={client}>
        <Router>
          <>
            <GlobalStyle />
            <Container>
              <Nav />
              {routes}
              <Footer />
            </Container>
          </>
        </Router>
      </ApolloProvider>
    );
  }

export default App;

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;

    ::selection {
      background: rgba(146, 206, 182, .6);
    }
  }

  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  }
`;

const Container = styled.div`
  text-align: center;
  margin: auto;
  margin-top: 5vh;
  margin-bottom: 5vh;
  border: 1px solid rgba(191, 191, 191, 0.7);
  min-height: 90vh;
  width: 90vw;

  @media (max-width: 950px) {
    border: none;
    min-height: 100vh;
    width: 100vw;
  }
`;