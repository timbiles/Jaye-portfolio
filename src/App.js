import React from 'react';
import ApolloSplitClient from 'apollo-split-client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import styled from 'styled-components';

import { GlobalStyle } from './styles/GlobalStyles';
import Nav from './Components/nav/nav';
import Footer from './Components/footer/footer';
import routes from './routes';

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
