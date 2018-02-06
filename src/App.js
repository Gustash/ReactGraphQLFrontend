import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { BatchHttpLink  } from 'apollo-link-batch-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import UserList from './components/UserList';

const apiURL = 'http://127.0.0.1:8000/graphql/'; // Localhost
//const apiURL = 'https://graphql-django.herokuapp.com/graphql/'; // Heroku app

const client = new ApolloClient({
  link: new BatchHttpLink ({ uri: apiURL }),
  cache: new InMemoryCache()
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <UserList />
      </ApolloProvider>
    );
  }
}

export default App;
