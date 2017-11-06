import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo'
import apolloClient from './client'
import Duplicated from './Duplicated'
import Lazy from './Lazy'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <Router>
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">Welcome to React</h1>
              <ul>
                <li><Link to="/">Duplicate Example</Link></li>
                <li><Link to="/lazy">Noduplicate Example by lazy loading</Link></li>
              </ul>
            </header>
            <Route exact path="/" component={Duplicated}/>
            <Route exact path="/lazy" component={Lazy}/>
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
