import React, { Component } from 'react';
import logo from './logo.svg';
import { ApolloProvider } from 'react-apollo'
import apolloClient from './client'
import Posts from './Posts'
import PostCount from './PostCount'
import './App.css';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <PostCount />
          <PostCount />
          <PostCount />
          <PostCount />
          <Posts />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
