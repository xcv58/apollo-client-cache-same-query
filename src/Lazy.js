import React, { Component } from 'react'
import Posts from './Posts'
import PostCount from './PostCount'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const query = gql`{ allPosts { title id } }`

class Lazy extends Component {
  state = { open: true }

  render () {
    const { loading } = this.props.data
    if (loading) {
      return 'Loading...'
    }
    const { open } = this.state
    if (open) {
      return (
        <div>
          Lazy load
          <PostCount />
          <Posts />
        </div>
      )
    }
    return (
      <button onClick={() => this.setState({ open: true })}>
        Load
      </button>
    )
  }
}

export default graphql(query)(Lazy)
